import React from 'react'
import { useState } from 'react'
import "./TodoList.css"

function TodoList() {
    const [tasks, setTasks] = useState(["eat", "sleep", "repeat"]);
    const [newTask, setNewTask] = useState("");

    

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {

        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]]     //this will swap two elements in array using destructuring 
            setTasks(updatedTasks); // Update the state with the modified array
        }
        else {
            alert("Already on Top!")
        }

    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }


    return (
        <>
            <div className='to-do-list'>

                <h1>To Do List</h1>
                <div className='inputs'>
                    <input
                        type="text"
                        placeholder='Enter a Task'
                        value={newTask}
                        onChange={handleInputChange}
                    />
                    <button
                        className="add-button"
                        onClick={addTask}
                    >
                        add
                    </button>

                </div>
                <ol>
                    {tasks.map((task, index) =>
                        <li
                            key={index}> <span className='text'>{task}</span>
                            <button className="delete-button"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>

                            <button className="move-button"
                                onClick={() => moveTaskUp(index)}>
                                move-Up
                            </button>

                            <button className="move-button"
                                onClick={() => moveTaskDown(index)}>
                                move-Down
                            </button>


                        </li>)}

                </ol>

            </div>
        </>
    )
}

export default TodoList
