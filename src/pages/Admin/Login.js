import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./admin.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;

    if (username === "admin" && password === "cosmos123") {
      localStorage.setItem("cosmos_admin_logged_in", "true");
      toast.success("Login successful!");
      navigate("/coscademy/admin");
    } else {
      toast.error("Invalid credentials");
    }
  };

    useEffect(() => {
      const isLoggedIn = localStorage.getItem("cosmos_admin_logged_in");
      if (isLoggedIn) {
        navigate("/coscademy/admin");
      }
    }, [navigate]);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-3">Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Username</label>
            <input type="text" name="username" className="form-control" value={form.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" className="form-control" value={form.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;