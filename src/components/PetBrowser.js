import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(petData => {
      return (
        <Pet
          pet={petData}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(petData.id)}
        />
      )
    })

    return (
      <div className="ui cards">
        {petCards}
      </div>
    );
  }
}

export default PetBrowser;
