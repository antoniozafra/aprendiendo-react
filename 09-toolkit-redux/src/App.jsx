import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter';
function App() {
  const {counter} = useSelector( state => state.counter);

  const dispatch = useDispatch();


  return (
    <>
      <div>
      </div>
      <h1>Counter is {counter}</h1>
      <div >
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <button onClick={() => dispatch(incrementBy({increment: 2}))}>
          Increment by X
        </button>
        
      </div>
    </>
  )
}

export default App
