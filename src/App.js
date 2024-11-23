import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input type="search" className='search-box' placeholder='Search Monsters' onChange={onSearchChange} />
        {/* {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
