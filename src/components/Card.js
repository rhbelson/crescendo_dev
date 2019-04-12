import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import ReactAudioPlayer from 'react-audio-player';
import { SocialIcon } from 'react-social-icons';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { IoIosMusicalNote } from "react-icons/io";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, tags, distance, text, pics, contact, bio } = data[i];

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
          <div className="card" onClick={this.toggle}>
            <Carousel>
              {pics.map((pic, index) => (
                <img src={pic} key={index} alt="profilePicture" />
              ))}
            </Carousel>
            <h2 style={{marginLeft:"10%"}}>{name}</h2>
            <h5 style={{marginLeft:"10%"}}>{tags}</h5>
            <ReactAudioPlayer
            style={{width:"100%"}}
                    src={"https://firebasestorage.googleapis.com/v0/b/crescendo-music2.appspot.com/o/Noname%20-%20Forever%20(ft.%20Ravyn%20Lenae%20and%20Joseph%20Chilliams).mp3?alt=media&token=4ed372fc-cf99-4c6b-a379-bb63ba273f5a"}
                    controls
                  />
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalBody>
              <CardImg top style={{width:"70%",marginLeft:"15%"}} src={pics[0]}  />
              <CardBody>
                 <CardTitle style={{textAlign:"left",fontWeight:"bold",fontSize:"20px"}}>{name}</CardTitle>
                 <CardSubtitle style={{fontSize:"20px"}}><IoIosMusicalNote/>Artist</CardSubtitle>
                <CardText>
                  <p style={{marginTop:"5%"}}>{bio}</p>
                  <a style={{fontWeight:"bold"}}>Next Show Near You: </a>
                  <a>TBD </a><br/>
                  <SocialIcon url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
                </CardText>
                <Button href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + 'contact' + '&su=Crescendo+User+Inquiry&body=Thank+you+for+choosing+Crescendo!'} style={{width:"100%"}}>Contact {name}</Button>
              </CardBody>
          </ModalBody>
        </Modal>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
