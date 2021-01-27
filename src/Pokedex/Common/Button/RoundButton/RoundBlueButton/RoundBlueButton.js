import React, { Component } from 'react'
import styles from './RoundBlueButton.module.css'
import RoundButton from '../RoundButton'

class RoundBlueButton extends Component {
    render() {
        return (
            <RoundButton onClick={this.props.onClick} className={styles.button} />
        )
    }
}

export default RoundBlueButton