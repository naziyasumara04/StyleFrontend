import Search from "./Search";
import Name from "./Name";
import Login from "./Login";
import Icons from "./Icons";
import "../index.css";
export default function Searchmain() {
  return (
    <div className="sty" style={{ marginTop: "10px" }}>
      <Name />
      <Search />
      <Login />

      <Icons />
    </div>
  );
}
