import {
  useERC20Balances,
  useERC20Transfers,
  useNativeBalance,
  useNativeTransactions,
  useNFTBalances,
  useNFTTransfers,
} from "react-moralis";
import React from "react";
import ButtonRGB from "./ui/ButtonRGB";
import Loader from "./ui/Loader";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Balances() {
  return (
    <div className="text-light d-flex h-100 w-100 align-items-center justify-content-center p-3 p-sm-3 p-lg-4 p-xxl-5">
      <div
        className="p-3 p-sm-3 p-lg-4 p-xxl-5 rounded rgbShadow border border-secondary  glassMorphism overflow-auto h-100 w-100"
        style={{ maXheight: "100%" }}
      >
        <h1>ERC 20 Balances</h1>
        <ERC20Balances className="text-break text-wrap" />
        <h1>ERC 20 Transfers</h1>
        <ERC20Transfers className="text-break text-wrap" />
        <h1>Native Coin Balance</h1>
        <NativeBalance className="text-break text-wrap" />
        <h1>Native Coin Transactions</h1>
        <NativeTransactions className="text-break text-wrap" />
        <h1>NFT Balances</h1>
        <NFTBalances />
        <h1>NFT Transfers</h1>
        <NFTTransfers />
      </div>
    </div>
  );
}

const ERC20Balances = () => {
  const [shown, setShown] = React.useState(true);
  const { fetchERC20Balances, data, isLoading, isFetching, error } =
    useERC20Balances();

  return (
    <div>
      <div className="d-flex justify-content-between ">
        <ButtonRGB
          className="border border-secondary bg-dark"
          onClick={() =>
            fetchERC20Balances({
              params: {
                chain: "bsc",
                address: "0x898A9Eb0f6e49c8f5D33E678dd4bEfDCff77552A",
              },
            })
          }
        >
          Refetch ERC20Balances
        </ButtonRGB>
        <ButtonRGB
          className="border border-secondary"
          onClick={() => setShown(!shown)}
        >
          {shown ? (
            <>
              Hide
              <AiFillEyeInvisible className="ms-3" />{" "}
            </>
          ) : (
            <>
              Show
              <AiFillEye className="ms-3" />{" "}
            </>
          )}
        </ButtonRGB>
      </div>
      {error && <>{JSON.stringify(error)}</>}
      <pre
        className="p-4 border border-secondary rounded shadow bg-dark"
        style={{ maxHeight: "50vh" }}
      >
        {shown ? (
          isFetching ? (
            <Loader />
          ) : (
            JSON.stringify(data, null, 2)
          )
        ) : (
          <h2 className="m-0 p-5 d-flex flex-column justify-content-center align-items-center text-secondary">
            <AiFillEyeInvisible />
            Hidden
          </h2>
        )}
      </pre>
      {console.log("ERC20Balances: ", data)}
    </div>
  );
};

const ERC20Transfers = () => {
  const [shown, setShown] = React.useState(true);
  const { fetchERC20Transfers, data, error, isLoading, isFetching } =
    useERC20Transfers();

  return (
    <div>
      <div className="d-flex justify-content-between ">
        <ButtonRGB
          className="border border-secondary bg-dark"
          onClick={() =>
            fetchERC20Transfers({
              params: {
                chain: "bsc",
                address: "0x898A9Eb0f6e49c8f5D33E678dd4bEfDCff77552A",
              },
            })
          }
        >
          Refetch ERC20Transfers
        </ButtonRGB>
        <ButtonRGB
          className="border border-secondary"
          onClick={() => setShown(!shown)}
        >
          {shown ? (
            <>
              Hide
              <AiFillEyeInvisible className="ms-3" />{" "}
            </>
          ) : (
            <>
              Show
              <AiFillEye className="ms-3" />{" "}
            </>
          )}
        </ButtonRGB>
      </div>
      {error && <>{JSON.stringify(error)}</>}
      <pre
        className="p-4 border border-secondary rounded shadow bg-dark"
        style={{ maxHeight: "50vh" }}
      >
        {shown ? (
          isFetching ? (
            <Loader />
          ) : (
            JSON.stringify(data, null, 2)
          )
        ) : (
          <h2 className="m-0 p-5 d-flex flex-column justify-content-center align-items-center text-secondary">
            <AiFillEyeInvisible />
            Hidden
          </h2>
        )}
      </pre>
      {console.log("ERC20Transfers: ", data)}
    </div>
  );
};

function NativeBalance() {
  const [shown, setShown] = React.useState(true);
  const {
    getBalances,
    data: balance,
    nativeToken,
    error,
    isLoading,
    isFetching,
  } = useNativeBalance();

  return (
    <div>
      <div className="d-flex justify-content-between ">
        <ButtonRGB
          className="border border-secondary bg-dark"
          onClick={() =>
            getBalances({
              params: {
                chain: "0x3",
                address: "0x0b60536035C4cE972190bE356003742F1e054557",
              },
            })
          }
        >
          Refetch NativeBalance
        </ButtonRGB>
        <ButtonRGB
          className="border border-secondary"
          onClick={() => setShown(!shown)}
        >
          {shown ? (
            <>
              Hide
              <AiFillEyeInvisible className="ms-3" />{" "}
            </>
          ) : (
            <>
              Show
              <AiFillEye className="ms-3" />{" "}
            </>
          )}
        </ButtonRGB>
      </div>
      {error && <>{JSON.stringify(error)}</>}
      <pre
        className="p-4 border border-secondary rounded shadow bg-dark"
        style={{ maxHeight: "50vh" }}
      >
        {shown ? (
          isFetching ? (
            <Loader />
          ) : (
            <>
              {" "}
              {JSON.stringify(balance, null, 2)}
              {JSON.stringify(nativeToken, null, 2)}{" "}
            </>
          )
        ) : (
          <h2 className="m-0 p-5 d-flex flex-column justify-content-center align-items-center text-secondary">
            <AiFillEyeInvisible />
            Hidden
          </h2>
        )}
      </pre>
      {console.log("Balance: ", balance)}
      {console.log("NativeBalance: ", nativeToken)}
    </div>
  );
}

const NativeTransactions = () => {
  const [shown, setShown] = React.useState(true);
  const { getNativeTransations, data, chainId, error, isLoading, isFetching } =
    useNativeTransactions({
      params: {
        chain: "0x4",
        address: "0x0b60536035C4cE972190bE356003742F1e054557",
      },
    });

  return (
    <div>
      <div className="d-flex justify-content-between ">
        <ButtonRGB
          className="border border-secondary bg-dark"
          onClick={() =>
            getNativeTransations({
              params: {
                chain: "bsc",
                address: "0x898A9Eb0f6e49c8f5D33E678dd4bEfDCff77552A",
              },
            })
          }
        >
          Refetch NativeTransactions
        </ButtonRGB>
        <ButtonRGB
          className="border border-secondary"
          onClick={() => setShown(!shown)}
        >
          {shown ? (
            <>
              Hide
              <AiFillEyeInvisible className="ms-3" />{" "}
            </>
          ) : (
            <>
              Show
              <AiFillEye className="ms-3" />{" "}
            </>
          )}
        </ButtonRGB>
      </div>
      {error && <>{JSON.stringify(error)}</>}
      <pre
        className="p-4 border border-secondary rounded shadow bg-dark"
        style={{ maxHeight: "50vh" }}
      >
        {shown ? (
          isFetching ? (
            <Loader />
          ) : (
            JSON.stringify(data, null, 2)
          )
        ) : (
          <h2 className="m-0 p-5 d-flex flex-column justify-content-center align-items-center text-secondary">
            <AiFillEyeInvisible />
            Hidden
          </h2>
        )}
      </pre>
      {console.log("NativeTransactions :", data)}
    </div>
  );
};

const NFTBalances = () => {
  const [shown, setShown] = React.useState(true);
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  return (
    <div>
      <div className="d-flex justify-content-between ">
        <ButtonRGB
          className="border border-secondary bg-dark"
          onClick={() =>
            getNFTBalances({
              params: {
                chain: "bsc",
                address: "0x898A9Eb0f6e49c8f5D33E678dd4bEfDCff77552A",
              },
            })
          }
        >
          Refetch NFTBalances
        </ButtonRGB>
        <ButtonRGB
          className="border border-secondary"
          onClick={() => setShown(!shown)}
        >
          {shown ? (
            <>
              Hide
              <AiFillEyeInvisible className="ms-3" />{" "}
            </>
          ) : (
            <>
              Show
              <AiFillEye className="ms-3" />{" "}
            </>
          )}
        </ButtonRGB>
      </div>
      {error && <>{JSON.stringify(error)}</>}
      <pre
        className="p-4 border border-secondary rounded shadow bg-dark"
        style={{ maxHeight: "50vh" }}
      >
        {shown ? (
          isFetching ? (
            <Loader />
          ) : (
            JSON.stringify(data, null, 2)
          )
        ) : (
          <h2 className="m-0 p-5 d-flex flex-column justify-content-center align-items-center text-secondary">
            <AiFillEyeInvisible />
            Hidden
          </h2>
        )}{" "}
        {console.log("NFTBalances: ", data)}
      </pre>
    </div>
  );
};

const NFTTransfers = () => {
  const [shown, setShown] = React.useState(true);
  const { fetch, data, error, isLoading, isFetching } = useNFTTransfers();

  return (
    <div>
      <div className="d-flex justify-content-between ">
        <ButtonRGB
          className="border border-secondary bg-dark"
          onClick={() =>
            fetch({
              params: {
                chain: "bsc",
                address: "0x1d978755949edeced847aee4b6bc80706c5eab91",
              },
            })
          }
        >
          Refetch NFTTransfers
        </ButtonRGB>
        <ButtonRGB
          className="border border-secondary"
          onClick={() => setShown(!shown)}
        >
          {shown ? (
            <>
              Hide
              <AiFillEyeInvisible className="ms-3" />{" "}
            </>
          ) : (
            <>
              Show
              <AiFillEye className="ms-3" />{" "}
            </>
          )}
        </ButtonRGB>
      </div>
      {error && <>{JSON.stringify(error)}</>}
      <pre
        className="p-4 border border-secondary rounded shadow bg-dark"
        style={{ maxHeight: "50vh" }}
      >
        {shown ? (
          isFetching ? (
            <Loader />
          ) : (
            JSON.stringify(data, null, 2)
          )
        ) : (
          <h2 className="m-0 p-5 d-flex flex-column justify-content-center align-items-center text-secondary">
            <AiFillEyeInvisible />
            Hidden
          </h2>
        )}
      </pre>
      {/* <img src={data} */}
      {console.log("NFTTransfers: ", data)}
    </div>
  );
};
