import React, { FormEvent, useState } from 'react'
import { Rootstate } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { addTaskForm, editForm } from '../formSlice'
import Checkbox from './Checkbox'
import EditTaskForm from './Form/EditTaskForm'
import { updateEditedTodo } from '../Slices/todoSlice'
interface TaskProps {
          id?: number,
          todo: string,
          checked?: boolean,
          onChange?: () => void,
          onDelete?: () => void,
          onUpdate?: () => void,
          onEditedUpdate?: () => void
}



export default function Task({ todo, checked, id, onChange, onDelete, onUpdate, onEditedUpdate }: TaskProps) {
          const [showDelete, setShowDelete] = useState<boolean>(false)
          const [updatedTodo, setUpdatedTodo] = useState(todo)
          // const isEditing = useSelector((state: Rootstate) => state.otherStates.showEditingForm)
          const [isEditing, setIsEditing] = useState(false)
          const dispatch = useDispatch()

          function showEditingForm() {
                    setIsEditing(true)
          }
          function hideEditForm() {
                    setIsEditing(false)
          }
          function show() {
                    setShowDelete(true)
          }
          function hide() {
                    setShowDelete(false)
          }

          function handleUpdate(e: React.ChangeEvent<HTMLInputElement>) {
                    setUpdatedTodo(e.target.value)

          }
          function handleEditSubmit(e: FormEvent) {
                    e.preventDefault()
                    dispatch(updateEditedTodo({ id: id!, todo: updatedTodo }))
                    console.log(id)
                    console.log(updatedTodo)
                    hideEditForm()
          }
          if (isEditing) {
                    return (
                              <EditTaskForm
                                        value={updatedTodo}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdatedTodo(e.target.value)}
                                        onCancel={hideEditForm}
                                        onSubmit={handleEditSubmit}
                              />
                    )
          }
          return (
                    <li
                              onMouseOver={show} onMouseOut={hide} className=' text-gray-300'
                    >
                              <div className='flex border-b border-[#333333] items-start relative '>
                                        <Checkbox value={checked!} onclick={onChange} />
                                        <div className='ml-3 py-2 mr-3'>
                                                  {todo}
                                        </div>
                                        {
                                                  showDelete && (
                                                            <div className='absolute right-1 top-2 '>
                                                                      <button onClick={showEditingForm}>
                                                                                <svg width="24" height="24" fill="none" stroke='currentColor' className='text-gray-500' viewBox="0 0 24 24">
                                                                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"></path>
                                                                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 19.25H13.75"></path>
                                                                                </svg>
                                                                      </button>
                                                                      <button onMouseOver={show} className='ml-auto z-10' onClick={onDelete}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                          width="24" height="24"
                                                                                          className='text-gray-500 '
                                                                                          viewBox="0 0 24 24"
                                                                                          fill="none"
                                                                                          stroke="currentColor"
                                                                                          strokeWidth="2"
                                                                                          strokeLinecap="round"
                                                                                          strokeLinejoin="round" >
                                                                                          <polyline points="3 6 5 6 21 6"></polyline>
                                                                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                                          <line x1="10" y1="11" x2="10" y2="17"></line>
                                                                                          <line x1="14" y1="11" x2="14" y2="17"></line>
                                                                                </svg>
                                                                      </button>
                                                            </div>
                                                  )
                                        }
                              </div>
                    </li>
          )
}
