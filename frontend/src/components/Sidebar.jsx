import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* TOP PART */}
      <div className="sidebar-top">
        <h2 className="logo">FOREX</h2>

        <Link to="/">Dashboard</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/market">Market</Link>
        <Link to="/analysis">Analysis</Link>
        <Link to="/liquidity">Liquidity</Link>
      </div>

      {/* BOTTOM PART */}
      <div className="sidebar-bottom">
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default Sidebar;
