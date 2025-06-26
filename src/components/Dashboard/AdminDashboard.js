import React from "react";
import { Box, Typography, Grid, Paper, Stack, Divider } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Current Month",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(99, 102, 241, 0.8)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "Previous Month",
        data: [45, 49, 60, 71, 46, 45, 30],
        backgroundColor: "rgba(167, 139, 250, 0.8)",
        borderColor: "rgba(167, 139, 250, 1)",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        cornerRadius: 4,
        displayColors: true,
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          color: "#6B7280",
          stepSize: 20,
        },
      },
    },
  };

  const stats = [
    { label: "Total Users", value: "1,256", change: "+12.5%", icon: "👥" },
    { label: "Revenue", value: "$24,589", change: "+18.7%", icon: "💰" },
    { label: "New Orders", value: "324", change: "+8.2%", icon: "🛒" },
    { label: "Pending", value: "15", change: "-3.1%", icon: "⏳" },
  ];

  const activities = [
    { text: "New order #1234 received", time: "2 mins ago" },
    { text: "User registration completed", time: "15 mins ago" },
    { text: "System update scheduled", time: "1 hour ago" },
    { text: "Payment processed for invoice #1001", time: "3 hours ago" },
    { text: "New support ticket opened", time: "5 hours ago" },
  ];

  return (
    <Box className="container" sx={{ p: { xs: 2, md: 3 } }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: { xs: 2, md: 3 },
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              className="dashboard-card stat-card"
              sx={{
                p: 2,
                // height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(99, 102, 241, 0.1)",
                    color: "primary.main",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1.5,
                    fontSize: "1.2rem",
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography variant="subtitle2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
              <Box sx={{ mt: "auto" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: stat.change.startsWith("+")
                      ? "success.main"
                      : "error.main",
                    display: "inline-flex",
                    alignItems: "center",
                    bgcolor: stat.change.startsWith("+")
                      ? "rgba(34, 197, 94, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                    px: 1,
                    borderRadius: 4,
                    fontSize: "0.75rem",
                  }}
                >
                  {stat.change}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}

        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <Paper
            className="dashboard-card activity-card"
            sx={{ p: { xs: 2, md: 3 }, height: "100%" }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Recent Activity
            </Typography>
            <Box className="activity-feed">
              <Stack spacing={2}>
                {activities.map((activity, index) => (
                  <Box key={index}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {activity.text}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {activity.time}
                    </Typography>
                    {index < activities.length - 1 && (
                      <Divider sx={{ my: 2 }} />
                    )}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
