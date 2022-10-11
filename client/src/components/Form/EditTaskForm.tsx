import React, { useEffect, useRef } from 'react'


interface EditFormProps {
          onCancel?: () => void
          onSubmit?: any //TODO change type to valid type
          onChange?: any //TODO change any type to valid fn type
          value?: string
}
export default function EditTaskForm({ onCancel, onSubmit, value, onChange }: EditFormProps) {

          const inputRef = useRef<HTMLInputElement>(null)
          useEffect(() => {
                    inputRef.current?.focus()
          },)
          return (
                    <>
                              <form action="#" className='mt-2' onSubmit={onSubmit}>
                                        <input
                                                  onBlur={() => { console.log('kaondoka') }}
                                                  ref={inputRef}
                                                  placeholder='Task name'
                                                  className='mt-1 px-3 py-2 bg-[#1e1d1f]    focus:outline-none focus:border-gray-600 focus:ring-gray-600 block w-full rounded-md sm:text-sm focus:ring-1'
                                                  type="text"
                                                  name="todo"
                                                  id="todo"
                                                  value={value}
                                                  onChange={onChange}
                                        />
                                        <div className='flex justify-start mt-2 gap-2 flex-row-reverse'>
                                                  <button type={'submit'} className='py-1 px-4 bg-[#a82e21] hover:bg-[#C53727] rounded-md text-gray-300'>Update Task</button>
                                                  <button onClick={onCancel} className='py-1 px-4 bg-[#313131] hover:bg-[#3D3D3D] rounded-md text-gray-300'>Cancel</button>
                                        </div>
                              </form>
                    </>
          )
}
