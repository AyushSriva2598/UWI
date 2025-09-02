import React from 'react' 

export default function Form() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex flex-col gap-4 p-8 border border-gray-400 rounded-md w-full max-w-md'>
        <span className='text-gray-800'>Fill in your details:</span>
        <div>
          <span className='text-gray-700 mb-2'>Name:</span>
          <div className='border border-gray-600 rounded-md bg-white'>
            <input className='w-full p-2' type='text' placeholder='Enter your name' />
          </div>
        </div>
        <div>
          <span className='text-gray-700 mb-2'>Email:</span>
          <div className='border border-gray-600 rounded-md bg-white'>
            <input className='w-full p-2' type='email' placeholder='Enter your email' />
          </div>
        </div>
        <div>
          <span className='text-gray-700  mb-2'>X handle:</span>
          <div className='border border-gray-600 rounded-md bg-white'>
            <input className='w-full p-2' type='text' placeholder='Enter your X handle' />
          </div>
        </div>
        <div>
          <span className='text-gray-700 mb-2'>Wallet Address:</span>
          <div className='border border-gray-600 rounded-md bg-white'>
            <input className='w-full p-2' type='text' placeholder='Enter your wallet address' />
          </div>
        </div>
        <div>
          <span className='text-gray-700 mb-2'>Image:</span>
          <div className='border border-gray-600 rounded-md bg-white'>
            <input className='w-full p-2 cursor-pointer' type='file' />
          </div>
        </div>
        <div className='bg-gray-600 text-white border border-gray-900 rounded-md p-2 flex justify-center mt-4 cursor-pointer hover:bg-gray-700 ' >Submit</div>
      </div>
    </div>
  )
}
