import { Component } from 'react'
import styles from './RoundRedLed.module.css'
import RoundLed from '../RoundLed'

class RoundRedLed extends Component {
    render() {
        return (
            <RoundLed
                on={this.props.on}
                onClass={styles.on}
                offClass={styles.off} />
        )
    }
}

export default RoundRedLed