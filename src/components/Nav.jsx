import React, { Component } from "react";
import * as api from "../api/api-req";
import { Link } from "@reach/router";

class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    // console.log('this.state -->', this.state)
    //console.log(topics)
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    //console.log(this.state)
    const { topics } = this.state;
    const {loggedInUser} = this.props
    //console.log('topics', topics)
    //return (<nav></nav>)
    return (
      <nav className="nav-bar-container">
        <div className='user-welcome'>
          <p>You are logged in as:</p>
          <p> {loggedInUser}!</p>
      </div>
        <h4 className="topics-header">Topics</h4>
        {topics.map((topic) => (
          <Link className="topic-links" key={topic.slug} to={`/${topic.slug}`}>
            {topic.slug}
          </Link>
        ))}
      </nav>
    );
  }
}

export default Nav;
