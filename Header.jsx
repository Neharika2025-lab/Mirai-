
import logo from "./assets/logo.jpg";

function Header({ page, setPage }) {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <img
          src={logo}
          alt="SkillBridge Logo"
          style={{ height: "50px", cursor: "pointer" }}
          onClick={() => setPage("home")}
        />
        <h1 style={{ margin: 0 }}>Welcome to SkillBridge</h1>
      </div>

      {page !== "login" && page !== "signup" && (
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <li>
              <button onClick={() => setPage("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => setPage("about")}>About</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;

