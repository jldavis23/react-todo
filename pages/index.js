import { useState } from 'react'

// const TODOS = [
//   { id: 1, label: "do homework", complete: false },
//   { id: 2, label: "do work", complete: true },
//   { id: 3, label: "walk the dog", complete: true },
//   { id: 4, label: "post pictures", complete: false }
// ]

let id = 0

const Todo = ({ label }) => {
  return (
    <li className="todo">
      <div className="todo-label">
        <input type="checkbox"></input>
        <span>{label}</span>
      </div>
  
      <div className="todo-buttons">
        <button>edit</button>
        <button>delete</button>
      </div>
    </li>
  )
}

const TodoList = ({ todos }) => {
  let items = []

  todos.forEach(item => {
    items.push(<Todo label={item.label} key={item.id} />)
  })

  return (
    <ul className="todo-list">
      {items}
    </ul>
  )
}

const AddTodos = ( {todos, setTodos} ) => {

  const addATodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {id: id++, label: e.target[0].value, isComplete: false}])
    e.target[0].value = ''
  }

  return (
    <form className="add-todos" onSubmit={addATodo}>
      <input type="text" placeholder="Create a new todo..."></input>
      <button type='submit'>+</button>
    </form>
  )
}

export default function App() {
  const [todos, setTodos] = useState([])

  return (
    <main>
      <div className="wrapper">
        <h1>TODO</h1>


        <AddTodos todos={todos} setTodos={setTodos}/>


        <TodoList todos={todos} />
      </div>
    </main>
  )
}