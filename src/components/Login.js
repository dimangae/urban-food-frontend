import React, { useState } from "react";
import { Box, TextField, Button, Typography, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.text();

      if (response.ok) {
        alert(data);
      } else {
        alert(data);
      }
    } catch (error) {
      alert("Error connecting to the server.");
      console.error("Login error:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `url(https://images.deliveryhero.io/image/fd-my/LH/a3c6-hero.jpg) no-repeat center center`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent background
          backdropFilter: "blur(10px)",                 // Blurs the background beneath
          borderRadius: 2,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          p: 4,
          textAlign: "center",
          width: "100%",
          maxWidth: 400,
        }}
      >
        {/* Top user icon */}
        <AccountCircleIcon sx={{ fontSize: 60, color: "#fff", mb: 1 }} />
        {/* Title */}
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#fff" }}>
          USER LOGIN
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              input: { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#fff" },
                "&:hover fieldset": { borderColor: "#fff" },
                "&.Mui-focused fieldset": { borderColor: "#fff" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              input: { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#fff" },
                "&:hover fieldset": { borderColor: "#fff" },
                "&.Mui-focused fieldset": { borderColor: "#fff" },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: "#2196f3",
              color: "#fff",
              "&:hover": { backgroundColor: "#1976d2" },
            }}
          >
            LOGIN
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
