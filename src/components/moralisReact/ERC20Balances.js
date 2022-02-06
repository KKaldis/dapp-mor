import React from "react";
import { useERC20Balances } from "react-moralis";
import RGBButton from "./ui/RGBButton";
import Loader from "./ui/Loader";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default ERC20Balances = () => {
  const [shown, setShown] = React.useState(true);
  const { fetchERC20Balances, data, isLoading, isFetching, error } =
    useERC20Balances();

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
            JSON.stringify(data, null, 2)
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
};
