import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import {  ListGroupItem } from'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor() {
    
    super()
  
    this.state = {
      searchTerm: '',
      jokes: [],
      isFetchingJoke: false
    }
  }

  

  searchJoke = (limit = 20) => {
    this.setState({isFetchingJoke: true})
    fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      const jokes = json.results;
      
      this.setState({
        jokes: jokes,
        isFetchingJoke: false
      })
    })
  }
  
  componentDidMount(){
    this.searchJoke(3);
  }

  onSearchChange = (value) => {
    this.setState({ searchTerm: value})
  }

  renderJokes = () => {
    return (
     <div> {this.state.jokes.map(jokes => <ListGroupItem key={jokes.id }>{jokes.joke}</ListGroupItem>) }</div>
    )
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center">LOL</h2>
        <SearchForm 
        onFormSubmit={this.searchJoke}
        onSearchValueChange={this.onSearchChange} 
        isSearching={this.state.isFetchingJokes}
        onSingleSearchClick={() => this.searchJoke(1)}
        />

        {this.state.isFetchingJoke ? ('seacrching joke....') : this.renderJokes() }
      </div>
    )
  }
}


export default App;
