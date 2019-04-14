import React, { Component } from "react";
import Deck from "./components/Deck";
import {Container, Navbar, NavbarBrand, Button, Col} from "reactstrap";
import { FaCog} from 'react-icons/fa';
import {IoIosStats} from "react-icons/io";
// const App = () =>
// <Deck />;

class App extends Component {
	constructor(props) {
    	super(props);
    }
   //  renderNav(){
   //  	return (
   //  			<Navbar color="light" light expand="md">
   //        			<NavbarBrand>Crescendo</NavbarBrand>
   //        			</Navbar>
   //  		);
   //  }

   //  renderDeck() {
   //  	return (
			// <Deck />
			// );
   //  }

	render() {
		return(
			// <Navbar style={{backgroundColor:"salmon"}}>
	  //         <Col xs="4">
	  //           <Button onClick={this.props.toggleSettings} style={{left:"0",backgroundColor:"#577399"}}><FaCog/></Button>
	  //         </Col>
	  //         <Col xs="8">
	  //           <div style={{fontWeight:"bold",color:"#ffffff"}}>Crescendo</div>
	  //         </Col>
	  //       </Navbar> 
	  		<Deck/>
	        
         );

	}

}

export default App;
