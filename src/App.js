import "rsuite/dist/rsuite.min.css";
import "./styles.css";

import { Checkbox, Input, InputGroup, SearchIcon } from "rsuite";
import CloseOutlineIcon from "@rsuite/icons/CloseOutline";

import { useState } from "react";
import { TaskItem } from "./Components/TaskItem";

export default function App() {
  const [taskList, setTaskList] = useState([
    { name: "helloTask", completed: false }
  ]);
  const [input, setInput] = useState("");

  const addItem = () => {
    let newTask = { name: input, completed: false };
    setTaskList([...taskList, newTask]);
  };

  const delLast = () => {
    let lastTaskList = [...taskList];
    lastTaskList.pop();
    setTaskList(lastTaskList);
  };

  const delItem = (taskToDel) => {
    let newT = [...taskList];
    let index;
    // newT.filter(task => task.name !== taskToDel.name);
    for (let i = 0; i < newT.length; i++) {
      if (newT[i].name === taskToDel.name) {
        index = i;
      }
    }

    newT.splice(index, 1);
    // console.log(newT, taskToDel);
    setTaskList([...newT]);
  };

  const completedChange = (checkValue, taskToUpdate) => {
    let newT = [...taskList];

    for (let i = 0; i < newT.length; i++) {
      if (newT[i].name === taskToUpdate.name) {
        newT[i].completed = checkValue;
      }
    }
    setTaskList([...newT]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="InputContainer">
        <InputGroup>
          <Input
            placeholder="Add your task here"
            value={input}
            onChange={(value) => {
              setInput(value);
            }}
          />
          <InputGroup.Button
            onClick={() => {
              addItem();
              setInput("");
            }}
          >
            Add
          </InputGroup.Button>
          <InputGroup.Button
            className="delLast"
            onClick={() => {
              delLast();
            }}
            appearance="primary"
            color="orange"
          >
            Del
          </InputGroup.Button>
        </InputGroup>
        {/* <Input placeholder="Add your task here" /> */}
      </div>

      <div className="taskContainer">
        {taskList.map((task) => {
          return (
            <TaskItem
              task={task}
              delItem={delItem}
              completedChange={completedChange}
            />
          );
        })}
      </div>
    </div>
  );
}
