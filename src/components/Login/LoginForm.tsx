import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        username,
        password,
      });
      // Handle the response from the backend
      console.log(response.data); // Example: { token: 'your_token_value' }
      // Redirect to a protected route or perform other actions
    } catch (error) {
      // Handle login error, e.g., display an error message
      console.log("Login error:", error);
    }
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
      <Link to="signup">
        <button>Sign Up </button>
      </Link>
      <Link to="add-product">
        <button>Add Product </button>
      </Link>
    </form>
  );
};
export default LoginForm;
