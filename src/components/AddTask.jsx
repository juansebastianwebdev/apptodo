/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
} from "@nextui-org/react";
import { TaskIcon } from "./TaskIcon";
import "../App.css";

export const AddTask = ({ tareas, setTareas }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");

  const añadirTarea = () => {
    setTareas([
      ...tareas,
      {
        id: Math.floor(Math.random() * 100),
        titulo: nuevaTarea,
        descripcion: nuevaDescripcion,
        completada: false,
      },
    ]);
    onOpenChange();
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}  className="bg-cyan-600 text-white font-semibold">
        Add Task
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-teal-900 to-teal-900/10 backdrop-opacity-20",
        }}
        className="fuente"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Task
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  onChange={(e) => {
                    setNuevaTarea(e.target.value);
                  }}
                  autoFocus
                  endContent={<TaskIcon />}
                  placeholder="Enter your task"
                  type="text"
                  variant="bordered"
                />
                <Input
                  onChange={(e) => {
                    setNuevaDescripcion(e.target.value);
                  }}
                  endContent={<TaskIcon />}
                  placeholder="Description of your task"
                  type="text"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={añadirTarea}
                  disabled={!nuevaTarea.trim() || !nuevaDescripcion.trim()}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
