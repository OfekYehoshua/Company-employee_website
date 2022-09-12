import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Aboutcard() {
  
  useEffect(() => {
    let windoWidth = window.innerWidth;
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ width: "30%" }} data-aos="zoom-in" >
      <h1 style={{ lineHeight: 1.25, fontSize: "48px" }} data-aos="zoom-in" >about us</h1>
      <p
        style={{
          marginTop: "35px",
          fonteight: "700",
          margin: "0 0 14px",
          color: "#99582a",
        }}
      >
        Our company was established in 2007, in order to deliver the highest
        level of IT support services.{" "}
      </p>
      <p style={{ color: "#99582a" }}>
        We are a team of high-skilled professionals who care about the level of
        information technology integration in modern business.{" "}
      </p>
    </div>
  );
}
