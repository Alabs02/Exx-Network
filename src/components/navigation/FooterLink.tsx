import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

// INTERFACES
import { IComponent } from "@/interfaces";

const FooterLink: FC<IComponent.IFooterLinkProps> = ({
  label,
  to,
  classes = [],
  command
}) => {
  const footerLinkClassNames = classes.join(" ");

  return (
    <Fragment>
      <Link
        to={to}
        className={`footer__link hidden ${footerLinkClassNames}`}
        onClick={command}
      >
        <span>{label}</span>
      </Link>
    </Fragment>
  );
};

export { FooterLink as default };
