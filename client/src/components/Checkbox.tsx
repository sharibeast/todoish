import React, { useState } from 'react'
import { useSelector } from 'react-redux'


export default function Checkbox({ onclick }) {
          const [showIcon, setShowIcon] = useState<boolean>(false)

          return (
                    <button
                              onClick={onclick}
                              onMouseOut={() => setShowIcon(false)}
                              onMouseOver={() => { setShowIcon(true) }}
                              type={'button'}
                              role={'checkbox'}
                              className='mt-3'
                    >
                              <div className='h-5 w-5 rounded-full border border-gray-500  flex items-center justify-center'>
                                        {
                                                  showIcon && (
                                                            <div className=''>
                                                                      <svg width="24" height="24"><path fill="currentColor" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
                                                            </div>
                                                  )
                                        }
                              </div>
                    </button>
          )
}
