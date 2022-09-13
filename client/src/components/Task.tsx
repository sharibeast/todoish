import React from 'react'





interface TaskProps {
          children: React.ReactNode,
          value?: string | number
}

export default function Task({ children, value }: TaskProps) {
          return (
                    <li draggable
                              className='flex items-center gap-x-2 py-2 px-2 rounded-sm  bg-[#272729] cursor-pointer hover:bg-[#313133] transition-all duration-150'
                    >
                              <input type="checkbox" value={value} />
                              {children}
                    </li>
          )
}
