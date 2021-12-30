import { Component } from 'react'
import styles from './RoundOrangeLed.module.css'
import RoundLed from '../RoundLed'

class RoundOrangeLed extends Component {
    render() {
        return (
            <RoundLed
                on={this.props.on}
                onClass={styles.on}
                offClass={styles.off} />
        )
    }
}

export default RoundOrangeLed