import React, { Fragment, FC } from "react";

// INTERFACES
export interface IAppProgressProps {
  percent: number;
}

const AppProgress: FC<IAppProgressProps> = () => {
  return (
    <Fragment>
      <div className="app-progress">
        <div style={{ width: "45%" }} className="app-progress__bar"></div>
      </div>
    </Fragment>
  );
};

export { AppProgress as default };
