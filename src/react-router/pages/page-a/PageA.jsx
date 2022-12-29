import Layout from "../../layout/Layout";
import "./style.scss";

function PageA() {
  return (
    <div className="page-a">
      <Layout
        content={
          <div>
            <h1>Page A</h1>
          </div>
        }
      />
    </div>
  );
}

export default PageA;
