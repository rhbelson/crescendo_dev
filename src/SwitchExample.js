import React, { Component } from "react";
import Switch from "react-switch";
import {Container,Col,Row} from "reactstrap";
import {GiMicrophone,GiHeadphones,GiMusicalKeyboard} from "react-icons/gi";
import {FaMusic} from "react-icons/fa";
 
class SwitchExample extends Component {
  constructor(props) {
    super();
    this.state = { checked: props.settingChecked, name: props.name };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.props.checked(checked, this.state.name);
    this.setState({ checked });
  }
  renderIcon() {
    if (this.state.name=="Pop") {
      return (<GiMicrophone style={{backgroundColor:"#424242",fontSize:"200%",borderRadius:"40px",color:"white",padding:"5px"}}/>);
    }
    if (this.state.name=="Hip Hop/R&B") {
      return (<GiHeadphones style={{backgroundColor:"#424242",fontSize:"200%",borderRadius:"40px",color:"white",padding:"5px"}}/>);
    }
    if (this.state.name=="Classical") {
      return (<GiMusicalKeyboard style={{backgroundColor:"#424242",fontSize:"200%",borderRadius:"40px",color:"white",padding:"5px"}}/>);
    }
    if (this.state.name=="Jazz") {
      return (<GiHeadphones style={{backgroundColor:"#424242",fontSize:"200%",borderRadius:"40px",color:"white",padding:"5px"}}/>);
    }
    else {
      return (<FaMusic style={{backgroundColor:"#424242",fontSize:"200%",borderRadius:"40px",color:"white",padding:"5px"}}/>);
    }
  }

  render() {
    return (
      <Container style={{backgroundColor:"#e8e8e8",borderRadius:"10px",marginTop:"2%",padding:"3px",width:"100%",display:"block",fontFamily:"Roboto"}}>
        <Row>
        <Col xs="8">
        <label htmlFor="normal-switch" style={{marginLeft:"20px"}}>
          {this.renderIcon()}
          <span style={{marginLeft:"10px"}}>{this.state.name}</span>
        </label>
        </Col>
        <Col xs="4" style={{verticalAlign:"top"}}>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            id="normal-switch"
          />
        </Col>
        </Row>
      </Container>
    );
  }
}

export default SwitchExample;