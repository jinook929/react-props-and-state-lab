import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    this.setState({filters: {type: type}})
  }

  onFindPetsClick = (e) => {
    const url = this.state.filters.type === "all" ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url).then(res => res.json())
    .then(pets => {
      this.setState({pets: pets})
    })
    .catch(err => console.log(err))
  }

  onAdoptPet = (id) => {
    // const unchangedPets = this.state.pets.filter(pet => pet.id !== id)
    // const adoptedPet = {...this.state.pets.find(pet => pet.id === id), isAdopted: true}
    // this.setState({
    //   pets: [...unchangedPets, adoptedPet]
    // })
    const pets = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
    this.setState({pets: pets})
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
                type={this.state.filters.type} 
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.onAdoptPet}
                pets={this.state.pets} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
