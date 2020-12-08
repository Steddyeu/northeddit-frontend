import React, { Component } from 'react'
import * as api from "../api/api-req";
export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    
    api.getAllArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    const { articles } = this.state;

    console.log('comp stte -->', this.state);

    return (
      <div>
        <p>Hello from Articles</p>
        {articles.map((article) => (
          <div className="articles-card">
            <p>{article.title}</p>
            <p>{article.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
