import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        variant="h1"
        component="div"
        color="primary"
        sx={{ fontWeight: "bold", fontSize: { xs: "6rem", sm: "8rem" } }}
      >
        404
      </Typography>
      <Typography variant="h5" component="h2" color="text.primary">
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary">
        The page you're looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
