import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { ed25519 } from "@noble/curves/ed25519";
import bs58 from "bs58";

export default function SignMessage() {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState("");

  async function onClick() {
    if (!publicKey) {
      throw new Error("Wallet not connected!");
    }
    if (!signMessage) {
      throw new Error("Wallet does not support message signing!");
    }
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes()))
      throw new Error("Message signature invalid!");
    alert("success", `Message signature: ${bs58.encode(signature)}`);
  }

  return (
    <div>
      <div>
        <h2>Sign Message</h2>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message to sign"
          style={{
            padding: "10px",
            fontSize: "16px",
            outline: "none",
          }}    
        />
        <button onClick={onClick}>Sign Message</button>
      </div>
    </div>
  );
}
