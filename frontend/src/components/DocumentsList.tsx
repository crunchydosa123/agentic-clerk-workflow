import React from 'react'
import DocumentCard from './DocumentCard'

type Props = {
}

const docList = [
    {
        title: "Document 1",
        lastUsed: "2d ago"
    },

    {
        title: "Document 1",
        lastUsed: "2d ago"
    },

    {
        title: "Document 1",
        lastUsed: "2d ago"
    },

    {
        title: "Document 1",
        lastUsed: "2d ago"
    }
]

const DocumentsList = (props: Props) => {
  return (
    <div className='col-span-2 bg-[#24252b] m-1 rounded-md flex flex-col p-5'>
            <div className=' text-white'>Documents</div>

            {docList.map(({title, lastUsed}, index) => (
                <DocumentCard key={index} title={title} uploadedDate={lastUsed} />
            ))}
    </div>

  )
}

export default DocumentsList