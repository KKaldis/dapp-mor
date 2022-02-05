import { useMoralis, useWeb3Transfer } from "react-moralis";
import { useState } from "react";
import ButtonRGB from "./ui/ButtonRGB";
import Modal from "./ui/Modal";

export default function Transfer() {
  const { Moralis } = useMoralis();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [confirmations, setConfirmations] = useState();
  const [hash, setHash] = useState();
  const [value, setValue] = useState();
  const [gasPrice, setGasPrice] = useState();
  const [gasLimit, setGasLimit] = useState();
  const [amount, setAmount] = useState();
  const [address, setAddress] = useState();
  const [modalToggle, setModalToggle] = useState(false);
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
    setModalToggle(true);
  };

  // const {fetch, error, isFetching} = useWeb3Transfer({
  //   amount: Moralis.Units.ETH(amount),
  //   receiver: address,
  //   type: "native",
  // })

  return (
    <div className=" text-center">
      <div className="p-3 p-sm-3 p-lg-4 p-xxl-5 rounded rgbShadow border border-secondary glassMorphism">
        <h2 className="neonText mb-5">Transfer Assets</h2>
        <div>
          <input
            value={address}
            className="form-control mt-4"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            value={amount}
            className="form-control mt-4"
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <ButtonRGB onClick={() => send()} className="border-secondary mt-5">
          Send
        </ButtonRGB>
      </div>
      {data !== null && modalToggle === true && (
        <Modal show={modalToggle} handleModal={() => setModalToggle(false)}>
          <div className="p-5 border border-secondary rounded text-wrap">
            <div>
              <h5>Successful Transfer</h5>
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
        </Modal>
      )}
    </div>
  );
}
