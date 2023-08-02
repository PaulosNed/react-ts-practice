import React, { useState } from "react";
import { Task } from "../models/Task";
import { AiFillEdit, AiFillDelete, AiFillCheckCircle, AiFillBackward } from "react-icons/ai";

interface AllTasks extends Task {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}

const TaskItem: React.FC<AllTasks> = ({ id, description, isDone, tasks, setTasks}) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [edited, setEdited] = useState<string>(description)


  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && edited) {
      // Call your function here, passing the inputValue if needed
      // For example, you can call a function named "handleEnterPressed"
      handleEnterPressed();
    }
  };

  const handleEnterPressed = () => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          description: edited,
        };
      }
      return task;
    });
  
    setTasks(updatedTasks);
    setEdit(false)
  }


  const deleteTask = () => {
    const updated: Task[] = tasks.filter((task: Task) => task.id !== id)
    setTasks(updated)
  }

  const completeTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    });
  
    setTasks(updatedTasks);
  };
  
  return (
    <div className="w-full bg-yellow-300 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          {edit && <input type="text" value={edited} className="px-2 py-1" onChange={(e) => setEdited(e.target.value)} onKeyPress={handleKeyPress}/>}
          {!edit && <div className="font-medium">{description}</div>}
        </div>
        <div className="flex gap-2 items-center">
          <span onClick={() => setEdit((prev) => !prev)}>
            <AiFillEdit />
          </span>
          <span onClick={deleteTask}>
            <AiFillDelete />
          </span>
          {!isDone && <span onClick={completeTask}>
            <AiFillCheckCircle />
          </span>}
          {isDone && <span onClick={completeTask}>
            <AiFillBackward />
          </span>}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
