import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material"; // Added Toolbar to imports
import Sidebar from "../../components/Layout/Sidebar";
import Topbar from "../../components/Layout/Topbar";

const AdminHome = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar isAdmin={true} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Toolbar /> {/* This creates space below the AppBar */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminHome;
