import React, { Fragment } from "react";

const TextBox = () => {
  return (
    <Fragment>
      <div className="text-box">
        <input className="text-box__input" type="number" placeholder="00.00 USDT" />

        <div className="text-box__divider"></div>

        <input
          className="text-box__input text-box__input--small"
          type="number"
          placeholder="00.00 EXX"
        />
      </div>
    </Fragment>
  );
};

export { TextBox as default };
