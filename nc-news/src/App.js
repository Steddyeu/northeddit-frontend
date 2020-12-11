import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles'
import Article from './components/Article';
import Comments from './components/Comments';
import React, { Component } from 'react'

export default class App extends Component {
  state ={ 
    user: 'jessjelly',
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Router>
          <Articles path='/' />
          <Articles path='/:topic' />
          <Article path='/articles/:article_id' />
          <Comments path='/articles/:article_id/comments' />
        </Router>
      </div>
    )
  }
}
