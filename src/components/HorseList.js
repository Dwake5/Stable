import React from 'react'

import Horse from './Horse'

const HorseList = props => <div>
        {
            props.horses.map(horse => <Horse key={horse.name} horse={horse} />)
        }     
</div>

export default HorseList