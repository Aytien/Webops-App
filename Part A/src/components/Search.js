import React,{useState,useEffect,useRef} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function Search({todos,completeTodo,remove,editJob,seres,setSeres})
{

    const handleInput = () =>
      {
        searchjob(document.getElementById('lmao').value);
  
      }

      const searchjob =(val)=>
      {
          var newtodos = []
        let x =val.length
        for(let i=0;i<todos.length;i++)
        {
          if(todos[i].text.substring(0,x)==val)
          {
            newtodos=[(todos[i]),...newtodos]
          }
        }
  
            setSeres(newtodos)
      }

    const inputRef = useRef(null)
    
    useEffect(()=>
      {
          inputRef.current.focus()
      })
    
      

    return (
        <div>   
            <input 
                id='lmao'
                type="text" 
                placeholder='Search a job' 
                name="text" 
                className='todo-input'
                onChange={handleInput}
                ref={inputRef}
                />
                <Todo
        todos={seres}
        completeTodo={completeTodo}
        remove={remove}
        editJob={editJob}
        />
        </div>
    
    
      )
}

export default Search
