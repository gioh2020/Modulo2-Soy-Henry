import React from 'react'

export default function Species (props) {
  return (
    <div>
      <h2>Species</h2>
        {
          props.species.map((especie)=>{
            return (<button key={especie} onClick={props.handleSpecies} value={especie}>{especie} </button>)
          })
        }
        <button onClick={props.handleAllSpecies}>All Animals</button>

      
      
    </div>
  )
}
