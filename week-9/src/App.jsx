import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const todos = useTodos();

  return (
    <>
      {todos.map(todo => (
        <Track key={todo.id || todo._id} todo={todo} />
      ))}
    </>
  )
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  )
}

function useTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/todos")
        setTodos(res.data.todos || res.data)
        console.log("Todos fetched at:", new Date().toLocaleTimeString())
      } catch (error) {
        console.error("Error fetching todos:", error)
      }
    }
    
    // Fetch immediately on mount
    fetchTodos()

    // Set up interval to fetch every 5 seconds
    const interval = setInterval(fetchTodos, 5000)
    console.log("Interval started - fetching todos every 5 seconds")

    // Cleanup function - this runs when component unmounts
    return () => {
      clearInterval(interval)
      console.log("Interval cleaned up")
    }
  }, [])
  
  return todos
}

export default App