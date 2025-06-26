import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  InputAdornment,
  IconButton,
  Divider,
  Alert,
  Fade,
} from "@mui/material";
import { Visibility, VisibilityOff, Lock, Person } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const GradientButton = styled(Button)({
  background: "linear-gradient(45deg, #1976d2 30%, #2196f3 90%)",
  border: 0,
  borderRadius: 8,
  boxShadow: "0 3px 5px 2px rgba(33, 150, 243, .2)",
  color: "white",
  height: 48,
  padding: "0 30px",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 5px 8px 3px rgba(33, 150, 243, .3)",
    background: "linear-gradient(45deg, #1565c0 30%, #1e88e5 90%)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
});

const AnimatedPaper = styled(Paper)({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Input validation
    if (!username.trim() || !password.trim()) {
      setError("Both fields are required");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      // Demo credentials
      if (username === "admin" && password === "admin123") {
        localStorage.setItem("userRole", "admin");
        navigate("/admin/dashboard");
      } else if (username === "user" && password === "user123") {
        localStorage.setItem("userRole", "user");
        navigate("/user/dashboard");
      } else {
        setError("Invalid username or password");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://thinkzone.in/wp-content/uploads/2022/06/Instagram-1-1-1-1-2.png"
              width="85"
              height="85"
              alt="ThinkZone Logo"
              style={{
                borderRadius: "10px",
                maxWidth: "70px",
                maxHeight: "70px",
                display: "block",
                margin: "0 auto",
                objectFit: "cover",
              }}
            />
          </div>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              mt: 1,
              fontWeight: 700,
              background: "linear-gradient(45deg, #1976d2 30%, #2196f3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            THINKZONE
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to access your dashboard
          </Typography>
        </Box>

        <AnimatedPaper
          elevation={6}
          sx={{
            p: 4,
            width: "100%",
            borderRadius: 3,
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Fade in={!!error}>
            <Box sx={{ mb: 2 }}>
              <Alert severity="error" sx={{ borderRadius: 2 }}>
                {error}
              </Alert>
            </Box>
          </Fade>
          <Box component="form" onSubmit={handleLogin} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username or Email"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username or email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mt: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />

            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 1,
              }}
            >
              <Link href="#" variant="body2" underline="hover">
                Forgot password?
              </Link>
            </Box> */}

            <GradientButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!username || !password || isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </GradientButton>

            <Divider sx={{ my: 2 }}>OR</Divider>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Button
                variant="outlined"
                sx={{ borderRadius: 2 }}
                onClick={() => {
                  setUsername("admin");
                  setPassword("admin123");
                }}
              >
                Demo Admin
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: 2 }}
                onClick={() => {
                  setUsername("user");
                  setPassword("user123");
                }}
              >
                Demo User
              </Button>
            </Box>
          </Box>
        </AnimatedPaper>

        {/* <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <Link href="#" variant="body2" fontWeight="bold">
            Sign up
          </Link>
        </Typography> */}
      </Box>
    </Container>
  );
};

export default Login;
