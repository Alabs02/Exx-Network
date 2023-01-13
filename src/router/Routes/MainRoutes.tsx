import { Fragment } from "react";
import { Route } from "react-router-dom";

// MIDDLEWARES
// LAYOUTS
import { AppLayout } from "@/layouts";
// PAGES
import { HomePage } from "@/pages/main.pages";

const MainRoutes = () => {
  return (
    <Fragment>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Fragment>
  );
};

export { MainRoutes as default };
