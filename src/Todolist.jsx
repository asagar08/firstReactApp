import React, { useState } from 'react'

function Todolist() {
    let [todoList, setTodoList] = useState([])
    let saveTodoList = (event) =>{
        event.preventDefault();
        
        let toname = event.target.toname.value;
        
        if(!todoList.includes(toname)){
            let finalToDoList = [...todoList, toname];
            setTodoList(finalToDoList)
            
        }else{
            alert('name is aleady exist')
        }

        document.getElementsByTagName('input')[1].value = ''
    }

    let list = todoList.map((value, index)=>{
        console.log(value, 'value')
          return(
            <TodoListItem value={value} key={index} indexNumber={index}
            todoList = {todoList}
            setTodoList = {setTodoList}
            />
          )
    })
  return (
    <div className='todoBlock'>
        <h1>TODO List</h1>
        <form  onSubmit={saveTodoList}>
            <input type='text' name='toname' required/>
            <button>Save</button>
        </form>

        <div className="outerDiv">
            <ul>
                {list}
            </ul>
        </div>
    </div>
  )
}   
export default Todolist;

function TodoListItem({value, setTodoList,todoList, indexNumber}){
    let [status, setStatus] = useState(false)
    let deleteItem = () =>{
       let finalItems = todoList.filter((v,i)=> i != indexNumber)
       setTodoList(finalItems)
    }
    let checkStatus =() =>{
        setStatus(!status)
    }
    return(
            <li  onClick={checkStatus} className={(status) ? 'completedItem' : '' }> {indexNumber  + 1} {value} <span className='deleteIcon' onClick={deleteItem}>&times;</span></li>
    )
}





