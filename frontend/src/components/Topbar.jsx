import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <input placeholder="Search..." />

      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        style={{ borderRadius: "50%", cursor: "pointer" }}
        onClick={() => navigate("/profile")}
      />
    </div>
  );
}

export default Topbar;
