import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage"

function AuthenticatedApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
