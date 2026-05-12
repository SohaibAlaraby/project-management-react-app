import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen pt-12 flex'>
      <aside className='bg-white w-1/4 rounded-tr-2xl pt-24 px-12 flex flex-col justify-start gap-12'>
        <h2 className='text-3xl text-gray-600 font-bold uppercase'>your projects</h2>
        <button className='bg-gray-300 text-gray-600 text-xl border-none rounded px-4 py-2 mr-auto hover:bg-gray-500 hover:text-white cursor-pointer capitalize'><span class="material-symbols-outlined">
        add</span> add project</button>
        <ul className='flex flex-col gap-4 text-xl text-gray-400'>
          <li className='hover:text-gray-600 hover:bg-gray-300 rounded'>Learn React</li>
          <li className='hover:text-gray-600 hover:bg-gray-300 rounded'>Learn React</li>
        </ul>
      </aside>
      <main className='flex justify-center w-full'>
        {/* <div id='init-page' className='flex flex-col items-center justify-center gap-8 my-auto'>
          <img  className='w-18' src="./logo.png" alt=" a board with some papers and a pen" />
          <h2 className='text-3xl text-white capitalize'>no projects selected</h2>
          <p className='text-xl text-gray-300'>Select a project or get started with a new one</p>
          <button className='text-xl bg-white text-gray-600 font-bold hover:bg-gray-600 hover:text-white px-4 py-2 rounded cursor-pointer'>Create new project</button>
        </div> */}
        {/* <div id='create-project' className='w-full pr-64 pl-32 my-auto'>
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
        </div> */}
        <div id='project-info-index' className='w-full pl-18 pr-64 py-12 flex flex-col gap-8'>
          <div id='project-index-info' className='flex flex-col gap-4 relative'>
            <h2 className='capitalize font-bold text-white text-4xl'>project title</h2>
            <time>dec 29, 2024</time>
            <pre>project description</pre>
            <button className='text-white  absolute top-0 right-0'>Delete</button>
          </div>
          <br />
          <div> 
            <h3>tasks</h3>
            <form>
              <label htmlFor="add-task-input">add task</label>
              <input type="text" className='add-task-input' />
              <button type='submit'>add task</button>
            </form>
            <ul>
              <li>
                <p>practice, practice, practice</p>
                <button>clear</button>
              </li>
              <li>
                <p>practice, practice, practice</p>
                <button>clear</button>
              </li>
            </ul>
          </div>
          
        </div>
      </main>
    </div>
  )
}

export default App
