import React, { Component } from 'react'
import styles from './Screen.module.css'

class Screen extends Component {
    render() {
        return this.props.pokemon ? (
            <div id={styles.screen}>
                <strong>Name:</strong> {this.props.pokemon.name}<br />
                <strong>Type:</strong> {this.props.pokemon.type}<br />
                <strong>Height:</strong> {this.props.pokemon.height}<br />
                <strong>Weight:</strong> {this.props.pokemon.weight}<br /><br />
                <strong>{this.props.pokemon.nickname}</strong><br />
                {this.props.pokemon.description}
            </div>
        ) : (
                <div id={styles.screen}>
                </div>
            )
    }
}

export default Screen