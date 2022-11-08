import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
      }
  return (
    <div>
        
        <input type="checkbox" defaultChecked={todo.isComplete} onClick={handleTodoClick} />
         {todo.name} 
           
      
    </div>
  )
}
