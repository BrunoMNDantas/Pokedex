import React, { Component } from 'react'
import styles from './DotRedLed.module.css'
import DotLed from '../DotLed'

class DotRedLed extends Component {
    render() {
        return (
            <DotLed
                on={this.props.on}
                onClass={styles.on}
                offClass={styles.off} />
        )
    }
}

export default DotRedLed