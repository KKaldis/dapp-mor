import React from "react";
import { useERC20Balances } from "react-moralis";
import RGBButton from "../ui/RGBButton";
import Loader from "../ui/Loader";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function ERC20Balances() {
  const [shown, setShown] = React.useState(true);
  const { fetchERC20Balances, data, isLoading, isFetching, error } =
    useERC20Balances();

  React.useEffect(() => {
    fetchERC20Balances({
      params: {
        chain: "bsc",
        address: "0x898A9Eb0f6e49c8f5D33E678dd4bEfDCff77552A",
      },
    });
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between ">
        <RGBButton
          className="border border-secondary bg-dark"
          onClick={() => {
            setShown(true);
            fetchERC20Balances({
              params: {
                chain: "bsc",
                address: "0x898A9Eb0f6e49c8f5D33E678dd4bEfDCff77552A",
              },
            });
            console.log(data);
          }}
        >
          Refetch ERC20Balances
        </RGBButton>
        <RGBButton
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
        </RGBButton>
      </div>
      <pre
        className="p-4 border border-secondary rounded bg-dark insetShadow"
        style={{ maxHeight: "50vh" }}
      >
        {error && <div>{JSON.stringify(error)}</div>}

        {shown ? (
          isFetching ? (
            <Loader />
          ) : (
            data &&
            data.map((asset, i) => (
              <div key={i} className="border border-secondary p-3 rounded m-3">
                <div>Token Name: {asset.name}</div>
                <div>Token Symbol: {asset.symbol}</div>
                <div>Token Address: {asset.token_address}</div>
                <div>
                  {"Token Formated Balance: "}
                  {parseInt(asset.balance) /
                    10 ** parseInt(asset.decimals)}{" "}
                  {(" ", asset.symbol)}
                </div>
                <div>Token Raw Balance: {asset.balance}</div>
                <div>Token Decimals: {asset.decimals}</div>
              </div>
            ))
          )
        ) : (
          <h2 className="m-0 p-3 d-flex flex-column justify-content-center align-items-center text-secondary">
            <AiFillEyeInvisible />
            Hidden
          </h2>
        )}
      </pre>
      {console.log("ERC20Balances: ", data)}
    </div>
  );
}
