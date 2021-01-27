import { Component } from 'react'

class Led extends Component {
    
    render() {
        return (
            <div className={this.props.on ? this.props.onClass : this.props.offClass}/>
        )
    }
}

export default Led