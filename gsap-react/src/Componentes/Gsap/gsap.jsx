import "./gsap.css";
import { gsap } from "gsap";

const Square = () => {
  return <div className="square"></div>;
};

function Gsap() {
  gsap.to(".square", {
    rotation: 360,
    ease: "elastic.out(2,1)",
    duration: 2.5,
  });

  return (
    <>
      <Square text={"Cuadro para Gsap"} />
    </>
  );
}

export default Gsap;
