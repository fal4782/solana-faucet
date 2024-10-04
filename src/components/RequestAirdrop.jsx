export default function RequestAirdrop() {
  function requestAirdrop() {
    console.log("Requesting airdrop");
  }

  return (
    <>
      <input type="text" value="Request Airdrop" onClick={requestAirdrop} />
      <button>Request Airdrop</button>
    </>
  );
}
