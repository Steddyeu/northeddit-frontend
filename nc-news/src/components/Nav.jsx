import React, { Component } from "react";
import * as api from '../api/api-req';

class Nav extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    //console.log('this.state -->', this.state.topics)
    //console.log(topics)
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
 }
  render() {
    return (
      <nav>
       456789
      </nav>
    );
  }
}

export default Nav;
