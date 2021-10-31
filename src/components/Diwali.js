import React from "react";
// import PinkMandala from '../../src/components/img/pink-mandala.png';
import Mandala from "../../src/components/img/mandala.png";
import Maa_Luxmi from "../../src/components/img/luxmi_maa.png";
// import Ganesh from '../../src/components/img/ganesh.png';
// import Color_mandala from '../../src/components/img/color_mandala.png';
import Floral_mandala from "../../src/components/img/floral_mandala.png";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Diwali() {
  const history = useHistory();

  return (
    <div>
      <section className="home-section" id="home">
        <div className="container">
          <div className="items">
            <div className="item-1">
              <div className="img-box">
                <img
                  src={Floral_mandala}
                  alt="pink-mandala"
                  className="color-mandala"
                  width="300"
                />
              </div>
            </div>
            <div className="item-2">
              <div className="img-box">
                <img
                  src={Mandala}
                  alt="mandala"
                  className="mandala"
                  width="450"
                />
              </div>
            </div>
            <div className="item-3">
              <div className="img-box">
                <img
                  src={Maa_Luxmi}
                  alt="luxmi-maa"
                  className="luxmi-maa"
                  width="300"
                />
              </div>
            </div>
            <div className="item-4">
              <div className="img-box">
                <img
                  src={Floral_mandala}
                  alt="pink-mandala"
                  className="color-mandala"
                  width="300"
                />
              </div>
            </div>
          </div>

          <span
            style={{
              color: "white",
              fontSize: "50px",
              zIndex: 2,
              fontFamily: "Poppins",
              position: "relative",
              left: "30px",
            }}
          >
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[
                "Happy Diwali",
                "शुभ दीपावली",
                "നിറഞ്ഞ",
                "ದೀಪಾವಳಿ",
                "ਦੀਵਾਲੀ ਮੁਬਾਰਕ",
                "শুভ দীপাবলি",
                "دیوالی مبارک",
              ]}
            />
          </span>
        </div>
        <Button onClick={() => history.push("/achievements")}>
          Our Achievements
        </Button>
      </section>
    </div>
  );
}
