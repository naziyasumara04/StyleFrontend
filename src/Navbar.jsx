import { Link } from "react-router-dom";
import "./search/search.css";

export default function Navbar() {
  return (
    <div>
      <div
        class="sty"
        className="under"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Link to="/women">WOMEN</Link>
        <Link to="/men">MEN</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/beauty">BEAUTY</Link>
        <Link to="/watches">WATCHES</Link>
      </div>
    </div>
  );
}
