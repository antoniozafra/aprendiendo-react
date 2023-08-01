
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);


  const handdleAdd = (value) => {
    // setCounter((c) => c + 1);
    setCounter(counter + 1);

  }

  const handdleSubstract = () => {
    if (counter == value) {
      return
    }

    setCounter(counter - 1);
  }
  const handdleReset = () => {
    setCounter(value);
  }


  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={handdleAdd}>+1</button>
      <button onClick={handdleSubstract}>-1</button>
      <button onClick={handdleReset}>Reset</button>
    </>
  );
}

//Properties
CounterApp.propTypes = {
  value: PropTypes.number.isRequired

}