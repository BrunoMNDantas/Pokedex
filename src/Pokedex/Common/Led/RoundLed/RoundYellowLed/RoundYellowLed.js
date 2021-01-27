import { Component } from 'react'
import styles from './RoundYellowLed.module.css'
import RoundLed from '../RoundLed'

class RoundYellowLed extends Component {
    render() {
        return (
            <RoundLed
                on={this.props.on}
                onClass={styles.on}
                offClass={styles.off} />
        )
    }
}

export default RoundYellowLed