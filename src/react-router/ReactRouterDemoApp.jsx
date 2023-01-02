import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Home from "./pages/home";
import PageA from "./pages/page-a/PageA";
import PageB from "./pages/page-b/PageB";
import PageC from "./pages/page-c/PageC";
import PageD from "./pages/page-d/PageD";

export function ReactRouterDemoApp() {
  const navigate = useNavigate();

  return (
    <div className="router-demo">
      <Routes>
        {/* Nested route */}
        <Route path="/" element={<Home />}>
          <Route
            index
            element={
              <div>
                <h1>Page Default</h1>
              </div>
            }
          />
          <Route
            path="page-a"
            element={
              <div>
                <h1>Page A</h1>
                <button
                  onClick={() => {
                    navigate("page-d/123456");
                  }}
                >
                  Go to page D with Params
                </button>
              </div>
            }
          />
          <Route
            path="page-b"
            element={
              <div>
                <h1>Page B</h1>
              </div>
            }
          />
          <Route
            path="page-c"
            element={
              <div>
                <h1>Page C</h1>
              </div>
            }
          />
          <Route path="/page-d/:id" element={<PageD />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Page Not Found</h1>
              </div>
            }
          />
        </Route>
        {/* <Route path="page-a" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
        <Route path="/page-c" element={<PageC />} /> */}
      </Routes>
    </div>
  );
}
