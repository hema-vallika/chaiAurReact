import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todos() {
   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()
  return (
    <ul className='list-none'>
        {todos.map((todo) => (
            <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 rounded' 
            key={todo.id}>
                <div className='text-white text-xl capitalize'>{todo.text}</div>
                <button onClick={() => dispatch(removeTodo(todo.id))}
                    className='text-white bg-red-500 border-0 py-2 px-4 my-1 focus:outline-none hover:bg-red-600 rounded text-md'>X</button>
            </li>
            
        ))}
    </ul>
  )
}

export default Todos