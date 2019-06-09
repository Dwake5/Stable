import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import horses from '../horses_data'
import Search from './Search'
import HorseList from './HorseList'


class App extends Component {

  state = {
    horses: horses,
    showRideableOnly: false,
    sortBy : 'none'
  }

  updateSortBy = (sortType) => {
    this.setState({ sortBy: sortType})
  }

  toggleShowRideableOnly = () => {
    this.setState({ showRideableOnly: !this.state.showRideableOnly})
  }

  sortHorses = (horses) => {
    console.log(horses)
    const { sortBy } = this.state
    const horsesCopy = [...horses]

    if (sortBy === 'name') {
      horsesCopy.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
    }

    if (sortBy === 'speed') {
      horsesCopy.sort((a, b) => b.MaxSpeed - a.MaxSpeed)
    }

    return horsesCopy
  }

  getFilteredHorses = () => {
    const { horses, showRideableOnly } = this.state
    return showRideableOnly
    ? horses.filter(horse => horse.Rideable)
    : horses
  }

  render() {
    const filteredAndSortedHorses = this.sortHorses(this.getFilteredHorses())
    const {updateSortBy, toggleShowRideableOnly} = this
    return (
      <div className="App">
        <Nav />
        <Search updateSortBy={updateSortBy} toggleShowRideableOnly={toggleShowRideableOnly}/>
        <br />
        <HorseList horses={filteredAndSortedHorses}/>
      </div>
    )
  }
}

export default App;
