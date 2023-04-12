import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav style={{ display: "flex", gap: "4vw" }}>
      <Link
        onClick={() => handleClick("speisekarte")}
        style={{
          borderRadius: "20px",
          border: "1px solid pink",
          backgroundColor:
            activeLink === "speisekarte" ? "lightgray" : "lightblue",
          color: "white",
          padding: "10px",
          textDecoration: "none",
        }}
        to="/speisekarte"
      >
        Speisekarte
      </Link>
      <Link
        onClick={() => handleClick("kontakt")}
        style={{
          borderRadius: "20px",
          border: "1px solid pink",
          backgroundColor: activeLink === "kontakt" ? "lightgray" : "lightblue",
          color: "white",
          padding: "10px",
          textDecoration: "none",
        }}
        to="/kontakt"
      >
        Kontakt
      </Link>
      <Link
        onClick={() => handleClick("oeffnungszeiten")}
        style={{
          borderRadius: "20px",
          border: "1px solid pink",
          backgroundColor:
            activeLink === "oeffnungszeiten" ? "lightgray" : "lightblue",
          color: "white",
          padding: "10px",
          textDecoration: "none",
        }}
        to="/oeffnungszeiten"
      >
        Öffnungszeiten
      </Link>
      <Link
        onClick={() => handleClick("galerie")}
        style={{
          borderRadius: "20px",
          border: "1px solid pink",
          backgroundColor: activeLink === "galerie" ? "lightgray" : "lightblue",
          color: "white",
          padding: "10px",
          textDecoration: "none",
        }}
        to="/galerie"
      >
        Galerie
      </Link>
    </nav>
  );
};

export default Navbar;
