import "./App.css";
import { useState } from "react";
import Form from "./components/Form/form";
import TodoList from "./components/TodoList/todolist";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if(newTodo!==""){
      setTodos([...todos, newTodo]);
    }
    
  };

  const handleTodo = (item, i) => {
    const newTodo = todos.filter((item, index) => i !== index);
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Gerenciador de tarefas</h1>
        <Form addTodo={addTodo} />
        <TodoList todos={todos} handleTodo={handleTodo}/>
      </div>
    </div>
  );
}

export default App;