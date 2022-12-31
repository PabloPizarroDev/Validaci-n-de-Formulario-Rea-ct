import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  const tl = new gsap.timeline();
  tl.from(".page-not-found span, .logo", {
    duration: 0.8,
    stagger: {
      amount: 0.7,
    },
    y: 200,
    skewY: 10,
    opacity: 0,
  });
  tl.from(
    ".home-btn",
    {
      scale: 0,
      duration: 0.5,
      stagger: {
        amount: 0.6,
      },
    },
    "-=.4"
  );

  return (
    <>
      <div className="page-container">
        <div className="page-not-found">
          <span>PAGE</span>
          <span>
            <div className="span404">404</div>
            NOT
          </span>
          <span>FOUND</span>
        </div>
      </div>
      <div className="home-btn">
        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
    </>
  );
};

export default Error404;
