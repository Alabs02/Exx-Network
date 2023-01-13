// GLOBAL STYLES
import "nprogress/nprogress.css";
import "@/styles/global.scss";
import "animate.css/animate.min.css";
import "@rainbow-me/rainbowkit/styles.css";

// RAINBOW WRAPPER
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// WAGMI WRAPPER
import { WagmiConfig } from "wagmi";

// APP
import { App } from "@/app";

// WAGMI CLIENT
import { chains, client } from "@/client";
import { persistor, store } from "@/store";

// CLEAR CONSOLES IN PRODUCTION
import { CleanConsole } from '@eaboy/clean-console';

// APP ROOT
const root = ReactDOM.createRoot(document.getElementById("app-root") as HTMLElement);

const prodMode = import.meta.env.PROD;

prodMode && CleanConsole.init({
  initialMessages: [{
    message: "We know you're a developer, but the console is forbidden!",
    style: 'color: #174AFF; font-size: 28px; font-weight: bold; font-family: "Comic Sans MS", cursive, sans-serif; line-height: 38px;'
  }]
});

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
  </WagmiConfig>
);
