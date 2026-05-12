import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function projectsReducer(state,action){
  switch(action.type){
    case 'add-project':{

    }
    case 'remove-project':{

    }
    case 'add-task':{

    }
    case 'remove-task':{

    }
  }
}
const initialProject = [{
  title: '',
  dueDate:'',
  description: '',
  tasks:[]
}]
function App() {
  const [page,setPage]=useState('initPage');//initPage, addProjectpage, projectInfoPage
  const [projects, projectsDispatcher] = useReducer(projectsReducer, initialProject);

  return (
    <div className='min-h-screen pt-12 flex'>
      <aside className='bg-white w-4/12 rounded-tr-2xl pt-24 px-12 flex flex-col justify-start gap-12'>
        <h2 className='text-3xl text-gray-600 font-bold uppercase'>your projects</h2>
        <button className='bg-gray-300 text-gray-600 text-xl border-none rounded px-4 py-2 mr-auto hover:bg-gray-500 hover:text-white cursor-pointer capitalize'><span class="material-symbols-outlined">
        add</span> add project</button>
        <ul className='flex flex-col gap-4 text-xl text-gray-400'>
          <li className='hover:text-gray-600 hover:bg-gray-300 rounded'>Learn React</li>
          <li className='hover:text-gray-600 hover:bg-gray-300 rounded'>Learn React</li>
        </ul>
      </aside>
      <main className='flex justify-center w-full'>
        {page==='initPage' && <div id='init-page' className='flex flex-col items-center justify-center gap-8 my-auto'>
          <img  className='w-18' src="./logo.png" alt=" a board with some papers and a pen" />
          <h2 className='text-3xl text-white capitalize'>no projects selected</h2>
          <p className='text-xl text-gray-300'>Select a project or get started with a new one</p>
          <button className='text-xl bg-white text-gray-600 font-bold hover:bg-gray-600 hover:text-white px-4 py-2 rounded cursor-pointer'>Create new project</button>
        </div>}
        {page==='addProjectpage' && <div id='create-project' className='w-full pr-64 pl-32 my-auto'>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-row-reverse gap-2'>
              <button type='submit' className='bg-white text-gray-600 font-bold rounded px-4 py-2 capitalize cursor-pointer hover:bg-gray-200 '>save</button>
              <button className='text-white font-bold rounded px-4 py-2 capitalize cursor-pointer hover:bg-gray-800'>cancel</button>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="project-title" className='uppercase text-gray-300 text-lg'>title</label>
              <input type="text" id="project-title" className='bg-yellow-50 px-1 py-2 text-xl rounded text-gray-600' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="project-discription" className='uppercase text-gray-300 text-lg '>discription</label>
              <textarea 
              name="project-discription" id="project-discription" 
              rows="4" 
              cols="50"
              className='bg-yellow-50 px-1 py-2 text-xl rounded text-gray-600'></textarea>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="due-date" className='uppercase text-gray-300 text-lg'>due date</label>
              <input 
              type="date" 
              id="due-date"
               className='bg-yellow-50 px-1 py-2 text-xl rounded text-gray-600 [&::-webkit-calendar-picker-indicator]:invert'
               />
            </div>
          </form>
        </div>}
        {page==='projectInfoPage' && <div id='project-info-index' className='w-full pl-18 pr-64 py-12 flex flex-col gap-8'>
          <div id='project-index-info' className='flex flex-col gap-4 relative'>
            <h2 className='capitalize font-bold text-white text-4xl'>project title</h2>
            <time className='capitalize text-gray-300 text-lg'>dec 29, 2024</time>
            <pre className='text-gray-100 text-lg'>project description</pre>
            <button className='text-white absolute top-0 right-0 hover:bg-gray-600 py-2 px-4 rounded cursor-pointer'>Delete</button>
          </div>
          <hr className='text-gray-300'/>
          <div className='flex flex-col gap-8'> 
            <h3 className='text-3xl text-white capitalize font-bold'>tasks</h3>
            <form className='flex gap-4'>
              <label htmlFor="add-task-input" className='hidden'>add task</label>
              <input type="text" id='add-task-input' className='bg-yellow-50 w-8/12 px-1 py-2 rounded'/>
              <button type='submit' className='capitalize text-white hover:bg-gray-600 py-2 px-4 rounded cursor-pointer'>add task</button>
            </form>
            <ul className='w-full bg-gray-800 text-lg text-white px-3 py-6 flex flex-col gap-4'>
              <li className='flex justify-between'>
                <p>practice, practice, practice</p>
                <button className='capitalize text-white hover:bg-gray-600 py-1 px-2 rounded cursor-pointer'>clear</button>
              </li>
              <li className='flex justify-between'>
                <p>practice, practice, practice</p>
                <button className='capitalize text-white  hover:bg-gray-600 py-1 px-2 rounded cursor-pointer'>clear</button>
              </li>
            </ul>
          </div>
          
        </div>}
      </main>
    </div>
  )
}

export default App
