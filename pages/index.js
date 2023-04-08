import { useState } from 'react'

// const TODOS = [
//   { id: 1, label: "do homework", complete: false },
//   { id: 2, label: "do work", complete: true },
//   { id: 3, label: "walk the dog", complete: true },
//   { id: 4, label: "post pictures", complete: false }
// ]

let id = 1

const Todo = ({ todos, setTodos, index }) => {
  const [value, setValue] = useState(todos[index].label)

  let checkTodo = () => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {id: todo.id, label: value, isComplete: !todo.isComplete, editMode: todo.editMode}
      } else {
        return todo
      }
    })
    console.log(updatedTodos)
    setTodos(updatedTodos)
  }

  let editOrSave = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {id: todo.id, label: value, isComplete: todo.isComplete, editMode: !todo.editMode}
      } else {
        return todo
      }
    })
    console.log(updatedTodos)
    setTodos(updatedTodos)
  }

  return (
    <li className="todo">
      <div className="todo-label">
        <input type="checkbox" onClick={checkTodo}></input>
        {todos[index].editMode ? (
          <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}}></input>
        ) : (
          <span className={todos[index].isComplete ? 'completed' : null}>{todos[index].label}</span>
        )
        }

      </div>

      <div className="todo-buttons">
        <button onClick={() => editOrSave(index)}>{todos[index].editMode ? 'save' : 'edit'}</button>
        <button>delete</button>
      </div>
    </li>
  )
}

const TodoList = ({ todos, setTodos }) => {
  let items = []
  let i = 0

  todos.forEach(item => {
    items.push(<Todo todos={todos} setTodos={setTodos} index={i} key={item.id} />)
    i++
  })

  return (
    <ul className="todo-list">
      {items}
    </ul>
  )
}

const AddTodos = ({ todos, setTodos }) => {

  const addATodo = (e) => {
    e.preventDefault()
    setTodos([...todos, { id: id++, label: e.target[0].value, isComplete: false, editMode: false }])
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


        <AddTodos todos={todos} setTodos={setTodos} />


        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </main>
  )
}