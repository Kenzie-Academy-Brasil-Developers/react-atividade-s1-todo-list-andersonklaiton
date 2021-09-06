import { useState } from "react";
const Form = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  const limpaInput = () => {
    addTodo(userInput);
    setUserInput("");
  };

  return (
    <div className="addItem">
      <>
        <input className="input" type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
        <button className="bntInput" onClick={limpaInput}>Listar</button>
      </>
    </div>
  );
};

export default Form;