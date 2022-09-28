import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTaskForm } from '../../formSlice'


export default function AddTaskForm({ onSubmit, onChange, value }) {
          const dispatch = useDispatch()
          const inputRef = useRef<HTMLInputElement>(null)
          useEffect(() => {

                    inputRef.current?.focus()

                    // return () => {
                    //           console.log('imeunmount');
                    // }
          },)

          return (
                    <form action="#" className='mt-2 ' onSubmit={onSubmit}>
                              <input
                                        ref={inputRef}
                                        placeholder='Task name'
                                        className='mt-1 px-3 py-2 bg-[#1e1d1f] border border-gray-600     focus:outline-none focus:border-gray-600 focus:ring-gray-600 block w-full rounded-md sm:text-sm focus:ring-1'
                                        type="text"
                                        name="todo"
                                        id="todo"
                                        value={value}
                                        onChange={onChange}
                                        autoFocus
                              />
                              <div className='flex justify-end mt-2 gap-2 '>
                                        <button type={'button'}
                                                  onClick={() => {
                                                            dispatch(addTaskForm(false)
                                                            )
                                                  }}
                                                  className='py-1 px-4 bg-[#313131]  hover:bg-[#3D3D3D] rounded-md text-gray-300'>
                                                  Cancel
                                        </button>
                                        <button type={'submit'} className='py-1 px-4 bg-[#a82e21] hover:bg-[#C53727] rounded-md text-gray-300'>Add Task</button>
                              </div>
                    </form>
          )
}
