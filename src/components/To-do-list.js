import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoList () {

    const [todos, setTodos] = useState([]);

    const addTask = task => {

        if (!task.text) {
            return
        }

        const newTodos = [task,...todos];
        setTodos(newTodos);
    }

    const removeTask = id => {
        let updateTasks = [...todos].filter(task => task.id !== id)
        setTodos(updateTasks)
    }

    const completeTask = id => {

        let updateTasks = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updateTasks)
    }


    return (

        <div>

            <TodoForm addTask={addTask}></TodoForm>
            <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
            <div>
               
            </div>
        </div>
        
    );
}