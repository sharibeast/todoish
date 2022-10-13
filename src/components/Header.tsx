import React from 'react'

export default function Header() {
  return (
            <header className='flex py-4 border-b border-[#252527]'>
              <h2 className='font-semibold text-xl'>Today <span className='text-sm font-normal text-gray-500 ml-2'>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span></h2>
            </header>
  )
}
