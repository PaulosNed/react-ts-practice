import React, { useEffect, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import { Task } from "./models/Task";
import InputField from "./components/InputField";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      description: "asdsadas",
      isDone: false,
    },
    {
      id: 2,
      description: "asdsadfgsdlkfnsdknfas",
      isDone: false,
    },
    {
      id: 3,
      description: "pppk;okolkdjgfjdhjg",
      isDone: true,
    },
  ]);

  let [todo, setTodo] = useState<string>("")

  useEffect(()=> {}, [tasks])

  return (
    <div className="min-h-screen bg-blue-500 p-10">
      <div className="flex flex-col gap-5">
        <p className="w-full text-center text-white font-bold text-3xl">
          Taskify
        </p>
        <div className="w-full">
          <InputField todo={todo} setTodo={setTodo} setTasks={setTasks}/>
        </div>
        <div className="flex gap-5">
          <div className="w-full bg-cyan-400">
            <div className="flex flex-col gap-4 p-4">
              <p className="w-full text-2xl text-white">Active Tasks</p>
            </div>
            <div className="p-2 flex flex-col gap-2">
              {tasks.map((todo: Task) => (
                !todo.isDone && <TaskItem key={todo.id} id={todo.id} description={todo.description} isDone={todo.isDone} tasks={tasks} setTasks={setTasks } />
              ))}
            </div>
          </div>
          <div className="w-full bg-red-400">
            <div className="flex flex-col gap-4 p-4">
              <p className="w-full text-2xl text-white">Completed Tasks</p>
            </div>
            <div className="p-2 flex flex-col gap-2">
              {tasks.map((todo: Task) => (
                todo.isDone && <TaskItem key={todo.id} description={todo.description} isDone={todo.isDone} id={todo.id} tasks={tasks} setTasks={setTasks } />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
