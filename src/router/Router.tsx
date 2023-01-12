import { BrowserRouter, Routes } from "react-router-dom";

// ROUTES(JSX API)
import { MainRoutes } from "@/router/Routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {MainRoutes()} {/*  MAIN ROUTES  */}
      </Routes>
    </BrowserRouter>
  );
};

export { Router as default };
