import { useEffect } from "react"
import { getPokemons } from "./store/slices/pokemon"
import { useDispatch, useSelector } from "react-redux"

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {isLoading, pokemons = [], page} = useSelector(state => state.pokemons);

  useEffect(() => {

    dispatch(getPokemons());

  }, []);



  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <ul>
        {
          pokemons.map( ({name}) => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>

        <button
          disabled= {isLoading}
          onClick={ () => dispatch(getPokemons(page) )}
        >Next</button>

    </>
  )
}
