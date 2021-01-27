import { Component } from 'react'
import styles from './RoundLed.module.css'
import Led from '../Led'

class RoundLed extends Component {
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

export default RoundLed