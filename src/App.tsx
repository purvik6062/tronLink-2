// import logo from "./logo.svg";
import "./App.css";
import React, { useMemo } from "react";
import {
  BitKeepAdapter,
  OkxWalletAdapter,
  TokenPocketAdapter,
  TronLinkAdapter,
} from "@tronweb3/tronwallet-adapters";
import { WalletConnectAdapter } from "@tronweb3/tronwallet-adapter-walletconnect";
import { LedgerAdapter } from "@tronweb3/tronwallet-adapter-ledger";
import toast from "react-hot-toast";
import {
  useWallet,
  WalletProvider,
} from "@tronweb3/tronwallet-adapter-react-hooks";
import {
  WalletActionButton,
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalProvider,
  WalletSelectButton,
} from "@tronweb3/tronwallet-adapter-react-ui";
import { WalletError } from "@tronweb3/tronwallet-abstract-adapter";
import {
  WalletDisconnectedError,
  WalletNotFoundError,
} from "@tronweb3/tronwallet-abstract-adapter";
import { ConnectButton } from "./components/ConnectButton.jsx";
import Connect2Tron from "./components/Connect2Tron";
import TronLinkIntegration from "./components/TronLinkIntegration";
import NetworkStoreFunctional from "./components/NetworkStoreFunctional";
// import { toast } from "react-toastify";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  // function onError(e) {
  //   e = WalletError;
  //   if (e instanceof WalletNotFoundError) {
  //     toast.error(e.message);
  //     console.log(e.message);
  //   } else if (e instanceof WalletDisconnectedError) {
  //     toast.error(e.message);
  //   } else toast.error(e.message);
  // }

  
  function onError(e: WalletError) {
    if (e instanceof WalletNotFoundError) {
      toast.error(e.message);
      console.log(e.message);
    } else if (e instanceof WalletDisconnectedError) {
      toast.error(e.message);
    } else toast.error(e.message);
  }

  const adapters = useMemo(function () {
    const tronLinkAdapter = new TronLinkAdapter();
    const walletConnectAdapter = new WalletConnectAdapter({
      network: "Nile",
      options: {
        relayUrl: "wss://relay.walletconnect.com",
        projectId: "5fc507d8fc7ae13fff0b8071c7df2319",
        metadata: {
          name: "App",
          description: "WalletConnect",
          url: "https://your-dapp-url.org/",
          icons: ["https://your-dapp-url.org/mainLogo.svg"],
        },
      },
      web3ModalConfig: {
        themeMode: "dark",
        themeVariables: {
          "--w3m-z-index": "1000",
        },
      },
    });
    const ledger = new LedgerAdapter({
      accountNumber: 2,
    });
    const bitKeepAdapter = new BitKeepAdapter();
    const tokenPocketAdapter = new TokenPocketAdapter();
    const okxwalletAdapter = new OkxWalletAdapter();
    return [
      tronLinkAdapter,
      bitKeepAdapter,
      tokenPocketAdapter,
      okxwalletAdapter,
      walletConnectAdapter,
      ledger,
    ];
  }, []);

  return (
    <div className="App">
      <WalletProvider
        onError={onError}
        autoConnect={true}
        disableAutoConnectOnLoad={true}
        adapters={adapters}
      >
        <WalletModalProvider>
          {/* <ConnectButton /> */}
          <Connect2Tron />
          {/* <TronLinkIntegration /> */}
          {/* <NetworkStoreFunctional /> */}
        </WalletModalProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
