import React, { ChangeEvent, FormEvent, useState, useEffect, useId } from 'react';
import Task from './components/Task';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { Rootstate } from './store';
import { useAppDispatch, useAppSelector } from './Hooks/hooks';
import { addTodo, deleteTodo, updateTodo } from './Slices/todoSlice';
import Checkbox from './components/Checkbox';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Notasks from './components/Notasks';
import { addTaskForm, editForm } from './formSlice';
import AddTaskForm from './components/Form/addTaskForm';



function App() {
  const todos = useSelector((state: Rootstate) => state.tasks.filter((todo) => todo.completed === false))
  const showForm = useSelector((state: Rootstate) => state.otherStates.showAddTaskForm)
  const newDispatch = useAppDispatch()
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('');


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

  function addTask() {
    console.log('clicked')
    dispatch(editForm(false))
    dispatch(addTaskForm(true))
  }

  return (
    <div className="bg-[#1F1F1F] text-white " >
      <div className='flex h-screen'>
        <SideBar />
        <div className='flex-1  max-w-3xl mx-auto'>
          <div className=''>
            <Header />
            <div className='mt-4 gap-8'>
              {
                todos.length === 0 && (
                  <Notasks />)
              }
              <div className=''>
                <ul className=''>
                  {
                    todos.map((todo) => <Task
                      key={todo.id}
                      checked={todo.completed}
                      onChange={() => handleCheck(todo.id)
                      }
                      onDelete={() => handleDelete(todo.id)}
                      todo={todo.todo}
                    // onUpdate={()=>setTodo()}
                    />)
                  }
                </ul>
                {
                  showForm && (
                    <AddTaskForm
                      onSubmit={submit}
                      value={todo}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
                    />
                  )
                }
                {
                  !showForm && (
                    <button onClick={addTask} className="flex items-center mt-4 text-[#707a80] hover:text-blue-600 transition-all duration-150">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5.75V18.25"></path>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 12"></path>
                      </svg>
                      <span className='text-sm  font-medium'>Add Tasks</span>
                    </button>
                  )
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}




export default App;
