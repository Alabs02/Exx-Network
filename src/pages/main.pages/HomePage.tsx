import React, { Fragment } from "react";

// COMPONENTS

// SECTIONS
import { AccountSection, TimeLineSection } from "@/sections";

const HomePage = (): JSX.Element => {
  return (
    <Fragment>
      <div className="home-page">
        <div className="home-page__row">
          <div className="home-page__col-one">
            <div className="home-page__heading">Be an early bird</div>

            <div className="home-page__subheading">
              It would take months before official project launch, so you should buy only
              if you can wait for the launch to trade your coins.
            </div>

            <div className="home-page__section">
              <TimeLineSection />
            </div>
          </div>

          <div className="home-page__col-two">
            <AccountSection />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { HomePage as default };
