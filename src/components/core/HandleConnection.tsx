import React, { Fragment } from "react";

// COMPONENTS
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppButton } from "@/components/core";

// ASSETS
import { staticIcons } from "@/assets/icons";

const HandleConnection = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";

        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <Fragment>
            {(() => {
              if (!connected) {
                return (
                  <AppButton
                    title={"Connect Wallet"}
                    hasIcon={false}
                    color={"#174AFF"}
                    classes={["btn--hide", "btn--show-laptop"]}
                    command={openConnectModal}
                  />
                );
              }

              if (chain.unsupported) {
                return (
                  <AppButton
                    title={"Wrong network"}
                    hasIcon={false}
                    color={"#ff0866"}
                    classes={["btn--hide", "btn--show-laptop"]}
                    command={openChainModal}
                  />
                );
              }

              return (
                <Fragment>
                  <AppButton
                    title={chain.name || ""}
                    hasIcon={true}
                    iconUrl={staticIcons.BINANCE_ICON}
                    imgAlt={chain.name || ""}
                    classes={["btn--hide", "btn--show-laptop"]}
                    command={openChainModal}
                  />

                  <AppButton
                    title={account.displayName}
                    hasIcon={false}
                    color={"#174AFF"}
                    classes={["btn--hide", "btn--show-laptop"]}
                    command={openAccountModal}
                  />
                </Fragment>
              );
            })()}
          </Fragment>
        );
      }}
    </ConnectButton.Custom>
  );
};

export { HandleConnection as default };
