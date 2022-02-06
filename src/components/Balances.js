import React from "react";
import ERC20Balances from "./moralisReact/ERC20Balances";
import ERC20Transfers from "./moralisReact/ERC20Transfers";
import NativeBalance from "./moralisReact/NativeBalance";
import NativeTransactions from "./moralisReact/NativeTransactions";
import NFTBalances from "./moralisReact/NFTBalances";
import NFTTransfers from "./moralisReact/NFTTransfers";

export default function Balances() {
  return (
    <div className="text-light d-flex h-100 w-100 align-items-center justify-content-center p-3 p-sm-3 p-lg-4 p-xxl-5">
      <div
        className="p-3 p-sm-3 p-lg-4 p-xxl-5 rounded border border-secondary rgbShadow glassMorphism overflow-auto h-100 w-100"
        style={{ maXheight: "100%", overflowX: "hidden !important" }}
      >
        <h2 className="neonText pt-4">ERC 20 Balances</h2>
        <ERC20Balances className="text-break text-wrap" />
        <h2 className="neonText pt-4">ERC 20 Transfers</h2>
        <ERC20Transfers className="text-break text-wrap" />
        <h2 className="neonText pt-4">Native Coin Balance</h2>
        <NativeBalance className="text-break text-wrap" />
        <h2 className="neonText pt-4">Native Coin Transactions</h2>
        <NativeTransactions className="text-break text-wrap" />
        <h2 className="neonText pt-4">NFT Balances</h2>
        <NFTBalances />
        <h2 className="neonText pt-4">NFT Transfers</h2>
        <NFTTransfers />
      </div>
    </div>
  );
}
