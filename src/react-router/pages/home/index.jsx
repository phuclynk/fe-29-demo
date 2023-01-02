import { Outlet } from "react-router-dom";
import Layout from "../../layout/Layout";

function Home() {
  return <Layout content={<Outlet />} />;
}

export default Home;
