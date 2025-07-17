// src/pages/Admin/UserList.js

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Spinner } from "react-bootstrap";
import { FaEye, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

// const baseUrl = "https://server.cosmosconference.org/api";

const UserList = ({ baseUrl }) => {
  const [users, setUsers] = useState([]);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);

  const fetchUsers = async () => {
    setViewLoading(true);
    try {
      const { data } = await axios.get(`${baseUrl}/users`);
    //   console.log(data.data);
      setUsers(data.data);
    } catch (err) {
      toast.error("Failed to fetch users.");
    } finally {
      setViewLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleView = (user) => {
    setSelectedUser(user);
    setFormData(user);
    setShowViewModal(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    setDeleteLoading(true);
    try {
      await axios.delete(`${baseUrl}/users/${selectedUser.id}`);
      toast.success("User deleted successfully");
      fetchUsers();
    } catch {
      toast.error("Failed to delete user");
    } finally {
      setShowDeleteModal(false);
      setDeleteLoading(false);
    }
  };

  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      await axios.put(`${baseUrl}/users/${selectedUser.id}`, formData);
      toast.success("User updated successfully");
      setShowViewModal(false);
      fetchUsers();
    } catch {
      setUpdateLoading(false);
      toast.error("Failed to update user");
    }
  };

  return (
    <div className="container mt-4">
      <h3>All Registered Users</h3>
      {viewLoading ? (
          <div className="mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user.mongo_id || user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.category}</td>
                  <td>{user.level}</td>
                  <td>
                    <Button className="my-1" variant="info" size="sm" onClick={() => handleView(user)}>
                      <FaEye />
                    </Button>{" "}
                    <Button className="my-1" variant="danger" size="sm" onClick={() => handleDelete(user)}>
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
      )}

      {/* View/Update Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View/Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {["name", "email", "phone", "category", "level"].map((field) => (
            <Form.Group key={field} className="mb-3">
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
              <Form.Control
                type="text"
                value={formData[field] || ""}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                readOnly={field === "category" || field === "level"}
              />
            </Form.Group>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            {updateLoading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Update"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <strong>{selectedUser?.name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            {deleteLoading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Yes, Delete"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserList;