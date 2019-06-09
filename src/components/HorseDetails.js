import React from 'react'

const HorseDetails = ({hideDetails, horse}) => 
<div>
    <p>Fur Colour: {horse.furColour}</p>
    <p>Max Speed: {horse.MaxSpeed}</p>
    <p>{horse.Rideable ? 'Is rideable' : 'Is not rideable' }</p>
    <button onClick={hideDetails}> ↑ </button> 
</div>

export default HorseDetails