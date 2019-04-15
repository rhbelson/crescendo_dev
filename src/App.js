import React, { Component } from "react";
import PropTypes from "prop-types";
import Deck from "./components/Deck";
import {Container, Navbar, NavbarBrand, Button, Col} from "reactstrap";
import { FaCog} from 'react-icons/fa';
import {IoIosStats} from "react-icons/io";
import { Modal, ModalHeader, ModalBody, ModalFooter,CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Settings from "./Settings";
import "./App.css";

class App extends Component {
	constructor(props) {
    	super(props);
      this.state = {
      smodal: false,
      backdrop: true,
      rapChecked: false,
      hipChecked: false,
      jazzChecked: false,
      classicalChecked: false,
      edmChecked: false,
      rockChecked: false,
      popChecked: false,
      countryChecked: false,
    };
    this.toggle_settings = this.toggle_settings.bind(this);
  }

  toggle_settings() {
    console.log("Settings toggled");
    this.setState(prevState => ({
      smodal: !prevState.smodal
    }));
  }

  setRapChecked = (value) => {
    this.setState({
      rapChecked: value
    })
  }

  setHipChecked = (value) => {
    this.setState({
      hipChecked: value
    })
  }

  setJazzChecked = (value) => {
    this.setState({
      jazzChecked: value
    })
  }

  setClassicalChecked = (value) => {
    this.setState({
      classicalChecked: value
    })
  }

  setEDMChecked = (value) => {
    this.setState({
      edmChecked: value
    })
  }

  setRockChecked = (value) => {
    this.setState({
      rockChecked: value
    })
  }

  setPopChecked = (value) => {
    this.setState({
      popChecked: value
    })
  }

  setCountryChecked = (value) => {
    this.setState({
      countryChecked: value
    })
  }

	render() {
    const { loggedIn, toggledSettings, toggledStats, modal, username, artists, artistProfile, value, rapChecked, hipChecked, jazzChecked, classicalChecked, edmChecked, rockChecked, popChecked, countryChecked} = this.state;
		return(
      [
          <Navbar style={{backgroundColor:"salmon",position:"absolute",top:"0px",zIndex:"1",width:"100%"}}>
            <Col xs="5">
              <Button onClick={this.toggle_settings} style={{backgroundColor:"#577399"}}><FaCog/></Button>
            </Col>
            <Col xs="7">
              <div style={{fontWeight:"bold",color:"#ffffff"}}>Crescendo</div>
            </Col>
            <Modal isOpen={this.state.smodal} toggle={this.toggle_settings} className={this.props.className}>
            <ModalHeader style={{backgroundColor:"#FE3C72",color:"#fffff"}} toggle={this.toggle_settings}>Settings</ModalHeader>
              <ModalBody>
                  <CardBody>
                     <CardTitle style={{textAlign:"left",fontWeight:"bold",fontSize:"20px"}}>Select Your Music Preference</CardTitle>
                    <CardText>
                      <Settings 
            rapChecked={rapChecked} setRapChecked={this.setRapChecked.bind(this)} 
            hipChecked={hipChecked}  setHipChecked={this.setHipChecked.bind(this)} 
            jazzChecked={jazzChecked} setJazzChecked={this.setHipChecked.bind(this)} 
            classicalChecked={classicalChecked} setClassicalChecked={this.setClassicalChecked.bind(this)} 
            edmChecked={edmChecked} setEDMChecked={this.setEDMChecked.bind(this)}
            rockChecked={rockChecked} setRockChecked={this.setRockChecked.bind(this)}
            popChecked={popChecked} setPopChecked={this.setPopChecked.bind(this)}
            countryChecked={countryChecked} setCountryChecked={this.setCountryChecked.bind(this)}/>
                    </CardText>
                  </CardBody>
              </ModalBody>
            </Modal>
          </Navbar>, 
	        <Deck/> 
      ]
         );

	}

}

export default App;
