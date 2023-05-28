import React from "react";
import { useState } from "react";

export default function TodoForm (props) {

    const [input, setInput] =useState("");

    const handleChange = EVENT => {

        setInput(EVENT.target.value)
    }
    
    const handleSubmit = (EVENT) => {

        EVENT.preventDefault();
        props.addTask({
            id : Math.floor(Math.random() * 10000),
            text : input,
            isComplete : false
        })

        setInput('')
    }
    return (
        <form className="todo-form">
            <div className="list-header">
                <div className="heading"> My To-Do List</div>
                <div className="horizontal-rule"></div>
            </div>
            
            <input type="text" placeholder="Add a task" onChange={handleChange} className="todo-input" value={input} name="text"/>
            <button type="submit" onClick={handleSubmit} className="todo-btn">Add Task</button>
        </form>
    );
}