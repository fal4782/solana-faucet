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

function App() {
  return (
    <div>
      <ConnectionProvider
        endpoint={
          "https://solana-devnet.g.alchemy.com/v2/g6c4kKmJT_Qfb-yh81t2OpL2SoCJexAS"
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <WalletMultiButton />
            </div>
            <RequestAirdrop />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
