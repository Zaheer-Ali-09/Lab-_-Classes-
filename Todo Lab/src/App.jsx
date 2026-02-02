import { useState } from "react"

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task === "") return;

    setList([...list, task]);
    setTask("");
  }
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter YourTask" value={task} onChange={(e) => setTask(e.target.value)} />

      <button onClick={addTask}>Add Todo </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>

  )
}

export default App
