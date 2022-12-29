import { Link } from "react-router-dom";
import "./style.scss";

export function SideBar() {
  return (
    <div className="side-bar">
      <div>
        <Link to={"/page-a"}>Page A</Link>
      </div>
      <div>
        <Link to={"/page-b"}>Page B</Link>
      </div>
      <div>
        <Link to={"/page-c"}>Page C</Link>
      </div>
    </div>
  );
}
