import React, { useEffect, useReducer, useState } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Input,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
} from "@chakra-ui/react";

function reducer(state,action) {
  switch (action.type) {
    case "title": {
      // console.log(action)
      return {...state,[action.payload]:action.value};
    }
    case "discription":{

      return {...state,[action.payload]:action.value}
    }
    case "status":{
      return {...state,[action.payload]:action.value}
    }
  }
}
function AddTask() {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    discription: "",
    status: "",
  });
  // console.log(state)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data,setData]=useState({})
  // console.log(data)

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  function handleChange(e) {
    const {value,name} = e.target
    dispatch({
      type: name,
      payload:name,value
    });
  }
  function handleClick(e) {
    e.preventDefault();
    // console.log(state)
    setData(state)
    const postData=async()=>{
      try {
        let senddata = fetch('http://localhost:8080/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state),
        })
      } catch (error) {
        console.log(error)
        
      }
    }

    postData()
    onClose();
  }


  return (
    <>
      <div className="text-center my-5">
        <button
          onClick={onOpen}
          className=" text-lg hover:bg-red-400 bg-blue-200 p-2 rounded-md"
        >
          Add New Task
        </button>
      </div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl> */}
            <div>
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={state.title}
                onChange={handleChange}
                placeholder="Enter title"
                className="bg-slate-100 my-3"
              />
            </div>
            <div>
              <label>Discription: </label>
              <input
                type="text"
                value={state.discription}
                name="discription"
                onChange={handleChange}
                placeholder="Enter discription"
                className="bg-slate-100 my-3"
              />
            </div>
            <div>
              <label>Status: </label>
              <select
                name="status"
                onChange={handleChange}
                className="bg-slate-100 my-3"
              >
                <option value="">choose</option>
                <option value="pending">pending</option>
                <option value="completed">completed</option>
              </select>
            </div>
            <div className="text-center">
              <button
                onClick={handleClick}
                className="bg-green-300 rounded-md px-3 py-1"
              >
                Save
              </button>
            </div>

            {/* <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>{/* <button>Save</button> */}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddTask;
