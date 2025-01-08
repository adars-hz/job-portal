import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData,
        { withCredentials: true }
      );
      setSuccess(data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Error registering user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: "40px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Create Account
        </Typography>

        {error && <Typography color="error" gutterBottom>{error}</Typography>}
        {success && <Typography color="primary" gutterBottom>{success}</Typography>}

        <form onSubmit={handleSubmit}>
          <TextField
            name="fullname"
            label="Full Name"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ddd" },
                "&:hover fieldset": { borderColor: "#4CAF50" },
                "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
              },
            }}
            fullWidth
            margin="normal"
            value={formData.fullname}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ddd" },
                "&:hover fieldset": { borderColor: "#4CAF50" },
                "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
              },
            }}
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ddd" },
                "&:hover fieldset": { borderColor: "#4CAF50" },
                "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
              },
            }}
            fullWidth
            margin="normal"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ddd" },
                "&:hover fieldset": { borderColor: "#4CAF50" },
                "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
              },
            }}
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
          />

          <Typography
            variant="body1"
            sx={{
              marginTop: "12px",
              marginBottom: "4px",
              fontWeight: "bold",
              color: "#333",
              fontSize: "14px",
            }}
          >
            Select Account Type:
          </Typography>
          <RadioGroup
            row
            name="role"
            value={formData.role}
            onChange={handleChange}
            sx={{ justifyContent: "space-between", marginBottom: "12px" }}
          >
            <FormControlLabel
              value="student"
              control={<Radio sx={{ "&.Mui-checked": { color: "#4CAF50" } }} />}
              label="Student"
            />
            <FormControlLabel
              value="recruiter"
              control={<Radio sx={{ "&.Mui-checked": { color: "#4CAF50" } }} />}
              label="Recruiter"
            />
          </RadioGroup>

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#4CAF50",
              "&:hover": { backgroundColor: "#45A049" },
              color: "white",
              marginTop: "16px",
              padding: "10px 20px",
              width: "100%",
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
          </Button>
        </form>

        <Typography
          variant="body2"
          sx={{
            marginTop: "16px",
            textAlign: "center",
            color: "#4CAF50",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => (window.location.href = "/login")}
        >
          Already have an account? Log In
        </Typography>
      </div>
    </div>
  );
};

export default Signup;
