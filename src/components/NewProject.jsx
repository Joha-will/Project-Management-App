import { useRef } from 'react';
import Input from "./Input.jsx"
import Modal from "./Modal.jsx"

export default function NewProject({ onAdd, onCancel }) {

    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {

        const newProject = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
            id: Math.random(),
        }

        if ( newProject.title.trim() === '' || newProject.description.trim() === '' || newProject.dueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd( newProject )
    }
    return (

        <>
            <Modal ref={ modal } buttonLabel='Close'>
                <h2 className='text-xl text-stone-700 font-bold my-4'> Invalid input </h2>
                <p className='mb-4 text-stone-600'> Please ensure that the input fields are filled out!</p>
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}> Cancel </button>
                    </li>
                    <li>
                        <button onClick={handleSave} className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"> Save </button>
                    </li>
                </menu>

                <div>

                    <Input type='text' ref={title} label='Title'/>
                    <Input ref={description} label='Description'textarea />
                    <Input type='date' ref={dueDate} label='Due Date' />

                </div>
            </div>
        </>


    )
};