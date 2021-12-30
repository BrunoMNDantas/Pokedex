import { configureStore } from '@reduxjs/toolkit'
import PokemonReducer from '../slices/pokemonSlice'

export default configureStore({
  reducer: {
    pokemon: PokemonReducer
  },
})