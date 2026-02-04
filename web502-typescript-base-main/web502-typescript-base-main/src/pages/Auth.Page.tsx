import { useState } from "react";

function AuthPage() {
  // state lưu dữ liệu form
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // state lưu lỗi
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate username
    if (username.length <= 4) {
      setError("Username phải lớn hơn 4 ký tự");
      return;
    }

    // Validate email
    if (!email.includes("@")) {
      setError("Email không hợp lệ");
      return;
    }

    // Validate password
    if (password.length <= 6) {
      setError("Password phải lớn hơn 6 ký tự");
      return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setError("Confirm password không khớp");
      return;
    }

    // Nếu không lỗi
    alert("Đăng ký thành công 🎉");
    console.log({ username, email, password });
  };

  return (
    <div style={{ width: "350px", margin: "50px auto" }}>
      <h2>Authentication</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AuthPage;
