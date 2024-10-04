import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export default function ShowBalance() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(0);

  async function getBalance() {
    if (!wallet.publicKey) {
      return;
    }
    const balance = await connection.getBalance(wallet.publicKey);
    setBalance(balance / LAMPORTS_PER_SOL);
  }

  useEffect(() => {
    getBalance();
  }, [wallet.publicKey]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        <button onClick={getBalance}>Get Balance</button>
        <p
          style={{
            fontWeight: "300",
            margin: "0",
          }}
        >
          {balance} SOL
        </p>
      </div>
    </>
  );
}
