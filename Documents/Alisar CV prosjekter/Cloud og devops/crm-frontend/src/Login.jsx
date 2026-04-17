import { useState } from "react";
import API from "./api";

export default function Login({ setIsAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await API.post("/auth/login", {
        username: username,
        password: password,
      });

      console.log("SUCCESS:", res.data);

      localStorage.setItem("token", res.data.access_token);
      setIsAuth(true);

    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("RESPONSE:", err.response);
      console.log("DATA:", err.response?.data);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />

      <button onClick={login}>Login</button>
    </div>
  );
}