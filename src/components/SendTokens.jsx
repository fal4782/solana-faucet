import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";

export function SendTokens() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [amount, setAmount] = useState();
  const [to, setTo] = useState();

  async function sendTokens() {
    if (!wallet.publicKey) {
      return;
    }

    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    await wallet.sendTransaction(transaction, connection);
    alert(`Sent ${amount} SOL to ${to}`);
  }

  return (
    <div>
        <h2>Send Tokens</h2>
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <input
          id="to"
          value={to}
          type="text"
          placeholder="To"
          style={{
            padding: "10px",
            fontSize: "16px",
            outline: "none",
          }}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          id="amount"
          value={amount}
          type="text"
          placeholder="Amount"
          style={{
            padding: "10px",
            fontSize: "16px",
            outline: "none",
          }}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={sendTokens}>Send</button>
    </div>
  );
}
