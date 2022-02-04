import { useMoralis } from "react-moralis";
import React from "react";

export default function Dashboard() {
  const [amount, setAmount] = React.useState();
  const { Moralis } = useMoralis();
  const web3 = new Moralis.Web3();
  const walletAddress = "0x0b60536035C4cE972190bE356003742F1e054557";

  // create query
  const query = new Moralis.Query("EthTokenBalances");
  query.equalTo("to_address", walletAddress);
  // subscribe for real-time updates
  const kaldor = async () => {
    const subscription = await query.subscribe();
    subscription.on("create", function (data) {
      const amountEth = web3.utils.fromWei(data.attributes.value);
      setAmount(amountEth);

      console.log(`${amountEth} deposited to Binance`);
    });
  };

  return (
    <div className="text-light">
      <button onClick={() => kaldor()}>button gett</button>
      {amount}
    </div>
  );
}
