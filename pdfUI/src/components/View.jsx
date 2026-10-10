import React from 'react'

const View = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-1xl text-green-500 border-green-500 
            border-[2px] h-[23vh] w-[23vw] p-2 sm: h-[20vh] sm:w-[20vw] '>
       <label htmlFor="file-upload " className='w-full h-full'>
             <input type="file" id='file-upload' className='hidden'  />
            Upload your pdf 
       </label>
      </div>
      <div>
        <div>
           view pdf in form  
        </div>
      </div>
    </div>
  )
}

export default View
