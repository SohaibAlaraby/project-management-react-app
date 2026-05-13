import {useState} from 'react';
const initialForm = {
    title: "",
    description:"",
    dueDate:""
};
export function CreateProjectPage({handlePageNavigation,addNewProject}) {
    const [form, setform] = useState(initialForm);//must be reinitalized when save button is pressed

    function handleChange(event){
        const {name,value} = event.target;
        setform((prevForm)=>{
            return {
                ...prevForm,
                [name]:value
            }
        });
    }

    function handleSave(form){
        addNewProject(form);
        setform(()=> initialForm); //initialize state when save
    }
    function handleCancel(pageName){
        setform(()=> initialForm); //initialize state when cancel
        handlePageNavigation(pageName);
        
    }
    return (
        <div id='create-project' className='w-full pr-64 pl-32 my-auto'>
          <form 
          className='flex flex-col gap-4' 
          onSubmit={
                (e)=>{
                e.preventDefault();
                handleSave(form);
                }
            }>
            <div className='flex flex-row-reverse gap-2'>
              <button type='submit' className='bg-white text-gray-600 font-bold rounded px-4 py-2 capitalize cursor-pointer hover:bg-gray-200 '>save</button>
              <button type="button" className='text-white font-bold rounded px-4 py-2 capitalize cursor-pointer hover:bg-gray-800' onClick={()=> handleCancel('initPage')}>cancel</button>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="project-title" className='uppercase text-gray-300 text-lg'>title</label>
              <input 
              type="text" 
              id="title" 
              className='bg-yellow-50 px-1 py-2 text-xl rounded text-gray-600'
              onChange={handleChange} 
              name='title'
              value={form['title']} 
              required/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="project-discription" className='uppercase text-gray-300 text-lg '>discription</label>
              <textarea 
              id="description" 
              rows="4" 
              cols="50"
              className='bg-yellow-50 px-1 py-2 text-xl rounded text-gray-600' 
              name='description' 
              onChange={handleChange}
              value={form['description']}
              required></textarea>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="due-date" className='uppercase text-gray-300 text-lg'>due date</label>
              <input 
              type="date" 
              id="dueDate"
              className='bg-yellow-50 px-1 py-2 text-xl rounded text-gray-600 [&::-webkit-calendar-picker-indicator]:invert'
              name='dueDate'
              onChange={handleChange}
              value={form['dueDate']}
              required/>
            </div>
          </form>
        </div>
    );
}