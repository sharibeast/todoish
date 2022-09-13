import React, { FormEvent, useState } from 'react';
import Task from './components/Task';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { Rootstate } from './store';
import { useAppDispatch, useAppSelector } from './Hooks/hooks';
import { addTodo } from './Slices/todoSlice';

const data = [
  {
    id: 1,
    todo: 'first task',
    completed: false,
  },
];


function App() {
  const count = useSelector((state: Rootstate) => state.counter)
  const todos = useSelector((state: Rootstate) => state.tasks)
  const newCount = useAppSelector(state => state.counter.value)
  const newDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const [todo, setTodo] = useState('');
  const [showForm, setShowForm] = useState<boolean>(false)




  function submit(e: FormEvent) {
    e.preventDefault()
    // dont submit if input form is empty
    if (todo.length < 1) {
      return;
    }
    dispatch(addTodo(todo))
  }

  // function handleClick(id: number) {
  //   console.log(`clicked ${id}`)
  //   const newTasks = tasks.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo })
  //   setTasks(newTasks)
  // }

  // function handleDelete(id: number) {
  //   const newTasks = tasks.filter(todo => todo.id !== id)
  //   setTasks(newTasks)

  // }
  return (

    <div className="bg-[#18181A] text-white h-screen" >
      <div className='max-w-5xl mx-auto'>
        <header className='flex py-4 border-b border-[#252527]'>
          <h2 className='font-semibold text-2xl'>Tasks</h2>
        </header>
        <div className='grid grid-cols-3 mt-4 gap-8'>
          <div>
            <h2 className="text-[#C37947] font-medium text-lg"> <span>icon</span> Current</h2>
            <ul className='flex flex-col gap-2'>

              {
                todos.map((task) => <Task key={task.todo}>{task.todo}</Task>)
              }

            </ul>
            {
              showForm && (

                <form action="#" className='mt-2' onSubmit={submit}>
                  <input
                    placeholder='Task name'
                    className='mt-1 px-3 py-2 bg-[#1e1d1f]    focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                    type="text"
                    name="todo"
                    id="todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                  />
                </form>
              )
            }
            {
              !showForm && (
                <button onClick={() => setShowForm(!showForm)} className="flex items-center mt-4 text-[#707a80] hover:text-blue-600 transition-all duration-150">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5.75V18.25"></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 12"></path>
                  </svg>
                  <span className='text-sm  font-medium'>Add Tasks</span>
                </button>
              )
            }

          </div>
          <div>
            <h2 className="text-[#2b67d8] font-medium text-lg">Backlog</h2>
          </div>
          <div>
            <h2 className="text-[#6E6D73] font-medium text-lg">Backlog</h2>
          </div>
        </div>

      </div>


      {/* <div>
        {tasks.map((todo) => (
          <div key={todo.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
            <li style={{ textDecoration: todo.completed ? "line-through" : "none" }} onClick={() => handleClick(todo.id)}>{todo.todo}</li>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </div>

        ))}
        {tasks.length === 0 && 'Hurray! you have no task today'}

      </div> */}
    </div>

  );
}

export default App;
