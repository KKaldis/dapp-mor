import {
  useERC20Balances,
  useERC20Transfers,
  useNativeBalance,
  useNativeTransactions,
  useNFTBalances,
  useNFTTransfers,
} from "react-moralis";
import React from "react";

export default function Balances() {
  return (
    <div className="text-light d-flex h-100 w-100 align-items-center p-5 justify-content-center">
      <div
        className="p-3 p-sm-3 p-lg-4 p-xxl-5 rounded rgbShadow border border-secondary  glassMorphism overflow-auto h-100 w-100"
        style={{ maXheight: "100%" }}
      >
        <h5>ERC 20 Balances</h5>
        <ERC20Balances className="text-break text-wrap" />
        <h5>ERC 20 Transfers</h5>
        <ERC20Transfers className="text-break text-wrap" />
        <h5>Native Coin Balance</h5>
        <NativeBalance className="text-break text-wrap" />
        <h5>Native Coin Transactions</h5>
        <NativeTransactions className="text-break text-wrap" />
        <h5>NFT Balances</h5>
        <NFTBalances />
        <h5>NFT Transfers</h5>
        <NFTTransfers />
      </div>
    </div>
  );
}

const ERC20Balances = () => {
  const { fetchERC20Balances, data, isLoading, isFetching, error } =
    useERC20Balances();

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
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
      </button>
      {console.log("ERC20Balances: ", data)}
      <pre>{isFetching ? "fetching" : JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const ERC20Transfers = () => {
  const { fetchERC20Transfers, data, error, isLoading, isFetching } =
    useERC20Transfers();

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
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
      </button>
      {console.log("ERC20Transfers: ", data)}
      <pre>{isFetching ? "fetching" : JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

function NativeBalance() {
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
      {error && <>{JSON.stringify(error)}</>}
      <button
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
      </button>
      <pre>{isFetching ? "fetching" : JSON.stringify(balance, null, 2)}</pre>
      <pre>
        {isFetching ? "fetching" : JSON.stringify(nativeToken, null, 2)}
      </pre>
      {console.log("NativeBalance: ", nativeToken)}
    </div>
  );
}

const NativeTransactions = () => {
  const { getNativeTransations, data, chainId, error, isLoading, isFetching } =
    useNativeTransactions({
      params: {
        chain: "0x4",
        address: "0x0b60536035C4cE972190bE356003742F1e054557",
      },
    });

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
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
      </button>
      <pre>{isFetching ? "fetching" : JSON.stringify(data, null, 2)}</pre>
      {console.log("NativeTransactions :", data)}
    </div>
  );
};

const NFTBalances = () => {
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
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
      </button>
      <pre>{isFetching ? "fetching" : JSON.stringify(data, null, 2)}</pre>
      {console.log("NFTBalances: ", data)}
    </div>
  );
};

const NFTTransfers = () => {
  const { fetch, data, error, isLoading, isFetching } = useNFTTransfers();

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
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
      </button>
      <pre>{isFetching ? "fetching" : JSON.stringify(data, null, 2)}</pre>
      {console.log("NFTTransfers: ", data)}
    </div>
  );
};
