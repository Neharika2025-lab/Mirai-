
function Signup({ setPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup successful!");
    setPage("profile"); // go to ProfilePage after signup
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto", gap: "1rem" }}
      >
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
