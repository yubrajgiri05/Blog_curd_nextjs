import React from 'react'
import{ HiOutlineTrash} from "react-icons/hi"

const RemoveBtn = () => {
  return (
    <>
      <button className='text-red-500'>
        <HiOutlineTrash size={38}/>
      </button>

    </>
  )
}

export default RemoveBtn
