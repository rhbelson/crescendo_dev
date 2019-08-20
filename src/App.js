import React, { Component } from "react";
import PropTypes from "prop-types";
import Deck from "./components/Deck";
import {Container, Navbar, NavbarBrand, Button, Col} from "reactstrap";
import { FaCog} from 'react-icons/fa';
import {IoIosStats} from "react-icons/io";
import { Modal, ModalHeader, ModalBody, ModalFooter,CardImg, CardText, CardBody, CardTitle, CardSubtitle, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import Settings from "./Settings";
import "./App.scss";
import {FaLocationArrow} from "react-icons/fa";
import Select from 'react-select';

const options = [
  { value: 'chicago', label: 'Chicago' },
  { value: 'losangeles', label: 'Los Angeles' },
  { value: 'nyc', label: 'NYC' }
];

class App extends Component {
	constructor(props) {
    	super(props);
      this.state = {
      selectedOption: null,
      dropdownOpen: false,
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
    this.toggle_dropdown = this.toggle_dropdown.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(option) {
    this.setState({ selectedOption: option });
    console.log(`Option selected:`, option);
  }

  toggle_dropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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
    const { selectedOption, loggedIn, toggledSettings, toggledStats, modal, username, artists, artistProfile, value, rapChecked, hipChecked, jazzChecked, classicalChecked, edmChecked, rockChecked, popChecked, countryChecked} = this.state;
		return(
      [
          <Navbar className='nav'>
              <Button className='settings' onClick={this.toggle_settings} style={{backgroundColor:"#577399"}}><FaCog/></Button>
              <h4 className='headerTitle'> Crescendo </h4>
              <Modal isOpen={this.state.smodal} toggle={this.toggle_settings} className={this.props.className}>
              <ModalHeader style={{backgroundColor:"salmon",color:"#fffff"}} toggle={this.toggle_settings}><a style={{position:"relative",top:"3.5px"}}>Settings</a></ModalHeader>
                <ModalBody>
                    <CardBody>
                       <CardTitle style={{textAlign:"left",fontWeight:"bold",fontSize:"19px"}}>Select Your Music Preferences</CardTitle>
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
                      <CardSubtitle style={{fontWeight:"bold",fontSize:"120%"}}>
                      <FaLocationArrow style={{marginLeft:"10%",marginRight:"2%",backgroundColor:"#424242",fontSize:"200%",borderRadius:"40px",color:"white",padding:"10px"}}/>Choose Region
                      </CardSubtitle>
                      <Container style={{backgroundColor:"#e8e8e8",borderRadius:"10px",marginTop:"2%",padding:"3px",width:"100%",display:"block",fontFamily:"Roboto"}}>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                      />
                      </Container>
                      <Button onClick={this.toggle_settings} style={{marginLeft:"20%",marginTop:"2%",backgroundColor:"salmon",color:"#fffff"}}>Save Changes</Button>
                    </CardBody>
                </ModalBody>
              </Modal>
          </Navbar>,

          // <div className="content">
            <React.Suspense fallback={
              <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
              </div>
            }>
	        <Deck/>
          </React.Suspense>
          // </div>
      ]
         );

	}

}

export default App;
