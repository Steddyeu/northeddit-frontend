import React, { Component } from "react";
import * as api from '../api/api-req';

class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
   // console.log('this.state -->', this.state)
    //console.log(topics)
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false, });
    });
 }

 
  render() {
    if(this.state.isLoading) {
      return <p>Loading...</p>
    }
      <h5>Topics</h5>;
    //console.log(this.state)
    const {topics} = this.state;
   //console.log('topics', topics)
    //return (<nav></nav>)
    return (
      <nav>
        <h5>Topics</h5>
        {topics.map((topic) => (
            <button>{topic.slug}</button>
          
        ))}
      </nav>
    );
  }
}

export default Nav;
