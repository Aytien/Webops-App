import React,{useState,useEffect,useRef} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import Search from './Search'



function TodoList() 
{
  const [todos,setTodos] = useState([]);
  
  const[search,setSearch]= useState('0');
  const[sertext,setSertext]=useState('search')
  const[seres,setSeres]= useState(todos)

    const searchtoggle = () =>
    {
      
      if(search == '0') setSearch('1')
      else setSearch('0')


      if(sertext=='search') setSertext('show all')
      else setSertext('search')

    }

    const add = todo =>
    {
      if(!todo.text || /^\s*$/.test(todo.text))
      {
          return
      }
      
      const newTodos = [todo,...todos];

      setTodos(newTodos);
      setSeres(newTodos)
    };

    const editJob = (todoID,newVal)=>
    {
        if(!newVal.text || /^\s*$/.test(newVal.text))
      {
          return
      }
      var newtodo= todos.map(item => (item.id === todoID ? newVal:item))

      setTodos(newtodo);
      setSeres(newtodo)

        if(document.getElementById('lmao'))
        {
          var val = document.getElementById('lmao').value
          var newtodos = []
          let x =val.length
          for(let i=0;i<newtodo.length;i++)
          {
            if(newtodo[i].text.substring(0,x)==val)
            {
              newtodos=[(newtodo[i]),...newtodos]
            }
          }
    
          setSeres(newtodos)
        }
    
    }

    const remove = id =>
    {
        const removeArr = [...todos].filter(todo=>todo.id !== id)

        setTodos(removeArr);
        setSeres(removeArr)
        if(document.getElementById('lmao'))
        {
          var val = document.getElementById('lmao').value
          var newtodos = []
          let x =val.length
          for(let i=0;i<removeArr.length;i++)
          {
            if(removeArr[i].text.substring(0,x)==val)
            {
              newtodos=[(removeArr[i]),...newtodos]
            }
          }
    
          setSeres(newtodos)
        }
    } 

    const completeTodo = id =>
    {
        let updatedTodos = todos.map(todo =>
            {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }

            return todo
        })
        setTodos(updatedTodos);
    }
  return (
    <div>
        <h1>List of Jobs for today</h1>
        <TodoForm onSubmit={add}/>

            <button className='todo-button' onClick={searchtoggle}>
               {sertext}
            </button>
            
        {(search === '1' ?( <Search todos={todos} completeTodo={completeTodo}
        remove={remove}
        editJob={editJob}
        seres={seres}
        setSeres={setSeres}/>)
        :
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        remove={remove}
        editJob={editJob}
        />
        )}
    </div>


  )
}

export default TodoList