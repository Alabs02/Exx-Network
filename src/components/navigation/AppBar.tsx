import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

// COMPONENTS
import { Dropdown } from "antd";
import { AppButton, TextButton } from "@/components/core";

// ASSETS
import { staticImg } from "@/assets/images";
import { staticIcons } from "@/assets/icons";

// INTERFACES
import type { MenuProps } from "antd";

const AppBar = () => {
  const items: MenuProps["items"] = [
    {
      type: "divider",
    },
  ];

  return (
    <Fragment>
      <div className="app-bar">
        <div className="app-bar__logo">
          <NavLink to={"/"} className="app-bar__logo-link">
            Exx Network
          </NavLink>
        </div>

        <div className="app-bar__actions">
          <TextButton
            title={"Download  Tokenomics"}
            hasIcon={true}
            iconUrl={staticIcons.DOWNLOAD_ICON}
            imgAlt={"Download Icon"}
            classes={["btn--hide", "btn--show-laptop"]}
          />

          <AppButton
            title={"BSC Mainnet"}
            hasIcon={true}
            iconUrl={staticIcons.BINANCE_ICON}
            imgAlt={"Binance Icon"}
            classes={["btn--hide", "btn--show-laptop"]}
          />

          <AppButton
            title={"3FZbgi29.........V8eyH"}
            hasIcon={false}
            color={"#174AFF"}
            classes={["btn--hide", "btn--show-laptop"]}
          />

          <div className="app-bar__square">
            <img src={staticImg.SQUARE_ICON} draggable={false} alt="square-icon" />
          </div>

          <Dropdown
            menu={{ items }}
            placement={"bottomLeft"}
            trigger={["click", "hover"]}
          >
            <button className="btn btn--icon laptop:hidden">
              <img src={staticImg.MENU_ICON} alt={"menu icon"} draggable={false} />
            </button>
          </Dropdown>
        </div>
      </div>
    </Fragment>
  );
};

export { AppBar as default };
