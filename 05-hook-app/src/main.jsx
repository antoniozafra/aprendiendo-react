import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {CounterWithCustomHook} from './01-useState/CounterWithCustomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import Memorize from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHooks } from './06-memos/CallbackHooks'
// import './08-useReducer/intro-reducer';
import {TodoApp} from './08-useReducer/TodoApp'






// import HooksApp from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'



ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
