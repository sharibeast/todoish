import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import Task from './components/Task';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { Rootstate } from './store';
import { useAppDispatch, useAppSelector } from './Hooks/hooks';
import { addTodo, deleteTodo, updateTodo } from './Slices/todoSlice';



function App() {
  const todos = useSelector((state: Rootstate) => state.tasks)
  const newDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const [todo, setTodo] = useState('');
  const [showForm, setShowForm] = useState<boolean>(false)


  function submit(e: FormEvent) {
    e.preventDefault()
    if (todo.length < 1) {
      return;
    }
    dispatch(addTodo(todo))
  }

  function handleCheck(index: number) {
    dispatch(updateTodo(index))
  }

  function handleDelete(index:number) {
dispatch(deleteTodo(index))
  }

  return (

    <div className="bg-[#18181A] text-white h-screen" >
      <div className='max-w-5xl mx-auto'>
        <header className='flex py-4 border-b border-[#252527]'>
          <h2 className='font-semibold text-2xl'>Today</h2>
        </header>

        <div className='mt-4 gap-8'>
          {
            todos.length === 0 && (
              <div>You dont have Tasks today.</div>
            )
          }
          <div className=''>
            <ul className='flex flex-col gap-2'>
              {
                todos.map((todo, index) => <Task
                  key={index}
                  value={todo.completed}
                  onChange={() => handleCheck(index)
                  }
                  onDelete={()=>handleDelete(index)}
                  >{todo.todo}</Task>)
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
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
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

            {
              JSON.stringify(todos)
            }

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
