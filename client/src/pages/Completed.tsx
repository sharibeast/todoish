
import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Rootstate } from '../store'
import { deleteTodo, updateTodo } from '../Slices/todoSlice'
import Task from '../components/Task'

export default function Completed() {
          const completedTasks = useSelector((state: Rootstate) => state.tasks.filter((todo) => todo.completed === true))
          const dispatch = useDispatch()

          function handleCheck(id: number) {
                    dispatch(updateTodo(id))
          }

          function handleDelete(id: number) {
                    dispatch(deleteTodo(id))
          }

          return (

                    <div className='mt-16'>


                              <header className='flex py-4 border-b border-[#252527]'>
                                        <h2 className='font-light text-gray-400 text-xl'>Completed Tasks</h2>
                              </header>
                              <div className='mt-4 gap-8'>
                                        <div className=''>
                                                  <ul className=''>
                                                            {
                                                                      completedTasks.map((todo) => <Task
                                                                                key={todo.id}
                                                                                checked={todo.completed}
                                                                                onChange={() => handleCheck(todo.id)
                                                                                }
                                                                                onDelete={() => handleDelete(todo.id)}
                                                                                todo={todo.todo}
                                                                      />)
                                                            }
                                                  </ul>
                                        </div>
                              </div>
                    </div>
          )
}
