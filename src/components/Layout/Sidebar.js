import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Box,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";

const Sidebar = ({ isAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6">
          {isAdmin ? "Admin Panel" : "User Dashboard"}
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to={isAdmin ? "/admin/reports" : "/user/reports"}
        >
          <ListItemIcon>
            <ReportsIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        {isAdmin && (
          <ListItem button component={Link} to="/admin/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
