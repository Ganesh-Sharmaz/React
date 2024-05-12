import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App
