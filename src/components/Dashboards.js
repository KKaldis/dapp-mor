import React from "react";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import ButtonRGB from "./ui/ButtonRGB";

export default function Dashboards() {
  const { user, Moralis } = useMoralis();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [confirmations, setConfirmations] = useState();
  const [hash, setHash] = useState();
  const [value, setValue] = useState();
  const [gasPrice, setGasPrice] = useState();
  const [gasLimit, setGasLimit] = useState();
  const [amount, setAmount] = useState();
  const [address, setAddress] = useState();
  // const [user, setUserAddress] = useState()
  const [data, setData] = useState(null);
  const decimals = 1000000000000000000;

  const send = async (amount, address) => {
    const options = {
      type: "native",
      amount: Moralis.Units.ETH(amount),
      receiver: address,
    };
    let response = await Moralis.transfer(options);
    setFrom(response.from);
    setTo(response.to);
    setConfirmations(response.confirmations);
    setHash(response.hash);
    setValue(parseInt(response.value._hex) / decimals);
    setGasPrice(parseInt(response.gasPrice._hex) / decimals);
    setGasLimit(parseInt(response.gasLimit._hex) / decimals);
    console.log(response);
    setData(response);
  };

  return (
    <div className="p-5 rounded rgbShadow border border-secondary">
      <h3>Send Coins</h3>
      <div>
        <input
          value={address}
          className="form-control my-4"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          className="form-control my-4"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <ButtonRGB
        onClick={() => send(amount, address)}
        className="border-secondary"
      >
        Send
      </ButtonRGB>
      {data !== null && (
        <div className="w-lg-50 w-md-75 w-sm-100 p-5 my-5 border border-1 border-light rounded text-wrap">
          <div>
            <h5>Your Decentralized Receipt!</h5>
            {"From :"}
            {from}
          </div>
          <div>
            {"To: "}
            {to}
          </div>
          <div>
            {"Confimations: "}
            {confirmations}
          </div>
          <div>
            {"Hash: "}
            {hash}
          </div>
          <div>
            {"Amount: "}
            {value}
            {"₭"}
          </div>
          <div>
            {"Gas Fees: "}
            {gasPrice}
            {"₭"}
          </div>
          <div>
            {"Gas Limit: "}
            {gasLimit}
            {"₭"}
          </div>
        </div>
      )}
    </div>
  );
}
