import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from './Checkbox'
interface TaskProps {
          children: string,
          value?: boolean,
          onChange?: () => void,
          onDelete?: () => void
}



export default function Task({ children, value, onChange, onDelete }: TaskProps) {
          const [showDelete, setShowDelete] = useState<boolean>(false)
          // const [isEditing, setIsEditing] = useState<boolean>(false)

          function show() {
                    setShowDelete(true)
          }
          function hide() {
                    setShowDelete(false)
          }
          // function handleEdit() {
          //           setIsEditing(true)
          //           console.log(isEditing)
          // }
          // if (isEditing) {
          //           return (

          //                     <>
          //                               <form action="#">
          //                                         <input type="text" value={children} />
          //                               </form>
          //                     </>
          //           )
          // }
          return (
                    <li
                              onMouseOver={show} onMouseOut={hide} className='flex items-center gap-x-2 py-4 px-2 rounded-sm   cursor-pointer  transition-all duration-150 border-b border-[#333333]'
                    >
                              <>
                                        <Checkbox onChange={onChange} />
                                        {/* <input type="checkbox" className='h-4 w-4 cursor-pointer' checked={value} onChange={onChange} /> */}
                                        {children}
                                        {
                                                  showDelete && (
                                                            <>
                                                                      {/* <button onClick={handleEdit}>
                                                                                <svg width="24" height="24" fill="none" stroke='currentColor' className='text-gray-500' viewBox="0 0 24 24">
                                                                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"></path>
                                                                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 19.25H13.75"></path>
                                                                                </svg>
                                                                      </button> */}
                                                                      <button onMouseOver={show} className='ml-auto' onClick={onDelete}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                          width="24" height="24"
                                                                                          className='text-gray-500'
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
                                                            </>
                                                  )
                                        }
                              </>
                    </li>
          )
}
