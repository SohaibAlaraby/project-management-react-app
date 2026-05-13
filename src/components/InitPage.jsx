export function InitPage({handlePageNavigation}){
    return (
        <div id='init-page' className='flex flex-col items-center justify-center gap-8 my-auto'>
          <img  className='w-18' src="./logo.png" alt=" a board with some papers and a pen" />
          <h2 className='text-3xl text-white capitalize'>no projects selected</h2>
          <p className='text-xl text-gray-300'>Select a project or get started with a new one</p>
          <button className='text-xl bg-white text-gray-600 font-bold hover:bg-gray-600 hover:text-white px-4 py-2 rounded cursor-pointer' onClick={()=>handlePageNavigation('addProjectPage')}>Create new project</button>
        </div>
    );
}