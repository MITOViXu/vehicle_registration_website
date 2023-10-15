import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
const NotConnected = (props) => {
  document.title = "Admin Car";
  const Helmet = (props) => {
    return <div className="w-100">{props.children}</div>;
  };

  return (
    <div>
       <button className="login-button" onClick={props.connectWallet}>
          Connect Metamask
        </button>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
    </div>
  );
};

export default NotConnected;
