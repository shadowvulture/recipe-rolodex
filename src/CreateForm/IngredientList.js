import React, { Component } from 'react';
import CreateItem from '../CreateItem/CreateItem';

class IngredientList extends Component {
    render() {
                let counters = []
                for (let i =0; i < this.props.counter; i++){
                    counters.push(<CreateItem key={i}/>)
                }
        return (
            <div>
                {counters}
            </div>
        );
    }
}

export default IngredientList;