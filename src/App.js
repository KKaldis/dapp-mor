import { useMoralis, useERC20Balances } from "react-moralis";
import { useState } from "react";
import ButtonRGB from "./components/ButtonRGB";

function App() {
  const {
    authenticate,
    isAuthenticated,
    user,
    logout,
    Moralis,
    isAuthenticating,
  } = useMoralis();
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

  if (!isAuthenticated) {
    return (
      <div className="vw-100 vh-100  d-flex flex-column bg-dark justify-content-center align-items-center text-center text-light">
        <div className="w-100 p-5">
          {" "}
          <ButtonRGB
            label="LogIn"
            click={() => authenticate({ signingMessage: "QIFSHA" })}
          />
        </div>
        <div>{}</div>
      </div>
    );
  }

  return (
    <div className="vw-100 vh-100 d-flex flex-column bg-dark justify-content-center align-items-center text-light">
      <ButtonRGB label="Logout" click={() => logout()} />
      <div className=" p-3 shadow mt-5 text-center border border-light rounded">
        {" "}
        {"Connected Wallet: "}
        {user.attributes.ethAddress}
      </div>
      <div className="row p-4">
        <input
          value={address}
          className="form-control my-3"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          className="form-control my-3"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <ButtonRGB label="Send" click={() => send(amount, address)} />

      {data !== null && (
        <div className="container p-5 my-5 border border-1 border-light rounded">
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

export default App;
