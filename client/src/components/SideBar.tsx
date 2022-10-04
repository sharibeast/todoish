import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
          return (

                    <div className=' w-80 bg-[#242424]'>
                              <ul className='pl-9'>
                                        <Link to={"/today"}>
                                                  <li className='cursor-pointer'>
                                                            <div className='px-4  py-1 flex rounded-sm hover:bg-[#363636] transition-all duration-100 '>
                                                                      <svg width="24" height="24" viewBox="0 0 24 24" className="text-green-500">
                                                                                <g fill="currentColor" fillRule="evenodd">
                                                                                          <path fillRule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1"></path>
                                                                                          <path fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path>
                                                                                          <text fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" fontSize="9" transform="translate(4 2)" fontWeight="500">
                                                                                                    <tspan x="8" y="15" textAnchor="middle">{new Date().getDate()}</tspan>
                                                                                          </text>
                                                                                </g>
                                                                      </svg>
                                                                      Today
                                                            </div>
                                                  </li>
                                        </Link>
                                        <Link to={"/completed"}>
                                                  <li className='cursor-pointer'>
                                                            <div className=' flex px-4 py-1 rounded-sm hover:bg-[#363636] transition-all duration-100 '>
                                                                      <svg
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                                className="text-green-500">
                                                                                <path
                                                                                          fillRule="evenodd"
                                                                                          clipRule="evenodd" d="M21 10.5a7.474 7.474 0 01-.637 3.03 8.5 8.5 0 00-9.893-9.893A7.5 7.5 0 0121 10.5zM10.5 5a8.55 8.55 0 00-1.53.137 7.5 7.5 0 019.893 9.893A8.5 8.5 0 0010.5 5zm7.5 8.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM10.5 20a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm-3.604-6.604a.5.5 0 01.708 0l1.646 1.647 4.146-4.147a.5.5 0 01.708.708l-4.5 4.5a.5.5 0 01-.708 0l-2-2a.5.5 0 010-.708z"
                                                                                          fill="currentColor">
                                                                                </path>
                                                                      </svg>
                                                                      Completed
                                                            </div>
                                                  </li>
                                        </Link>
                              </ul>
                    </div>
          )
}
