import React, { Fragment } from "react";
import uuid from "react-uuid";

// COMPONENTS
import { FooterLink } from "@/components/navigation";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer__copy">&copy; 2022 Exx Network</div>

        <div className="footer__links">
          <FooterLink key={uuid()} to={"/"} label={"FAQ's"} />

          <div className="footer__divider"></div>

          <FooterLink
            key={uuid()}
            to={"/"}
            label={"Exx Website"}
            classes={["footer__link--hide", "footer__link--visible"]}
          />

          <FooterLink
            key={uuid()}
            to={"/"}
            label={"Privacy Policy"}
            classes={["footer__link--laptop-hide"]}
          />

          <div className="footer__divider"></div>

          <FooterLink
            key={uuid()}
            to={"/"}
            label={"Terms & Conditions"}
            classes={["footer__link--hide", "footer__link--visible"]}
          />

          <FooterLink
            key={uuid()}
            to={"/"}
            label={"Support"}
            classes={["footer__link--laptop-hide"]}
          />

          <FooterLink
            key={uuid()}
            to={"/"}
            label={"Help"}
            classes={["footer__link--hide", "footer__link--visible"]}
          />
        </div>
      </div>
    </Fragment>
  );
};

export { Footer as default };
