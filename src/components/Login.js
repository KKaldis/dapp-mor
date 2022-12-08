import Loader from "./ui/Loader";
import Tilt from 'react-tilt'
import Button1 from "./ui/Button1";

export default function Login() {
  const options = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 300,    // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (


    <Tilt className="Tilt box" options={options} >
      <div className="p-5 text-center ">

        <div className="rgbShadow  glassMorphism border-primary rounded  fancy-border">
          <h3 className="neonText  rounded m-0 delay py-4 px-5">
            Hello
          </h3>
          {/* <Loader /> */}
          <p>
            This website has been design for showcase purposes.
            Functionality is not the case in this web page.
          </p>
          <Button1 >
            OK!
          </Button1>
        </div>
      </div >
    </Tilt>

  );
}
