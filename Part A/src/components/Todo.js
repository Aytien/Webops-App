import React,{useState} from 'react'
import TodoForm  from './TodoForm'
import TodoList from './TodoList'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiFillCheckSquare} from 'react-icons/ai'

function Todo({todos,completeTodo,remove,editJob}) {
  const[edit,setEdit]= useState({
      id:null,
      value:''

  });



  const change = value =>
  {
      editJob(edit.id,value)
      setEdit(
          {
              id:null,
              value: ''
          })
  }

  if(edit.id)
  {
    return<TodoForm edit={edit} onSubmit={change}/>
  }


  return todos.map((todo,index)=>(
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
       key={index}>

            <div key={todo.id} 
                onClick={()=>completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
                <AiFillCheckSquare
                onClick={()=>completeTodo(todo.id)}
                />
                <AiOutlineClose
                onClick={() => remove(todo.id)}
                />
                <AiOutlineEdit
                onClick={()=>setEdit({id:todo.id,value:todo.text})}
                />
            </div>
       </div>
  ))
  
}

export default Todo
