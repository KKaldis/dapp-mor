import {
  useERC20Balances,
  useERC20Transfers,
  useNativeBalance,
  useNativeTransactions,
} from "react-moralis";
import React from "react";

export default function Dashboard() {
  // const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
  // const ERC20Balances = () => {
  //   return (
  //     <div>
  //       {error && <>{JSON.stringify(error)}</>}
  //       <button onClick={() => fetchERC20Balances({ params: { chain: "0x1", address: "0x0b60536035C4cE972190bE356003742F1e054557" } })}>Refetch</button>
  //       {console.log(data)}
  //       <pre>{JSON.stringify(data, null, 2)}</pre>
  //     </div>
  //   );
  // };

  // const { fetchERC20Transfers, data, error, isLoading, isFetching, } = useERC20Transfers();
  // const ERC20Transfers = () => {
  //   return (
  //     <div>
  //       {error && <>{JSON.stringify(error)}</>}
  //       <button onClick={() => fetchERC20Transfers()}>Refetch</button>
  //       {console.log(data)}

  //       <pre>{isFetching ? "fetching" : JSON.stringify(data, null, 2)}</pre>

  //     </div>
  //   );
  // };

  // function NativeBalance() {
  //   const { getBalances, data: balance, nativeToken, error, isLoading } = useNativeBalance({ address : "0x59bDAaBA2D58499d253f12C1194352a618CE8c85" });
  //   return <div> {balance.formatted}</div>;
  // }

  const { getNativeTransations, data, chainId, error, isLoading, isFetching } =
    useNativeTransactions();
  const NativeTransactions = () => {
    return (
      <div>
        {error && <>{JSON.stringify(error)}</>}
        <button
          onClick={() => getNativeTransations({ params: { chain: "0x1" } })}
        >
          Refetch
        </button>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {console.log(data)}
      </div>
    );
  };

  return (
    <div className="text-light">
      {/* <ERC20Balances /> */}
      {/* <ERC20Transfers /> */}
      {/* <NativeBalance/> */}
      <NativeTransactions />
    </div>
  );
}
