export function ProjectInfoPage(){
    return (
        <div id='project-info-index' className='w-full pl-18 pr-64 py-12 flex flex-col gap-8'>
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
        </div>
    );
}