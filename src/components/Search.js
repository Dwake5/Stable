import React from 'react'

const Search = props => <div>
    <div>
        <label>Sort by: </label>
        <select onChange={(e) => props.updateSortBy(e.target.value)}>
            <option value='none'>none</option>
            <option value='name'>name</option>
            <option value='speed'>speed</option>
        </select> 
    </div>
    <div> 
        <label> Show Rideable only: </label>
        <input onClick={props.toggleShowRideableOnly} type="checkbox" /> 
    </div>
</div>

export default Search