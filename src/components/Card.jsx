import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import EditTask from './EditTask';
// import db from '../../db.json'

function Card(props) {
  // console.log(db.data[0].id)
  const {title,discription,status,id}  = props

  async function handleDelete(id){
    // console.log(id)
    try {
      // Send DELETE request to the API endpoint with the ID to delete
      await axios.delete(`http://localhost:8080/data/${id}`);

      // Handle successful deletion (e.g., update state or UI)
      console.log('Item deleted successfully');
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Error deleting item:', error.message);
    }
  }
  return (
    <div className='bg-slate-500 text-black w-[300px] mx-auto p-4 rounded-lg shadow-2xl shadow-red-700'>
      <h1>Title: {title}</h1>
      <p>Discription: {discription}</p>
      <p>Status: {status}</p>
      <div className='flex justify-between mt-3'>
        {/* <button className='bg-blue-400 py-1 px-4 rounded-md hover:bg-yellow-200'><FaEdit/></button> */}
        {/* <EditTask/> */}
        <button onClick={()=>handleDelete(id)} className='bg-red-600 py-1 px-4 rounded-md hover:bg-red-400'><MdDelete/></button>
      </div>
    </div>
  )
}

export default Card
