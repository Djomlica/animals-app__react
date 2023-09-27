import { useState } from "react";

import "./assets/AnimalShow.css";

import bird from "./assets/images/bird.svg";
import cat from "./assets/images/cat.svg";
import cow from "./assets/images/cow.svg";
import gator from "./assets/images/gator.svg";
import heart from "./assets/images/heart.svg";
import horse from "./assets/images/horse.svg";
import dog from "./assets/images/dog.svg";

const svgMap = {
  bird,
  cat,
  cow,
  gator,
  heart,
  horse,
  dog,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show">
      <img
        className="animal"
        onClick={handleClick}
        alt="animal"
        src={svgMap[type]}
      />
      <img
        className="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
        alt="heart"
        src={heart}
      />
    </div>
  );
}

export default AnimalShow;
