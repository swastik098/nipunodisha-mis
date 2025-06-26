import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const UserDashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Your Activities
            </Typography>
            <Typography>Last Login: Today</Typography>
            <Typography>Tasks Completed: 12</Typography>
            <Typography>Pending Tasks: 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <Typography>New message from admin</Typography>
            <Typography>System update scheduled</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;
