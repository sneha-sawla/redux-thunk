import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import todoReducer  from '../feature/todoSlice'
import { applyMiddleware } from 'redux'

const store = configureStore({reducer: todoReducer,
},applyMiddleware(thunk))


// export const fetchSomeData = (dispatch, getState) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json()).then(data => dispatch({type: 'tododata', payload: data}) )
//     const allTodos = getState()
//     console.log('Number of todos after loading: ', allTodos)
// }
// store.dispatch(fetchSomeData)
export default store