import pool from "../config/mysql.js";

export const getUserMetrics = async (req, res) => {
  try {
    // Query to get all users
    pool.query("SELECT category, level FROM users", (err, results) => {
      if (err) {
        console.error("❌ MySQL Metrics Error:", err);
        return res.status(500).json({ success: false, error: err.message });
      }

      const metrics = {
        total: results.length,
        byCategory: {},
        byCategoryLevel: {}
      };

      results.forEach(({ category, level }) => {
        // Count by category
        metrics.byCategory[category] = (metrics.byCategory[category] || 0) + 1;

        // Count by category + level
        if (!metrics.byCategoryLevel[category]) {
          metrics.byCategoryLevel[category] = {};
        }
        metrics.byCategoryLevel[category][level] =
          (metrics.byCategoryLevel[category][level] || 0) + 1;
      });

      return res.json({ success: true, metrics });
    });
  } catch (error) {
    console.error("❌ Metrics Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};