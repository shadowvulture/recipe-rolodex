import React, { Component } from 'react';


class Recipe extends Component {
    constructor (props) {
        super(props)
        console.log(this.props)
        this.props.refreshData()
        
    }
    // componentDidMount () {
    //     this.refreshData()
    //       // console.log('before', this.state)
    //   }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Testing</h1>
                <br />
                <h1>More testing</h1>
            </div>
        );
    }
}

export default Recipe;