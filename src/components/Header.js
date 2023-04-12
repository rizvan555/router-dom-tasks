import Navbar from "./Navbar";
import { FaIceCream } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 30px",
      }}
    >
      <div
        className="left-box"
        style={{ display: "flex", alignItems: "center", gap: "3vw" }}
      >
        <FaIceCream size={32} />
        <h1 style={{ color: "pink" }}>Kim's Cafe Köln</h1>
      </div>

      <div className="right-box" style={{ display: "flex", gap: "5vw" }}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
