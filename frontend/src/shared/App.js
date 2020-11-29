import React, { Component } from 'react';
import './App.css'
import Header from '../components/Header';
import Board from '../components/Board';
import { Route } from 'react-router-dom';
import Article from '../components/Article';
import CreateArticle from '../components/CreateArticle';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Header/>
        <Route exact path="/board" component={Board}/>
        <Route path="/board/:id" component={Article}/>
        <Route path="/create" component={CreateArticle}/>
      </div>
    );
  }
}

export default App;