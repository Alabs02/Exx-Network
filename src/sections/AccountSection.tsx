import React, { Fragment, useEffect, useState } from "react";

// ETHERS
import { BigNumber, ethers } from "ethers";

// COMPONENTS
import { AppProgress, TextBox } from "@/components/forms";

// SERVICES
import { $number } from "@/services";

// HOOKS
import { useAccount, useContractRead } from "wagmi";

// CONTRACT
import { PRESALE_SMART_CONTRACT, USDT_SMART_CONTRACT } from "@/contracts";

const AccountSection = () => {
  const { address } = useAccount();

  const { data: balanceOf } = useContractRead({
    ...USDT_SMART_CONTRACT,
    functionName: "balanceOf",
    args: [address ?? "0x0"],
  });

  const { data: symbol } = useContractRead({
    ...USDT_SMART_CONTRACT,
    functionName: "symbol",
  });

  const { data: raisedBNB } = useContractRead({
    ...PRESALE_SMART_CONTRACT,
    functionName: "raisedBNB",
  });

  const { data: hardCap } = useContractRead({
    ...PRESALE_SMART_CONTRACT,
    functionName: "hardCap",
  });

  const _balanceOf =
    balanceOf && $number.convertToNumber((balanceOf as any)._hex  ?? BigNumber.from(0));

  const _raisedBnb: BigNumber = raisedBNB ? (raisedBNB as BigNumber) : BigNumber.from(0);
  const _hardCap: BigNumber = hardCap ? (hardCap as BigNumber) : BigNumber.from(0);

  const percentage: number =
    (Number(ethers.utils.formatUnits(_raisedBnb)) /
      Number(ethers.utils.formatUnits(_hardCap))) *
    100;

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <section className="acct-section">
        <div className="acct-section__badge">
          Your bal: {`${_balanceOf ?? 0.0} ${symbol ?? 'USDT'}`}
        </div>

        <div className="acct-section__card">
          <div className="acct-section__card-header">
            <div className="acct-section__card-heading">{time}</div>

            <div className="acct-section__card-badge">Pending</div>
          </div>

          <div className="acct-section__card-body">
            <div className="progress-section__title">Sale Progress</div>

            <div className="progress-section__container">
              <AppProgress percent={percentage ?? 0} />
            </div>

            <div className="card-form">
              <label htmlFor="amountValue" className="card-form__label">
                Enter amount to buy
              </label>

              <div className="card-form__panel">
                <TextBox />

                <button className="card-form__btn">Buy</button>
              </div>

              <div className="card-form__desc">
                <div className="card-form__copy">
                  Min. Buy: <span>30 USDT</span>
                </div>

                <div className="card-form__copy">
                  Max. Buy: <span>10,000 USDT</span>
                </div>
              </div>

              <div className="card-form__footer">
                <div className="card-form__footer-heading">Disclaimer:</div>

                <div className="card-form__footer-copy">
                  The information provided shall not in any way constitute a
                  recommendation as to whether you should invest in any product discussed.{" "}
                  <span>We accept no liability for any loss.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export { AccountSection as default };
