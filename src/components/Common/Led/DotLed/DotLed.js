import React, { Component } from 'react'
import styles from './DotLed.module.css'
import Led from '../Led'

class DotLed extends Component {
    render() {
        return (
            <div id={styles.led}>
                <Led                    
                    on={this.props.on}
                    onClass={this.props.onClass}
                    offClass={this.props.offClass} />
            </div>
        )
    }
}

export default DotLed