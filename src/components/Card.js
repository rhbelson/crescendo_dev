import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';
import { SocialIcon } from 'react-social-icons';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { IoIosMusicalNote } from "react-icons/io";
import { FaCog} from 'react-icons/fa';

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
    const { name, tags, distance, text, pics, contact, bio,music, spotify, instagram, soundcloud, facebook,twitter } = data[i];

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
                <img src={pic} key={index} alt="profilePicture" onClick={this.toggle} />
              ))}
            </Carousel>
            <h2 style={{textAlign:"center",marginTop:"4%"}}>{name}</h2>
            <ReactAudioPlayer
            style={{width:"90%",marginLeft:"3%"}}
                    src={music}
                    controls
                  />
            
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalBody onClick={this.toggle}>
              <CardImg top style={{width:"70%",height:"40%",marginLeft:"15%"}} src={pics[0]}  />
              <CardBody>
                 <CardTitle style={{textAlign:"left",fontWeight:"bold",fontSize:"20px"}}>{name}</CardTitle>
                 <CardSubtitle style={{fontSize:"20px",marginBottom:"2%"}}><IoIosMusicalNote/>{tags}</CardSubtitle>
                <CardText>
                  <a style={{marginTop:"5%"}}>{bio}</a><br/>
                  <a style={{fontWeight:"bold"}}>Next Show Near You: </a>
                  <a>TBD </a><br/>
                  <SocialIcon url={twitter}/>
                  <SocialIcon style={{marginLeft:"2%"}} url={facebook}/>
                  <SocialIcon style={{marginLeft:"2%"}} url={instagram}/>
                  <SocialIcon style={{marginLeft:"2%"}} url={soundcloud}/>
                  <SocialIcon style={{marginLeft:"2%"}} url={spotify}/>
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
