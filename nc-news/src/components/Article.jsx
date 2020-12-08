import React, { Component } from 'react'
import * as api from "../api/api-req";


export default class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
   console.log(this.props.article_id)
    api.getArticleByArticleId(this.props.article_id).then((article) => {
      console.log('----->', article)
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    console.log('article-->', this.state)
    return(
     <div>
    <p></p>
    </div>
    )
  }
}
