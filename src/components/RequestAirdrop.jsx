import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");

  async function requestAirdrop() {
    await connection.requestAirdrop(
      wallet.publicKey,
      Number(amount) * LAMPORTS_PER_SOL
    );
    alert("Airdrop successful");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
        }}
      >
        <input
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Amount"
          style={{
            padding: "10px",
            width: "100%",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <button onClick={requestAirdrop}>Request Airdrop</button>
      </div>
    </>
  );
}
