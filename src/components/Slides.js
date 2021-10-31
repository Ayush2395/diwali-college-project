import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import first from "../components/img/achievement/1.jpeg";
import second from "../components/img/achievement/3.png";
import third from "../components/img/achievement/4.png";
import fourth from "../components/img/achievement/5.jpeg";
import fifth from "../components/img/achievement/6.jpeg";
import sisxth from "../components/img/achievement/7.png";
import seventh from "../components/img/achievement/8.png";
import eighth from "../components/img/achievement/9.png";
import ninth from "../components/img/achievement/10.png";
import tenth from "../components/img/achievement/12.png";
import eleventh from "../components/img/achievement/11.png";

export default function Slides() {
  const history = useHistory();
  return (
    <div>
      <Carousel fade className="my-3">
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={first}
            alt="First slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />
          <Carousel.Caption>
            <h3>Cricket Match</h3>
            <p>CSE won by 3 Wickets</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={second}
            alt="Second slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption>
            <h3>World Engineer Day</h3>
            <p>Project display on World Engineer day.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={third}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption>
            <h3>World Engineer Day</h3>
            <p>PPT presentation on World Engineering Day</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={fourth}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption>
            <h3>Good Bye</h3>
            <p>A good bye to our favourite Kushwant Kaur mam</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={fifth}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption>
            <h3>World Engineer Day</h3>
            <p>PPT presentation on World Engineer Day</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={sisxth}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption className="text-dark">
            <h3>World Student's Day</h3>
            <p>Project exhibition on World Student's Day</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={seventh}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption>
            <h3>World Student's Day</h3>
            <p>Achievements on World Student's Day</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={eighth}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption className="text-dark">
            <h3>CSE Indutrial visit</h3>
            <p>Cloud Smartz Industrial Visit</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={ninth}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption>
            <h3>Good Bye</h3>
            <p>A good bye to our favourite Kushwant Kaur mam</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={tenth}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption>
            <h3>Good Bye</h3>
            <p>A good bye to our favourite Kushwant Kaur mam</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={eleventh}
            alt="Third slide"
            style={{
              position: "relative",
              left: "390px",
            }}
          />

          <Carousel.Caption>
            <h3>Good Bye</h3>
            <p>
            A good bye to our favourite Kushwant Kaur mam
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          left: "550px",
          color: "white",
          border: "2px solid white",
        }}
        className="btn mx-3 my-3 w-25"
        variant="outline-success"
        size="lg"
        onClick={() => history.push("/")}
      >
        Welcome again
      </Button>
    </div>
  );
}
