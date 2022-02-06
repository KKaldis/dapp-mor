import React from "react";
import { useNativeBalance } from "react-moralis";
import RGBButton from "./ui/RGBButton";
import Loader from "./ui/Loader";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function NativeBalance() {
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
        <RGBButton
          className="border border-secondary bg-dark"
          onClick={() => {
            setShown(true);
            getBalances({
              params: {
                chain: "0x3",
                address: "0x0b60536035C4cE972190bE356003742F1e054557",
              },
            });
          }}
        >
          Refetch NativeBalance
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
            <>
              {JSON.stringify(balance, null, 2)}
              {/* {JSON.stringify(nativeToken, null, 2)} */}
            </>
          )
        ) : (
          <h2 className="m-0 p-3 d-flex flex-column justify-content-center align-items-center text-secondary">
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
