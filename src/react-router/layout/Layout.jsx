import { Content } from "../content/Content";
import { SideBar } from "../side-bar/SideBar";

import "./style.scss";

function Layout({ content }) {
  return (
    <div className="layout">
      <SideBar />
      <Content content={content} />
    </div>
  );
}

export default Layout;
