import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='grid grid-cols-9 grid-rows-1 h-screen bg-[#202226]'>
        
        <div className='col-span-2 bg-[#24252b] m-1 rounded-md flex flex-col p-5 border border-1/2 border-gray-600'>
            <div className='text-lg text-white mb-5'>Agentic Clerk</div>

            <div className='text-sm text-gray-500'>Features</div>
            <button className='text-left my-1 bg-gray-600 p-1 rounded-md text-green-400 text-sm '>Dashboard</button>
            <button className='text-left text-white mb-1 p-1 text-sm '>Chat</button>
            <button className='text-left text-white mb-1 p-1 text-sm '>Projects</button>
            <button className='text-left text-white mb-1 p-1 text-sm '>Database</button>

            <div className='text-sm mt-5 text-gray-500'>Profile</div>
            <button className='text-left text-white mb-1 p-1 text-sm '>Your Profile</button>
            <button className='text-left text-white mb-1 p-1 text-sm '>Settings</button>
            <button className='text-left text-white mb-1 p-1 text-sm '>Logout</button>
        </div>

        <div className='col-span-5  m-1 rounded-md flex flex-col p-5'>
            <div className=' text-white'>Chat</div>
        </div>

        <div className='col-span-2 bg-[#24252b] m-1 rounded-md flex flex-col p-5'>
            <div className=' text-white'>Document</div>
        </div>
    </div>
  )
}

export default Dashboard