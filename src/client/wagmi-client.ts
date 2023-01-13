import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Configure chains & providers with the jsonRpc provider.
export const { chains, provider, webSocketProvider } = configureChains(
  [bscTestnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: import.meta.env.VITE_APP_BSC_RPC_URL
      })
    })
  ]
);

// Using Rainbow Kit
export const { connectors } = getDefaultWallets({
  appName: "Exx Network Dapp",
  chains
});

// Set up client
export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
});
