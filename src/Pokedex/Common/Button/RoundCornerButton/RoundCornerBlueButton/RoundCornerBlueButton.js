import React, { Component } from 'react'
import styles from './RoundCornerBlueButton.module.css'
import RoundCornerButton from '../RoundCornerButton'

class RoundCornerBlueButton extends Component {
    render() {
        return (
            <RoundCornerButton onClick={this.props.onClick} className={styles.button} />
        )
    }
}

export default RoundCornerBlueButton