import React, { Component } from 'react'
import styles from './Screen.module.css'

class Screen extends Component {
    render() {
        return this.props.pokemon ? (
            <div id={styles.screen}>
                <strong>Number:</strong> {this.props.pokemon.number}<br />
                <strong>Name:</strong> {this.props.pokemon.name}<br />
                <strong>Type:</strong> {this.props.pokemon.types.reduce((a,b) => a + " | " + b)}<br />
                <strong>Weight:</strong> {this.props.pokemon.weight}<br /><br />
            </div>
        ) : (
                <div id={styles.screen}>
                </div>
            )
    }
}

export default Screen