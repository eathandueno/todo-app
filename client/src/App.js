import './App.css';
import {useState} from 'react';
function App() {
  let [taskList,setTaskList] = useState([]);
  function handleSubmit(event){
    event.preventDefault();
    const newTask = event.target.elements.task.value;
    setTaskList(taskList => [newTask, ...taskList]);
    event.target.reset();
  }
  function handleRemove(index) {
    setTaskList(taskList.filter((_, i) => i !== index));
  }

  const taskItems = taskList.map((task, index) => (
    <div key={index}>
      <button className='button' onClick={() => handleRemove(index)}>

      <p>{task}</p>
      </button>
    </div>
  ));
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="task">To do task</label>
          <input 
            type="text" 
            id="task"
            name="task"
            required
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <div>
        {taskItems}
      </div>
    </div>
  );
}

export default App;
