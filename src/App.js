import React, { Component } from 'react'
import Pokedex from './Pokedex/Pokedex'
import styles from './App.module.css'

class App extends Component {
    render() {
        return (
            <div id={styles.container}>
                <img id={styles.background} src={process.env.PUBLIC_URL + "/images/background.png"}></img>
                <img id={styles.title} src={process.env.PUBLIC_URL + "/images/pokemonLogo.png"}></img>
                <div id={styles.wrapper}>
                    <Pokedex />
                </div>
            </div>
        )
    }
}

export default App