import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Card({title,discription,status}) {
  return (
    <div className='bg-slate-500 text-black w-[300px] mx-auto p-4 rounded-lg shadow-2xl shadow-red-700'>
      <h1>Title: {title}</h1>
      <p>Discription: {discription}</p>
      <p>Status: {status}</p>
      <div className='flex justify-between mt-3'>
        <button className='bg-blue-400 py-1 px-4 rounded-md hover:bg-yellow-200'><FaEdit/></button>
        <button className='bg-red-600 py-1 px-4 rounded-md hover:bg-red-400'><MdDelete/></button>
      </div>
    </div>
  )
}

export default Card
