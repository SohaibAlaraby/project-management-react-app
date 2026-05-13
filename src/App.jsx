import { useState, useReducer, useRef } from 'react'
import viteLogo from './assets/vite.svg'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'
import { InitPage } from "./components/InitPage";
import { CreateProjectPage } from "./components/CreateProjectPage";
import { ProjectInfoPage } from "./components/ProjectInfoPage";
import './App.css'
function projectsReducer(state,action){
  switch(action.type){
    case 'add-project':{
      const newProject= {
        id:action.id,
        title:action.title,
        dueDate:action.dueDate,
        description:action.description,
        tasks:[]
      }
      return [...state,newProject];
    }
    case 'remove-project':{

    }
    case 'add-task':{

    }
    case 'remove-task':{

    }
  }
  throw Error('Unknown action.');
}
function App() {
  const [page,setPage]=useState('initPage');//initPage, addProjectPage, projectInfoPage
  const [projects, projectsDispatcher] = useReducer(projectsReducer, []);
  const NumOfProjects = useRef(0);
  function navigatePages(pageName){
    setPage(() => pageName);
  }
  function addNewProject({title,description,dueDate}){
    projectsDispatcher({
      type:'add-project',
      title,
      description,
      dueDate,
      id: NumOfProjects.current++
    });
  }
  return (
    <div className='min-h-screen pt-12 flex'>
      <Sidebar 
      handlePageNavigation={navigatePages}
      projects={projects}
      />
      <Main>
        {page==='initPage' && <InitPage handlePageNavigation={navigatePages} />}
        {page==='addProjectPage' && <CreateProjectPage handlePageNavigation={navigatePages} addNewProject={addNewProject}/>}
        {page==='projectInfoPage' && <ProjectInfoPage/>}
      </Main>
    </div>
  )
}

export default App
