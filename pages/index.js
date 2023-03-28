import { useState } from 'react'

const TODOS = [
  {id: 1, label: "do homework", complete: false},
  {id: 2, label: "do work", complete: true},
  {id: 3, label: "walk the dog", complete: true},
  {id: 4, label: "post pictures", complete: false}
]

const Todo = ({ label }) => {
  return (
    <li>{label}</li>
  )
}

const TodoList = ({ todos }) => {
  let items = []

  todos.forEach(item => {
    items.push(<Todo label={item.label} key={item.id}/>)
  })

  return (
    <ol>
      {items}
    </ol>
  )
}

const AddTodos = () => {
  return (
    <input type="text"></input>
  )
}

export default function App() {
  return (
    <>
      <h1>My Todos</h1>
      <p>this is a list of todos</p>
      <AddTodos />
      <TodoList todos={TODOS}/>
    </>
  )
}