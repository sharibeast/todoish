import { FormEvent, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const data = [
  {
    id: 1,
    todo: 'first task',
    completed: false,
  },
];


function App() {
  const [tasks, setTasks] = useState(data)
  const [todo, setTodo] = useState('');

  function handleSubmit(e: FormEvent) {

    e.preventDefault()
    console.log('fired')
    const newTasks = [...tasks, { id: tasks.length + 1, todo: todo, completed: false }]
    setTasks(newTasks)
    setTodo('')

  }

  function handleClick(id: number) {
    console.log(`clicked ${id}`)
    const newTasks = tasks.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo })
    setTasks(newTasks)
  }

  function handleDelete(id: number) {
    const newTasks = tasks.filter(todo => todo.id !== id)
    setTasks(newTasks)

  }
  return (
    <div className="App">
      <h2>Hello, Whats are you trying to accomplish today</h2>
      <div>
        {tasks.map((todo) => (
          <div key={todo.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
            <li style={{ textDecoration: todo.completed ? "line-through" : "none" }} onClick={() => handleClick(todo.id)}>{todo.todo}</li>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </div>

        ))}
        {tasks.length === 0 && 'Hurray! you have no task today'}
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>



    </div>
  );
}

export default App;
