import React from 'react'

type Props = {
    title : string,
    uploadedDate : string
}

const DocumentCard = (props: Props) => {
  return (
    <>
    <div className='my-2 p-2 text-sm text-white bg-gray-600  text-md rounded-md flex flex-col'>
        <div className='font-bold'>{props.title}</div>
        <div className='text-sm'>{props.uploadedDate}</div>
    </div>  
    </>
  )
}

export default DocumentCard