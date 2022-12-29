import Layout from "../../layout/Layout";
import "./style.scss";

function PageB() {
  return (
    <div className="page-b">
      <Layout
        content={
          <div>
            <h1>Page B</h1>
          </div>
        }
      />
    </div>
  );
}

export default PageB;
