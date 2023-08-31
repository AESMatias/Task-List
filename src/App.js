import './App.css';
import Form1 from './components/Form1';
import "./styles/Form1.css";
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DivListTodos } from './components/DivListTodos'

function App() {

  const [countTask, setcountTask] = useState(0);
  const [newTask, setNewTask] = useState([
    {
      id: null,
      title: null,
      description: null,
      completedstatus: false
    }
  ]);

  // local Storage down bellow
  useEffect(() => {
    localStorage.setItem('TaskApp', JSON.stringify(newTask));
    console.log('setted with ' + newTask);
  }, [newTask]);


  useEffect(() => {

    console.log("received: " + JSON.parse(localStorage.getItem('TaskApp')));
  }, [])


  const setcountTaskFunction = () => {
    setcountTask(countTask + 1);
    console.log('Contador status: ' + countTask);
  };

  const addTaskRefTitle = useRef();
  const addTaskRefDescription = useRef();

  const addTask = () => {

    const taskitemTitle = addTaskRefTitle.current.value;
    const taskitemDescription = addTaskRefDescription.current.value;
    if (taskitemTitle != null
      && taskitemTitle != undefined
      && taskitemTitle != ""
      && taskitemDescription != ""
      && taskitemDescription != undefined
    ) {
      setcountTaskFunction();
      setNewTask(
        (prevStatusTask) => {
          return [...prevStatusTask, {
            id: uuidv4(),
            title: taskitemTitle,
            description: taskitemDescription,
            completedstatus: false
          }]
        }
      );
    }
    addTaskRefDescription.current.value = ('');
    addTaskRefTitle.current.value = ('');
  };

  const removeAllTask = () => {
    setcountTask(0); // without the zero, drops an error
    addTaskRefDescription.current.value = ('');
    addTaskRefTitle.current.value = ('');
    setNewTask(() => {
      return [{
        id: null,
        title: null,
        description: null,
        completedstatus: false
      }]
    }
    );

  };

  return (
    <div className="App">
      <div className="div1">
        <Form1
          removealltask={removeAllTask}
          addtask={addTask}
          addtaskrefdescription={addTaskRefDescription}
          counttask={countTask}
          addtaskreftitle={addTaskRefTitle}
        />
        <DivListTodos indexTask={countTask} downtaskitem={newTask} />
        <a href='https://github.com/AESMatias'>
          GitHub
        </a>

      </div>

    </div>
  );
}

export default App;
