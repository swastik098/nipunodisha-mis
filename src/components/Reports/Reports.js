import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Reports = ({ isAdmin }) => {
  const rows = [
    { id: 1, name: "Monthly Sales", date: "2023-06-01", createdBy: "Admin" },
    { id: 2, name: "User Activity", date: "2023-06-15", createdBy: "System" },
    { id: 3, name: "Inventory", date: "2023-05-28", createdBy: "Admin" },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {isAdmin ? "Admin Reports" : "Your Reports"}
      </Typography>
      <Paper sx={{ p: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Report Name</TableCell>
                <TableCell>Date</TableCell>
                {isAdmin && <TableCell>Created By</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  {isAdmin && <TableCell>{row.createdBy}</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Reports;
