
export function Sidebar({handlePageNavigation,projects}){
    return (
        <aside className='bg-white w-4/12 rounded-tr-2xl pt-24 px-12 flex flex-col justify-start gap-12'>
        <h2 className='text-3xl text-gray-600 font-bold uppercase'>your projects</h2>
        <button className='bg-gray-300 text-gray-600 text-xl border-none rounded px-4 py-2 mr-auto hover:bg-gray-500 hover:text-white cursor-pointer capitalize' onClick={()=>handlePageNavigation('addProjectPage')}><span className="material-symbols-outlined">
        add</span> add project</button>
        <ul className='flex flex-col gap-4 text-xl text-gray-400'>
            {projects.map((project)=>{
                return (
                    <li 
                    key={project.id}
                    className='hover:text-gray-600 hover:bg-gray-300 rounded'
                    >{project.title}</li>
                );
            })}
        </ul>
      </aside>
    );
}