// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
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
    return (
      <div className="App">
        <input type="search" className='search-box' placeholder='Search Monsters' onChange={(event) => {
          console.log({ startingArray: this.state.monsters });
          const searchString = event.target.value.toLocaleLowerCase();
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          });
          this.setState(() => {
            return { monsters: filteredMonsters }
          }, () => {
            console.log({ endingArray: this.state.monsters })
          })
        }} />
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
