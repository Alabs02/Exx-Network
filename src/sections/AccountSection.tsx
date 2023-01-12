import React, { Fragment } from "react";

// COMPONENTS
import { AppProgress, TextBox } from "@/components/forms";

const AccountSection = () => {
  return (
    <Fragment>
      <section className="acct-section">
        <div className="acct-section__badge">Your bal: 0.0000034 USDT</div>

        <div className="acct-section__card">
          <div className="acct-section__card-header">
            <div className="acct-section__card-heading">10:20:30</div>

            <div className="acct-section__card-badge">Pending</div>
          </div>

          <div className="acct-section__card-body">
            <div className="progress-section__title">Sale Progress</div>

            <div className="progress-section__container">
              <AppProgress percent={45} />
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
