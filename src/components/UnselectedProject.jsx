import noProjectImage from '../assets/no-projects.png'
import Button from './Button.jsx'

export default function UnselectedProject({ onStartAddProject }) {

    return (
        <div className="mt-24 text-center w-2/3">

            <img src={noProjectImage} alt="Image of an empty task list" className='w-16 h-16 object-contain mx-auto' />
            <h2 className='text-xl text-stone-500 font-bold my-4'> No Project Selected</h2>
            <p className='mb-4 text-stone-400'> Select a project or get started with a new project!</p>
            <p className='mt-8 '>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>

    );
}