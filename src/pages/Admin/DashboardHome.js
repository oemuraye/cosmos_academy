import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { FaUsers, FaLayerGroup, FaChartBar } from "react-icons/fa";

const DashboardHome = ({ baseUrl }) => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/metrics/users`)
      .then((res) => {
        setMetrics(res.data.metrics);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching metrics:", err);
        setLoading(false);
      });
  }, [baseUrl]);

  if (loading) {
    return (
      <div className="mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      <h4 className="mb-4">Dashboard Overview</h4>

      {/* Total Users + By Category */}
      <Row className="g-4 mb-4">
        {/* Total Users */}
        <Col md={4}>
          <Card className="shadow text-white bg-primary h-100">
            <Card.Body className="text-center">
              <FaUsers size={40} className="mb-2" />
              <h6>Total Users</h6>
              <h4>{metrics?.total || 0}</h4>
            </Card.Body>
          </Card>
        </Col>

        {/* By Category */}
        {metrics?.byCategory &&
          Object.entries(metrics.byCategory).map(([category, count], idx) => {
            const colors = ["success", "info", "warning", "danger", "secondary"];
            const color = colors[idx % colors.length];
            return (
              <Col md={4} key={category}>
                <Card className={`shadow text-white bg-${color} h-100`}>
                  <Card.Body className="text-center">
                    <FaLayerGroup size={35} className="mb-2" />
                    <h6>{category}</h6>
                    <h4>{count}</h4>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>

      {/* Category & Level Breakdown */}
      <h5 className="mt-5 mb-3">Users by Category & Level</h5>
      <Row className="g-4">
        {metrics?.byCategoryLevel &&
          Object.entries(metrics.byCategoryLevel).map(([category, levels], idx) => {
            const colors = ["light", "dark", "info", "secondary"];
            const bg = colors[idx % colors.length];
            return (
              <Col md={4} key={category}>
                <Card className={`shadow-sm bg-${bg} text-${bg === "light" ? "dark" : "white"} h-100`}>
                  <Card.Body className="text-center">
                    <FaChartBar size={30} className="mb-2" />
                    <h6>{category}</h6>
                    <ul className="list-unstyled mb-0">
                      {Object.entries(levels).map(([level, count]) => (
                        <li key={level}>
                          <strong>{level}:</strong> {count} Users
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default DashboardHome;