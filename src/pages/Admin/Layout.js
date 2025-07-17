import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { FiUsers, FiLogOut, FiMenu } from "react-icons/fi";
import { BsSpeedometer2 } from "react-icons/bs";
import logo from '../../assets/images/footerBrand_logo.png';
import "./admin.css";
import { toast } from "react-toastify";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("cosmos_admin_logged_in");
    toast.info("Logged out successfully");
    navigate("/admin-login");
  };

  return (
    <div className="admin-dashboard d-flex flex-column flex-md-row">
      {/* Sidebar */}
      <div className={`sidebar bg-dark text-white p-3 ${sidebarOpen ? "d-block" : "d-none"} d-md-block`}>

        {/* <h4 className="text-white text-center mb-4">Admin</h4> */}
        <Link to='/' className="navbar-brand">
          <img loading='lazy' src={logo} alt="logo" width="40px" height="55px" className='img-fluid' />
          <div>
            <span className="text-white">Cosmos</span>
            <span className="text-white">Academy</span>
          </div>
        </Link>

        <ul className="nav flex-column mt-3">
          <li className="nav-item mb-2">
            <Link to="/coscademy/admin" className="nav-link text-white d-flex align-items-center">
              <BsSpeedometer2 className="me-2" /> Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/coscademy/admin/users" className="nav-link text-white d-flex align-items-center">
              <FiUsers className="me-2" /> Users
            </Link>
          </li>
          <li className="nav-item mt-auto">
            <button onClick={handleLogout} className="btn btn-sm btn-outline-light w-100 d-flex align-items-center justify-content-center">
              <FiLogOut className="me-2" /> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content flex-grow-1 w-100">
        <nav className="navbar navbar-light bg-light px-3 d-flex justify-content-between align-items-center">
          <span className="navbar-brand mb-0 h5">Cosmos Admin Dashboard</span>
          <button
            className="btn btn-outline-secondary d-md-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu />
          </button>
        </nav>
        <div className="p-3" onClick={() => setSidebarOpen(false)} >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;