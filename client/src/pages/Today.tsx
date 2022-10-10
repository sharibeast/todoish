import React, { FormEvent, useState, useEffect } from 'react'
import Header from '../components/Header'
import Notasks from '../components/Notasks'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../Hooks/hooks'
import { Rootstate } from '../store'
import { addTodo, deleteTodo, updateTodo } from '../Slices/todoSlice'
import { addTaskForm, editForm } from '../formSlice'
import AddTaskForm from '../components/Form/AddTaskForm'
import Task from '../components/Task'

export default function Today() {
          const todos = useSelector((state: Rootstate) => state.tasks.filter((todo) => todo.completed === false))
          const showForm = useSelector((state: Rootstate) => state.otherStates.showAddTaskForm)
          const newDispatch = useAppDispatch()
          const dispatch = useDispatch()
          const [todo, setTodo] = useState('');


          useEffect(() => {
                    return () => {
                              dispatch(addTaskForm(false))
                    }
          }, [])


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
                    dispatch(editForm(false))
                    dispatch(addTaskForm(true))
          }
          function handleEdit(id: number) {
                    console.log('edit at ', id)
                    dispatch(editForm(true))
          }

          function handleEditUpdated(e: FormEvent, id: number) {
                    e.preventDefault()
                    console.log('i want to submit this id ', id);

          }
          return (

                    <div className=' mt-16'>
                              <Header />
                              <div className='mt-4 gap-8'>
                                        {
                                                  todos.length === 0 && (
                                                            <Notasks />)
                                        }
                                        <div className=''>
                                                  <ul className=''>
                                                            {
                                                                      todos.map(
                                                                                (todo) => <Task id={todo.id}
                                                                                          key={todo.id}
                                                                                          checked={todo.completed}
                                                                                          onChange={() => handleCheck(todo.id)
                                                                                          }
                                                                                          onDelete={() => handleDelete(todo.id)}
                                                                                          todo={todo.todo}
                                                                                          onUpdate={() => handleEdit(todo.id)}
                                                                                />)
                                                            }
                                                  </ul>
                                                  {
                                                            showForm && (
                                                                      <AddTaskForm
                                                                                onSubmit={submit}
                                                                                value={todo}
                                                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
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
          )
}
