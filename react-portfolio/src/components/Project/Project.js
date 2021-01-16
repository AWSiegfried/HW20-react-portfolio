import React from "react";
import "./project.css";

export default function Project(props) {
  // const [index, setIndex] = useState(0)

  return (
    <div className="container">
      <h4>{props.name}</h4>
      <h6>
        <a href={props.live} target="_blank">
          Live Application
        </a>
      </h6>
      <h6>
        <a href={props.github} target="_blank">
          Github Repository
        </a>
      </h6>
      <div className="row pictures">
        <div className="col-md-12 cold-sm-12">
          <img
            src={require("../../assets/images/nogym1.png")}
            alt="Placeholder"
            className="picture img-fluid"
          />
        </div>
      </div>
      <div className="row pictures">
        <div className="col-md-12 cold-sm-12">
          <img
            src={props.imageTwo}
            className="picture img-fluid"
          />
        </div>
      </div>
      <div className="row pictures">
        <div className="col-md-12 cold-sm-12">
          <img
            src={props.imageThree}
            className="picture img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

{
  /* <Carousel.Item>
<img
  className="d-block w-100"
  src={require(`../../assets/images/${props.img}.png`)}
  alt="First slide"
/> */
}
