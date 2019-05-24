import React, { Component } from 'react'
import CreateItem from './CreateItem';

export default class IngredientList extends Component {
    render ()
    {
        let extraIngredient = []
        for ( let i = 0; i < this.props.counter; i++ ){
            extraIngredient.push(<CreateItem />)
        }
    return (
      <div>
        {extraIngredient}
      </div>
    )
  }
}
