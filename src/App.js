import React, { Component } from 'react'
import Pokedex from './components/Pokedex/Pokedex'
import styles from './App.module.css'

class App extends Component {
    render() {
        return (
            <div id={styles.container}>
                
                <img id={styles.title} src={process.env.PUBLIC_URL + "/images/pokemonLogo.png"} alt=""></img>
                <div id={styles.wrapper}>
                    <Pokedex />
                </div>
            </div>
        )
    }
}

export default App