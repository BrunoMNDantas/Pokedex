import React, { Component } from 'react'
import styles from './RoundRedButton.module.css'
import RoundButton from '../RoundButton'

class RoundRedButton extends Component {
    render() {
        return (
            <RoundButton onClick={this.props.onClick} className={styles.button} />
        )
    }
}

export default RoundRedButton