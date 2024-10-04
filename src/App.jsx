import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import RequestAirdrop from "./components/RequestAirdrop";
import ShowBalance from "./components/ShowBalance";
import { SendTokens } from "./components/SendTokens";
import SignMesssage from "./components/SignMessage";

function App() {
  return (
    <div>
      <ConnectionProvider
        endpoint={
          "https://devnet.helius-rpc.com/?api-key=4ba31a55-25a1-4117-984f-5a2c5e5b7504"
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 1000,
              }}
            >
              <WalletMultiButton />
            </div>
            <RequestAirdrop />
            <ShowBalance />
            <SendTokens />
            <SignMesssage />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
