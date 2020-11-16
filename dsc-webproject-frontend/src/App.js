import React, { Component } from 'react';
import './App.css'
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import customAxios from './customAxios';

class App extends Component {
  state = {
    information: [{
      id: "1",
      title: "hi! this is test",
      author: "soo",
      date: "2020-11-14",
      hits: 0
    },
    {
      id: "2",
      title: "엥 이게 되네 읭 엥",
      author: "soo",
      date: "2020-11-15",
      hits: 0
    }
  ],
  }
  // handleCreate?

  render() {
    const { information } = this.state;
    return (
      <div className="App">
        <Header/>
        <ArticleList data={information}/>
        <ArticleForm/>
      </div>
    );
  }
}

export default App;