import DocumentsList from '../components/DocumentsList'
import Sidebar from '../components/Sidebar'


const Chat = () => {
  return (
    <div className='grid grid-cols-9 grid-rows-1 h-screen bg-[#202226]'>
        
        <Sidebar />

        <div className='col-span-5  m-1 rounded-md flex flex-col p-5'>
            <div className=' text-white'>Chat</div>
        </div>

        <DocumentsList />
            
        </div>
    
  )
}

export default Chat