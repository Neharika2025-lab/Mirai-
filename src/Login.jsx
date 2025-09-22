
function Login({ setPage }) {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login successful!");
    setPage("profile"); // after login, go to ProfilePage
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Log In</h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "auto",
          gap: "1rem",
        }}
      >
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Don’t have an account?{" "}
        <button onClick={() => setPage("signup")}>Sign Up</button>
      </p>
    </div>
  );
}

export default Login;
