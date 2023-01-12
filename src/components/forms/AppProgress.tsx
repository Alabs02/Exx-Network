import React, { Fragment, FC } from "react";

// INTERFACES
export interface IAppProgressProps {
  percent: number;
}

const AppProgress: FC<IAppProgressProps> = ({ percent }) => {
  return (
    <Fragment>
      <div className="app-progress">
        <div style={{ width: `${percent}%` }} className="app-progress__bar"></div>
      </div>
    </Fragment>
  );
};

export { AppProgress as default };
