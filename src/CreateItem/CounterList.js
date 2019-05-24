import React, { Component } from 'react'
import CreateItem from './CreateItem'

export default class CounterList extends Component {
    render ()
    {
        let counters = []
        for (let i = 0; i < this.props.counter; i++){
        counters.push(<CreateItem />)
        }
    return  <div className="Counter-row">{counters} </div>

  }
}
