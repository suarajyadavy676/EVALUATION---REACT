import React from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { FaEdit } from 'react-icons/fa';

function EditTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  async function editTask(){
     onOpen()
  }
  return (
    <>
      <div className="text-center my-5">
        {/* <button
          onClick={onOpen}
          className=" text-lg hover:bg-red-400 bg-blue-200 p-2 rounded-md"
        >
          Edit Task
        </button> */}
        <button  onClick={editTask} className='bg-blue-400 py-1 px-4 rounded-md hover:bg-yellow-400'><FaEdit/></button>
      </div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your task</ModalHeader>
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
  )
}

export default EditTask
