import React from "react";

export default function Diwali() {
  return (
    <div>
      <section className="home-section" id="home">
        <div className="container">
          <div className="items">
            <div className="item-1">
              <div className="img-box">
                <img
                  src="img/pink-mandala.png"
                  alt="pink-mandala"
                  className="pink-mandala"
                  width="300"
                />
              </div>
            </div>
            <div className="item-2">
              <div className="img-box">
                <img
                  src="../../../img/mandala.png"
                  alt="mandala"
                  className="mandala"
                  width="450"
                />
              </div>
            </div>
            <div className="item-3">
              <div className="img-box">
                <img
                  src="img/luxmi_maa.png"
                  alt="luxmi-maa"
                  className="luxmi-maa"
                  width="300"
                />
              </div>
            </div>
            <div className="item-4">
              <div className="img-box">
                <img
                  src="img/pink-mandala.png"
                  alt="pink-mandala"
                  className="pink-mandala"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="gsTitle">
          <div className="gsTitle-title"></div>
          <div className="gsTitle-title gsTitle-color gsTitle-a"></div>
          <div className="gsTitle-title gsTitle-color gsTitle-b"></div>
        </div>
      </section>
      {/* <link rel="stylesheet" href="../../../css/diwali.css"></link> */}
    </div>
  );
}
