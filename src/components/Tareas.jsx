/* eslint-disable react/prop-types */
import { EditTask } from "./EditTask";

export const Tareas = ({ tareas, setTareas }) => {
  const eliminar = (tareaId) => {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
  };

  const marcar = (tareaId) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === tareaId
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 bg-teal-700 rounded-xl w-[80%]">
        <h2 className="text-white font-semibold text-xl text-center">
          Las Tareas Son Las Siguentes:
        </h2>
        <ul className="font-semibol text-lg w-[95%]">
          {tareas &&
            tareas.map((element) => (
              <li
                key={element.id}
                className={`flex justify-around rounded-lg my-2 px-2 ${
                  element.completada ? "bg-green-500" : "bg-slate-400"
                }`}
              >
                <div className="w-[70%]">
                  <h1 className="flex items-center gap-1">
                    {element.titulo}
                    <EditTask
                      tarea={element}
                      tareas={tareas}
                      setTareas={setTareas}
                    />
                  </h1>
                  <p>{element.descripcion}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      marcar(element.id);
                    }}
                    className={`bg-green-500 rounded-lg h-8 w-12 flex items-center justify-center ${
                      element.completada ? "bg-white" : ""
                    }`}
                  >
                    {element.completada ? "" : ""}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      eliminar(element.id);
                    }}
                    className="bg-red-500 rounded-lg h-8 w-12 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
