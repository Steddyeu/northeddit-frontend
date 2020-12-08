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

    return (
      <div>
        <h1>All Articles</h1>
        {articles.map((article) => (
          <div className="articles-card" key={article.article_id}>
            {console.log(article)}
            <p>title: {article.title}</p>
            <p>topic: {article.topic}</p>
            <p>votes: {article.votes}</p>
            <p>author: {article.author}</p>
            <p>comment count: {article.comment_count}</p>
            <p>created at: {article.created_at}</p>
          </div>
        ))}
      </div>
    );
  }
}
