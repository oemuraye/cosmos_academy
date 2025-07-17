import User from "../models/user.js";
import pool from "../config/mysql.js";

export const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, data: results });
  });
};

export const getUserById = (req, res) => {
  const id = req.params.id;

  pool.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, data: results[0] });
  });
};


export const deleteUser = (req, res) => {
  const id = req.params.id;

  pool.query("SELECT mongo_id FROM users WHERE id = ?", [id], async (err, results) => {
    if (err || results.length === 0)
      return res.status(404).json({ success: false, error: "User not found" });

    const mongoId = results[0].mongo_id;

    // Delete from MongoDB
    try {
      await User.findByIdAndDelete(mongoId);
    } catch (error) {
      console.warn("⚠️ MongoDB delete warning:", error.message);
    }

    // Delete from MySQL
    pool.query("DELETE FROM users WHERE id = ?", [id], (err) => {
      if (err) return res.status(500).json({ success: false, error: err.message });
      res.json({ success: true, message: "User deleted" });
    });
  });
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email, phone, category, level } = req.body;

  pool.query("SELECT mongo_id FROM users WHERE id = ?", [id], async (err, results) => {
    if (err || results.length === 0)
      return res.status(404).json({ success: false, error: "User not found" });

    const mongoId = results[0].mongo_id;

    // Update MongoDB
    try {
      await User.findByIdAndUpdate(mongoId, { name, email, phone, category, level });
    } catch (error) {
      console.warn("⚠️ MongoDB update warning:", error.message);
    }

    // Update MySQL
    pool.query(
      "UPDATE users SET name = ?, email = ?, phone = ?, category = ?, level = ? WHERE id = ?",
      [name, email, phone, category, level, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        res.json({ success: true, message: "User updated" });
      }
    );
  });
};