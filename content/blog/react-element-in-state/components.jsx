import React from "react"
import CodeDemo from "../../../src/components/CodeDemo"

function generateRandomTodo() {
  const prefixes = ["Learn", "Write", "Build", "Fix", "Refactor"]
  const suffixes = ["React", "Redux", "React Native", "JavaScript"]
  return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${
    suffixes[Math.floor(Math.random() * suffixes.length)]
  }`
}

function Todo({ onDelete, text }) {
  return (
    <li>
      {text}
      {onDelete ? (
        <button
          onClick={onDelete}
          style={{ background: "transparent", border: "none" }}
        >
          <span role="img" aria-label="Delete">
            ❌
          </span>
        </button>
      ) : null}
    </li>
  )
}

function TodoListV1() {
  const [todos, setTodos] = React.useState([])
  function handleAddTodo() {
    setTodos([
      ...todos,
      <Todo key={todos.length} text={generateRandomTodo()} />,
    ])
  }
  return (
    <CodeDemo>
      <ul style={{ padding: "10px" }}>{todos}</ul>
      <button onClick={handleAddTodo}>Add ToDo</button>
    </CodeDemo>
  )
}

function TodoListV2() {
  const [todos, setTodos] = React.useState([])

  function handleDelete(index) {
    console.log("handleDelete", { index, todos })
    setTodos(todos.filter((_, i) => i !== index))
  }

  function handleAddTodo() {
    setTodos([
      ...todos,
      <Todo
        key={todos.length}
        text={generateRandomTodo()}
        onDelete={() => handleDelete(todos.length)}
      />,
    ])
  }
  return (
    <CodeDemo>
      <ul style={{ padding: "10px" }}>{todos}</ul>
      <button onClick={handleAddTodo}>Add ToDo</button>
    </CodeDemo>
  )
}

function TodoListV3() {
  const [todos, setTodos] = React.useState([])

  function handleDelete(index) {
    setTodos(currentTodos => currentTodos.filter((_, i) => i !== index))
  }

  function handleAddTodo() {
    setTodos([
      ...todos,
      <Todo
        key={todos.length}
        text={generateRandomTodo()}
        onDelete={() => handleDelete(todos.length)}
      />,
    ])
  }
  return (
    <CodeDemo>
      <ul style={{ padding: "10px" }}>{todos}</ul>
      <button onClick={handleAddTodo}>Add ToDo</button>
    </CodeDemo>
  )
}

function TodoListV4() {
  const [todos, setTodos] = React.useState([])
  const [isDeleteMode, setIsDeleteMode] = React.useState(false)

  function handleDelete(index) {
    if (!isDeleteMode) {
      alert("Please enable delete mode first")
      return
    }
    setTodos(currentTodos => currentTodos.filter((_, i) => i !== index))
  }

  function handleAddTodo() {
    setTodos([
      ...todos,
      <Todo
        key={todos.length}
        text={generateRandomTodo()}
        onDelete={() => handleDelete(todos.length)}
      />,
    ])
  }

  return (
    <CodeDemo>
      <div>
        <input
          type="checkbox"
          checked={isDeleteMode}
          onChange={() => setIsDeleteMode(!isDeleteMode)}
          id="deleteMode1"
        ></input>
        <label htmlFor="deleteMode1"> Enable Delete Mode</label>
      </div>

      <ul style={{ padding: "10px" }}>{todos}</ul>
      <button onClick={handleAddTodo}>Add ToDo</button>
    </CodeDemo>
  )
}

function TodoListV5() {
  const [todos, setTodos] = React.useState([])
  const [isDeleteMode, setIsDeleteMode] = React.useState(false)

  function handleDelete(index) {
    if (!isDeleteMode) {
      alert("Please enable delete mode first")
      return
    }
    setTodos(currentTodos => currentTodos.filter((_, i) => i !== index))
  }

  function handleAddTodo() {
    setTodos([...todos, { text: generateRandomTodo() }])
  }
  return (
    <CodeDemo>
      <div>
        <input
          type="checkbox"
          checked={isDeleteMode}
          onChange={() => setIsDeleteMode(!isDeleteMode)}
          id="deleteMode2"
        ></input>
        <label htmlFor="deleteMode2"> Enable Delete Mode</label>
      </div>

      <ul style={{ padding: "10px" }}>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            onDelete={() => handleDelete(index)}
            text={todo.text}
          />
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add ToDo</button>
    </CodeDemo>
  )
}

function TodoListV6() {
  const [todos, setTodos] = React.useState([])
  const [isDeleteMode, setIsDeleteMode] = React.useState(false)

  function handleDelete(idToDelete) {
    if (!isDeleteMode) {
      alert("Please enable delete mode first")
      return
    }
    setTodos(currentTodos =>
      currentTodos.filter(todo => todo.id !== idToDelete)
    )
  }

  function handleAddTodo() {
    setTodos([
      ...todos,
      { text: generateRandomTodo(), id: new Date().getTime() },
    ])
  }

  return (
    <CodeDemo>
      <div>
        <input
          type="checkbox"
          checked={isDeleteMode}
          onChange={() => setIsDeleteMode(!isDeleteMode)}
          id="deleteMode3"
        ></input>
        <label htmlFor="deleteMode3"> Enable Delete Mode</label>
      </div>

      <ul style={{ padding: "10px" }}>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            onDelete={() => handleDelete(todo.id)}
            text={todo.text}
          />
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add ToDo</button>
    </CodeDemo>
  )
}

export {
  TodoListV1,
  TodoListV2,
  TodoListV3,
  TodoListV4,
  TodoListV5,
  TodoListV6,
}
