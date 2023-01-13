import React, { FC, Fragment } from "react";

// INTERFACES
import { IComponent } from "@/interfaces";

const IconButton: FC<IComponent.IIconButtonProps> = ({ imgUrl, classes, alt }) => {
  const butttonClasses = classes.join(" ");

  return (
    <Fragment>
      <button className={`btn btn--icon ${butttonClasses}`}>
        <img draggable={false} src={imgUrl} alt={alt || "icon"} />
      </button>
    </Fragment>
  );
};

export { IconButton as default };
