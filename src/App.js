import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user =>
        this.setState(
          () => {
          return {monsters: user}
          }) 
        )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Monster' 
          onChange={ onSearchChange } 
      />
      {/* {filteredMonsters.map((monster) => {
        return (
          <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
        );
      })} */}

      <CardList monster={'I am a monster'}/>
    </div>
    );
  }
}

export default App;
