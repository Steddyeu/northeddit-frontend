import React, { Component } from "react";
import getTopics from '../api/api-req';
class Nav extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    console.log(this.state)
    getTopics().then(() => {
      this.setState({  });
    });
 }
  render() {
    return (
      <nav>
       
      </nav>
    );
  }
}

export default Nav;
