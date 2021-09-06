import "./todoList.css"
const TodoList = ({ todos, handleTodo }) => {
    return (
      <div className="container_list">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <span className="todo">{todo}<button className="btnAdd" onClick={() => handleTodo(todo, index)}>Deletar</button></span>
              </li>
            ))}
          </ul>
      </div>
    );
  };
  
  export default TodoList;