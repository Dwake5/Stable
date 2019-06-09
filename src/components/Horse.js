import React from 'react'

import HorseDetails from './HorseDetails'

class Horse extends React.Component {
    
    state = {
        showDetails: false
    }

    showDetails = () => {
        this.setState({ showDetails: true})
    }

    hideDetails = () => {
        this.setState({ showDetails: false})
    }


    render() {
    const { horse } = this.props
    const { name} = this.props.horse

    const fileName = name.toLowerCase().replace(/ /g, '_')
    const imageSrc = require(`../horse-imgs/${fileName}.jpg`)

    return (
        <div className='ui card centered' >
            <h2>{name}</h2>
            <img src={imageSrc} alt='' width={290} />
            {this.state.showDetails 
            ? <HorseDetails horse={horse} hideDetails={this.hideDetails} />
            : <button onClick={this.showDetails}> ↓ </button> 
            }
        </div>
        )
    }
}

export default Horse
