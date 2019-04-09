import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import ReactAudioPlayer from 'react-audio-player';

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, tags, distance, text, pics } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel>
              {pics.map((pic, index) => (
                <img src={pic} key={index} alt="profilePicture" />
              ))}
            </Carousel>
            <h2>{name}</h2>
            <h3>{tags}</h3>
            <ReactAudioPlayer
                    src={"https://firebasestorage.googleapis.com/v0/b/crescendo-music2.appspot.com/o/Noname%20-%20Forever%20(ft.%20Ravyn%20Lenae%20and%20Joseph%20Chilliams).mp3?alt=media&token=4ed372fc-cf99-4c6b-a379-bb63ba273f5a"}
                    controls
                  />
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
