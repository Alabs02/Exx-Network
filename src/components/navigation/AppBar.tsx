// INTERFACES
import type { MenuProps } from "antd";
// COMPONENTS
import { Dropdown } from "antd";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { staticIcons } from "@/assets/icons";
// ASSETS
import { staticImg } from "@/assets/images";
import { AppButton, HandleConnection, TextButton } from "@/components/core";

const AppBar = () => {
  const items: MenuProps["items"] = [
    {
      type: "divider"
    }
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

          <HandleConnection />

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
