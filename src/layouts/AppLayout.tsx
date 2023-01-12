import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import { AppBar, Footer } from "@/components/navigation";

const AppLayout = () => {
  return (
    <Fragment>
      <div className="app-layout">
        <AppBar />

        <div className="app-layout__content">
          <Outlet />
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export { AppLayout as default };
