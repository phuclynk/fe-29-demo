import { Link, useSearchParams } from "react-router-dom";
import "./style.scss";

export function SideBar() {
  const [search, setSearch] = useSearchParams();

  return (
    <div className="side-bar">
      <div>{search.get("txt")}</div>
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
