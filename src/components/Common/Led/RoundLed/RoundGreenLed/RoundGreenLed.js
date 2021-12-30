import { Component } from 'react'
import styles from './RoundGreenLed.module.css'
import RoundLed from '../RoundLed'

class RoundGreenLed extends Component {
    render() {
        return (
            <RoundLed
                on={this.props.on}
                onClass={styles.on}
                offClass={styles.off} />
        )
    }
}

export default RoundGreenLed