import React, { Component } from 'react'
import styles from './Screen.module.css'

class Screen extends Component {
    render() {
        return (
            <div id={styles.screen}>
                <img className={this.props.pokemonImage ?  styles.show : ""} src={this.props.pokemonImage}/>
            </div>
        )
    }
}

export default Screen