import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Layout";
import UserList from "./UserList"; // we'll build this next
import DashboardHome from "./DashboardHome"; // simple placeholder

const Admin = () => {
    const baseUrl = "https://server.cosmosconference.org/api";

  return (
    <section className="admin-page">
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<DashboardHome baseUrl={baseUrl} />} />
                <Route path="users" element={<UserList baseUrl={baseUrl} />} />
            </Route>
        </Routes>
    </section>
  );
};

export default Admin;