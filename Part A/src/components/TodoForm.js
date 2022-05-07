import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) 
{
    const[input,setInput] = useState(props.edit ? props.edit.value : '');
    
    const inputRef = useRef(null)

    useEffect(()=>
    {
        inputRef.current.focus()
    })

    const handleInput = e =>
    {
        setInput(e.target.value);
    }

    const handleSubmit = e =>
    {
        e.preventDefault();

        props.onSubmit
        (
        {
            id: Math.floor(Math.random()*1000),
            text: input
        }
        );

        setInput('');    
    };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {
        props.edit ?(
            <>
            <input 
            type="text" 
            placeholder='Edit a job' 
            value={input}
            name="text" 
            className='todo-input'
            onChange={handleInput}
            ref={inputRef}
            />
            <button className='todo-button'>
                Edit Job
            </button>
            </>
            ):
            <>
            <input 
            type="text" 
            placeholder='Add a job' 
            value={input}
            name="text" 
            className='todo-input'
            onChange={handleInput}
            ref={inputRef}
            />
            <button className='todo-button'>
                Add Job
            </button>
            </>

        
        }
    </form>
  )
}

export default TodoForm