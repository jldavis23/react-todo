import { useState } from 'react'

const TODOS = [
  { id: 1, label: "do homework", complete: false },
  { id: 2, label: "do work", complete: true },
  { id: 3, label: "walk the dog", complete: true },
  { id: 4, label: "post pictures", complete: false }
]

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

const AddTodos = () => {
  return (
    <div className="add-todos">
      <input type="text" placeholder="Create a new todo..."></input>
      <button>+</button>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <div className="wrapper">
        <h1>TODO</h1>


        <AddTodos />


        <TodoList todos={TODOS} />
      </div>
    </main>
  )
}