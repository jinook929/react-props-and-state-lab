import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {  
  // fetchResults = () => {
  //   return this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />)
  // }

  render() {
    return (
      <div className="ui cards">
        {/* PET COMPONENT SHOULD GO HERE */}
        {/* {this.fetchResults()} */}
        {this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />)}
      </div>
    )
  }
}

export default PetBrowser
