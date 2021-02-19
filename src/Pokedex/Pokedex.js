import React, { Component } from 'react'
import styles from './Pokedex.module.css'
import LeftCover from './Cover/LeftCover/LeftCover'
import RightCover from './Cover/RightCover/RightCover'
import RightPanel from './Panel/RightPanel/RightPanel'
import LeftPanel from './Panel/LeftPanel/LeftPanel'
import PokemonService from '../Services/PokemonService'



const MAX_POKEMON_NUMBER = 898
const MIN_POKEMON_NUMBER = 1
const INITIAL_POKEMON_NUMBER = 1



class Pokedex extends Component {

    pokemonService = new PokemonService()

    constructor(props) {
        super(props)
        this.state = {
            pokemonNumber: 0,
            pokemon: null
        };
    }

    componentDidMount() {
        this.loadPokemon(INITIAL_POKEMON_NUMBER)
    }

    loadNextPokemon() {
        this.loadPokemon(this.state.pokemonNumber + 1)
    }

    loadPreviousPokemon() {
        this.loadPokemon(this.state.pokemonNumber - 1)
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loadPokemon(number) {
        if (number > MAX_POKEMON_NUMBER || number < MIN_POKEMON_NUMBER) {
            window.alert("#" + number + " doesn't exist")
            return
        }

        this.setState({
            pokemonNumber: number,
            pokemon: null
        })

        //Just to see some animation while loading
        await this.sleep(1000)

        this.pokemonService.getPokemon(number)
            .then(pokemon => {
                if (this.state.pokemonNumber === number)
                    this.setState({
                        pokemonNumber: number,
                        pokemon: pokemon
                    })
            })
            .catch(ex => {
                window.alert("Something wnet wrong!")
                console.error(ex)
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
                            loadPokemon={number => this.loadPokemon(number)}
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