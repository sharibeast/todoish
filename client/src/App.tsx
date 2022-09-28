import React, { ChangeEvent, FormEvent, useState, useEffect, useId } from 'react';
import Task from './components/Task';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { Rootstate } from './store';
import { useAppDispatch, useAppSelector } from './Hooks/hooks';
import { addTodo, deleteTodo, updateTodo } from './Slices/todoSlice';
import Checkbox from './components/Checkbox';



function App() {
  const todos = useSelector((state: Rootstate) => state.tasks.filter((todo) => todo.completed === false))
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
    setTodo('')
  }

  function handleCheck(id: number) {
    dispatch(updateTodo(id))
  }

  function handleDelete(id: number) {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="bg-[#1F1F1F] text-white " >
      <div className='flex h-screen'>
        <div className=' w-80 bg-[#242424]'>
          <h1>tabs</h1>
          <ul className='pl-9'>
            <li>
              <div className=' px-4 py-1 rounded-sm hover:bg-[#363636] transition-all duration-100 '>
                Today
              </div>
            </li>
            <li>
              <div className=' px-4 py-1 rounded-sm hover:bg-[#363636] transition-all duration-100 '>

                Completed
              </div>
            </li>
          </ul>
        </div>
        <div className='flex-1  max-w-3xl mx-auto'>
          <div className=''>
            <header className='flex py-4 border-b border-[#252527]'>
              <h2 className='font-semibold text-xl'>Today <span className='text-sm font-normal text-gray-500 ml-2'>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span></h2>
            </header>
            <div className='mt-4 gap-8'>
              {
                todos.length === 0 && (
                  <div className='text-center text-xl text-gray-400 font-semibold'>You dont have Tasks today.</div>
                )
              }
              <div className=''>
                <ul className=''>
                  {
                    todos.map((todo) => <Task
                      key={todo.id}
                      value={todo.completed}
                      onChange={() => handleCheck(todo.id)
                      }
                      onDelete={() => handleDelete(todo.id)}
                    >{todo.todo}</Task>)
                  }
                </ul>
                {
                  showForm && (
                    <form action="#" className='mt-2' onSubmit={submit}>
                      <input
                        placeholder='Task name'
                        className='mt-1 px-3 py-2 bg-[#1e1d1f]    focus:outline-none focus:border-gray-600 focus:ring-gray-600 block w-full rounded-md sm:text-sm focus:ring-1'
                        type="text"
                        name="todo"
                        id="todo"
                        value={todo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
                      />
                      <div className='flex justify-end mt-2 gap-2'>
                        <button onClick={() => { setShowForm(false) }} className='py-1 px-4 bg-[#313131] hover:bg-[#3D3D3D] rounded-md text-gray-300'>Cancel</button>
                        <button type={'submit'} className='py-1 px-4 bg-[#a82e21] hover:bg-[#C53727] rounded-md text-gray-300'>Add Task</button>
                      </div>
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

                {/* {
              JSON.stringify(todos)
            } */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
