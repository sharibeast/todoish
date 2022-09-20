import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
interface TaskProps {
          children: React.ReactNode,
          value?: boolean,
          onChange?: () => void,
          onDelete?: () => void
}



export default function Task({ children, value, onChange, onDelete }: TaskProps) {
          return (
                    <li
                              className='flex items-center gap-x-2 py-2 px-2 rounded-sm  bg-[#272729] cursor-pointer hover:bg-[#313133] transition-all duration-150'
                    >

                              <input type="checkbox" className='h-4 w-4 cursor-pointer' checked={value} onChange={onChange} />
                              {children}
                              <button className='ml-auto' onClick={onDelete}>delete</button>
                    </li>
          )
}
