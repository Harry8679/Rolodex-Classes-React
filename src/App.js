// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((respone) => respone.json()).then((users) => this.setState(() => {
      return { monsters: users }
    }, () => {
      console.log(this.state);
    }));
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input type="search" className='search-box' placeholder='Search Monsters' onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return { searchField };
          });
        }} />
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
