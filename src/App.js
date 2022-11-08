import TodoList from "./TodoList";
import {useState, useRef, useEffect} from 'react'

function App() {
  const [todos, setTodos] = useState([])
  var todoText = useRef()
  const LOCAL_STORAGE_KEY = 'todoApp.todos'
  
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (storedTodos) setTodos(storedTodos)
    }, [])


  function HandleAddTodo(e){     
    if(todoText.current.value)
    var a = {name : todoText.current.value, isComplete: false, id: todos.length + 1 }

    setTodos(todo => {return [...todo, a]})
  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  useEffect(()=>{   
   localStorage.setItem("todoApps.todos", JSON.stringify(todos))
  },[todos])

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  } 
  
  
  return (    
    <>
      <TodoList  todos={todos} toggleTodo={toggleTodo}/>   
      <input ref={todoText} type="text" />
      <button onClick={HandleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Todo</button>
      <div> {todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
