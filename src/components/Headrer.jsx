import React from 'react'

const Headrer = ({newLogo}) => {
  return (
   <nav className=' m-2 rounded-xl shadow-md  bg-gray-50'>
    <div className='text-3xl px-2 justify-between flex '>

    <div className='py-2' >{newLogo}</div>
    <div className='py-2'>
        <button className='text-xl bg-blue-600 text-white mx-2 py-2 rounded-md px-5'>Sign in</button>
        <button className='text-xl bg-blue-600 text-white py-2 rounded-md px-5'>Sign up</button>
        
    </div>
    </div>
   </nav>
  )
}

export default Headrer