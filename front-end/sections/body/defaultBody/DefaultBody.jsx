import React from 'react'

const DefaultBody = (props) => {
  return (
    <div className='relative w-full min-h-screen'>
      {props.children}
    </div>
  )
}

export default DefaultBody