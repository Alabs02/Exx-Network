import classNames from "classnames";
import React, { FC, Fragment } from "react";

// INTERFACES
import { IComponent } from "@/interfaces";

const AppButton: FC<IComponent.IAppButtonProps> = ({
  command,
  iconUrl = "",
  title,
  hasIcon,
  imgAlt = "icon",
  color = "#111315",
  classes = []
}) => {
  const buttonClassNames = classes.map((btnClass: string) => {
    const result = {
      [btnClass]: true
    };
    return result;
  });

  return (
    <Fragment>
      <button onClick={command} className={classNames("app-button", buttonClassNames)}>
        {hasIcon && (
          <div className="app-button__media">
            <img src={iconUrl} alt={imgAlt} />
          </div>
        )}

        <div style={{ color }} className="app-button__title">
          {title}
        </div>
      </button>
    </Fragment>
  );
};

export { AppButton as default };
