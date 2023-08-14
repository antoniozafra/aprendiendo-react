import React from 'react'
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);


  const { searchText, onInputChange } = useForm({
    searchText: q
  });



  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase()}`);

  }

  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row  animate__animated animate__fadeIn">


        <div className="col-5">
          <h4>Búsqueda</h4>

          <form onSubmit={onSearchSubmit}>
            <input value={searchText} onChange={onInputChange} type="text" placeholder='Introduzca superheroe' name='searchText' autoComplete='off' className='form-control' />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div className='alert alert-primary' style={{display:showSearch ? '' : 'none'}}>Search a hero</div>

          <div className='alert alert-danger' style={{display: showError ? '' : 'none'}}>Sin resultados with <strong>{q}</strong></div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/> 
            ))
          }


        </div>
      </div>
    </>
  )
}

