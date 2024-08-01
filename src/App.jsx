import { Tareas } from "./components/Tareas";
import { AddTask } from "./components/AddTask";
import "./App.css";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: "Tarea 1", descripcion: "Descripcion 1" },
  ]);
  return (
    <>
      <main className="fuente flex flex-col justify-center items-center gap-2">
        <h1 className="text-cyan-500 text-6xl font-extrabold mt-5 mb-10">
          ToDo List
        </h1>
        <AddTask tareas={tareas} setTareas={setTareas} />
        <Tareas tareas={tareas} setTareas={setTareas} />
      </main>
    </>
  );
}

export default App;
