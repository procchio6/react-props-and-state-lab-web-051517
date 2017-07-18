import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  filterPets = (type) => {
    this.setState({
      filters: {
        type
      }
    })
  }

  onAdoptPet = petId => {
    this.setState({
      adoptedPets:[
        ...this.state.adoptedPets,
        petId
      ]
    })
  }

  onFindPetsClick = () => {
    const {type} = this.state.filters
    let url = '/api/pets'

    if (type !== 'all') {
      url += `?type=${type}`
    }

    fetch(url).then( pets => {
      this.setState({pets})
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                filters={this.state.filters}
                onChangeType={this.filterPets}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
