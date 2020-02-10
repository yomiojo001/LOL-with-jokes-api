import React, { Component } from 'react';
import SearchForm from './components/SearchForm';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor(props) {
    
    super(props)
  
    this.state = {
      searchTerm: '',
      jokes: [],
      isFetchingJoke: false
    }
  }

  

  searchJoke(limit = 20){
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
      console.log('jokes', jokes);
      
      this.setState({
        jokes: jokes,
        isFetchingJoke: false
      })
    })
  }
  
  

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value})
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.searchJoke();
  }

  renderJokes = () => {
    return (
      <ul>{this.state.jokes.map(jokes => <li key={jokes.id }>{jokes.joke}</li>) }</ul>
    )
  }

  render() {
    return (
      <div>
        <SearchForm 
        onFormSubmit={this.onSearchSubmit}
        onSearchValueChange={this.onSearchChange} 
        isSearching={this.state.isFetchingJokes}
        onSingleSearchClick={() => this.searchJoke(1)}
        />

        {this.state.isFetchingJoke ? ('seacrching joke....') : this.renderJokes() }
        <p>search term: {this.state.searchTerm}</p>
      </div>
    )
  }
}


export default App;
