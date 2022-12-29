import { Navigate, Route, Routes } from "react-router-dom";
import PageA from "./pages/page-a/PageA";
import PageB from "./pages/page-b/PageB";
import PageC from "./pages/page-c/PageC";

export function ReactRouterDemoApp() {
  return (
    <div className="router-demo">
      <Routes>
        <Route path="/" element={<Navigate to="/page-a" />} />

        <Route path="/page-a" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
        <Route path="/page-c" element={<PageC />} />
      </Routes>
    </div>
  );
}
