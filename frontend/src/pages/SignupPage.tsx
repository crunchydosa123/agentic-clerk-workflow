import React from 'react'

type Props = {}

const SignupPage = (props: Props) => {
  return (
    <div className='bg-[#202226] h-screen w-full flex flex-col justify-center items-center'>
        
        <div className='w-1/3 border border-gray-600 rounded-md flex flex-col p-4 text-white'>
            <div>Signup</div>
            <div className='mt-5'>
                <input type='email' className='text-sm my-1 p-1 w-full bg-gray-500 rounded-md' placeholder='Email'></input>
                <input type='password' className='text-sm my-1 p-1 w-full bg-gray-500 rounded-md' placeholder='Password'></input>
                <input type='password' className='text-sm my-1 p-1 w-full bg-gray-500 rounded-md' placeholder='Confirm Password'></input>
                <button className='bg-green-400 mt-5 p-2 w-full rounded-md'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default SignupPage