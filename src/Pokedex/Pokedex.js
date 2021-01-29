import React, { Component, useState } from 'react'
import styles from './Pokedex.module.css'
import LeftCover from './Cover/LeftCover/LeftCover'
import RightCover from './Cover/RightCover/RightCover'
import RightPanel from './Panel/RightPanel/RightPanel'
import LeftPanel from './Panel/LeftPanel/LeftPanel'
const Dex = require("pokeapi-js-wrapper")


const MAX_POKEMON_NUMBER = 898
const MIN_POKEMON_NUMBER = 1

class Pokedex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemonNumber: 0,
            pokemon: null
        };
    }

    componentDidMount() {
        this.loadPokemon(1)
    }

    loadNextPokemon() {
        if (this.state.pokemonNumber < MAX_POKEMON_NUMBER)
            this.loadPokemon(this.state.pokemonNumber + 1)
    }

    loadPreviousPokemon() {
        if (this.state.pokemonNumber > MIN_POKEMON_NUMBER)
            this.loadPokemon(this.state.pokemonNumber - 1)
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loadPokemon(number) {
        this.setState({
            pokemonNumber: number,
            pokemon: null
        })

        //Just to see some animation while loading
        await this.sleep(3000)

        let pokemon = {}
        let pokedex = new Dex.Pokedex()
        this.currentRequest = pokedex.getPokemonByName(number)
            .then(poke => {
                pokemon.number = number
                pokemon.name = poke.name
                pokemon.image = poke.sprites.front_default
                pokemon.front = poke.sprites.front_default
                pokemon.back = poke.sprites.back_default
                pokemon.types = poke.types.map(t => t.name)
                pokemon.weight = poke.weight

                this.setState({
                    pokemonNumber: number,
                    pokemon: pokemon
                })
            })
    }

    render() {
        return (
            <div id={styles.pokedex}>
                <div id={styles.left}>
                    <div id={styles.leftCover}>
                        <LeftCover />
                    </div>
                    <div id={styles.leftPanel}>
                        <LeftPanel pokemon={this.state.pokemon}
                            onTopClick={() => this.loadNextPokemon()}
                            onBottomClick={() => this.loadPreviousPokemon()}
                            onLeftClick={() => this.loadPreviousPokemon()}
                            onRightClick={() => this.loadNextPokemon()} />
                    </div>
                </div>
                <div id={styles.right}>
                    <div id={styles.rightCover}>
                        <RightCover />
                    </div>
                    <div id={styles.rightPanel}>
                        <RightPanel pokemon={this.state.pokemon} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Pokedex