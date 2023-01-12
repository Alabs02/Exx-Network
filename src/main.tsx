import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";

// WAGMI WRAPPER
import { WagmiConfig } from "wagmi";

// RAINBOW WRAPPER
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

// WAGMI CLIENT
import { client, chains } from "@/client";

// APP
import { App } from "@/app";

// GLOBAL STYLES
import "nprogress/nprogress.css";
import "@/styles/global.scss";
import "animate.css/animate.min.css";
import "@rainbow-me/rainbowkit/styles.css";

// APP ROOT
const root = ReactDOM.createRoot(document.getElementById("app-root") as HTMLElement);

root.render(
  <WagmiConfig client={client}>
    <RainbowKitProvider chains={chains}>
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={persistor}>
          <StrictMode>
            <App />
          </StrictMode>
        </PersistGate>
      </Provider>
    </RainbowKitProvider>
  </WagmiConfig>,
);
