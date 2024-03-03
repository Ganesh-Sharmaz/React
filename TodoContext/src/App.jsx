import { useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])


  return (
    <TodoProvider>

    </TodoProvider>
  )
}

export default App
