import React, {useState} from 'react'

function TaskManager(){
     const [task, setTasks]=useState([]);
    const[newTask, setNewTask]=useState("");

    function handleInputChange(event){
         setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
    } 
    function deleteTask(index){
         const updatedTasks=task.filter((_, i)=>i !== index);
         setTasks(updatedTasks);
    }
    function moveTaskUp(index){
         if(index>0){
            const updatedTasks=[...task];
            [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]

            setTasks(updatedTasks);
         }
    }
    function moveTaskDown(index){
        if(index<task.length-1){
            const updatedTasks=[...task];
            [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]

            setTasks(updatedTasks);
         }

    }
    
    return(<div className="todo-list">

        <h1>TO DO</h1>
        <h2>change after github</h2>
        <div>
            <input
                type="text"
                placeholder="Enter a task.... "
                value={newTask}
                onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
        </div>
        <ol>
            {task.map((task, index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button
                    className="delete-button"
                    onClick={()=>deleteTask(index)}> 
                    Delete    
                </button>  

                <button
                    className="move-button"
                    onClick={()=>moveTaskUp(index)}> 
                    up   
                </button> 

                <button
                    className="move-button"
                    onClick={()=>moveTaskDown(index)}> 
                    down  
                </button>   
            </li>
            )}
        </ol>

    </div>);
}

export default TaskManager