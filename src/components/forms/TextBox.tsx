import React, { Fragment, FC, Dispatch, SetStateAction, ChangeEvent } from "react";
interface IProps {
  setAmount: Dispatch<SetStateAction<number>>;
  isBuying: boolean;
  isWaitingToBuy: boolean;
}

const TextBox: FC<IProps> = ({ isBuying, isWaitingToBuy, setAmount }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(parseInt(e.target.value, 10));

  return (
    <Fragment>
      <div className="text-box">
        <input
          disabled={isBuying || isWaitingToBuy}
          min={30}
          max={10000}
          className="text-box__input"
          type="number"
          placeholder="00.00 USDT"
          onChange={handleChange}
        />

        <div className="text-box__divider"></div>

        <input
          readOnly={true}
          className="text-box__input text-box__input--small"
          type="number"
          placeholder="00.00 EXX"
        />
      </div>
    </Fragment>
  );
};

export { TextBox as default };
