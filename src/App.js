import React, { Component } from "react";
import Deck from "./components/Deck";

// const App = () => 
// <Deck />;

class App extends Component {
	constructor(props) {
    	super(props);
    }
	render() {
		return (
			<Deck />
			);
	}

}

export default App;
