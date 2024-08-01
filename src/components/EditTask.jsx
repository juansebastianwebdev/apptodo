/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
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

import { useCallback, useEffect, useState } from "react";

export const EditTask = ({ tarea, tareas, setTareas }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [tituloEditado, setTituloEditado] = useState("");
  const [descripcionEditada, setDescripcionEditada] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (tarea) {
      setTituloEditado(tarea.titulo);
      setDescripcionEditada(tarea.descripcion);
    }
  }, [tarea]);

  useEffect(() => {
    console.log(
      "formValid updated:",
      tituloEditado.trim() !== "" && descripcionEditada.trim() !== ""
    );
    setFormValid(
      tituloEditado.trim() !== "" && descripcionEditada.trim() !== ""
    );
  }, [tituloEditado, descripcionEditada]);

  const handleEdit = useCallback(
    (tareaId) => {
      if (formValid) {
        setTareas(
          tareas.map((tarea) =>
            tarea.id === tareaId
              ? {
                  ...tarea,
                  titulo: tituloEditado,
                  descripcion: descripcionEditada,
                }
              : tarea
          )
        );
        onOpenChange();
      }
    },
    [formValid, tareas, tituloEditado, descripcionEditada, onOpenChange]
  );

  return (
    <>
      <Button isIconOnly onPress={onOpen} className="h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
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
                  onChange={(e) => setTituloEditado(e.target.value)}
                  value={tituloEditado}
                  autoFocus
                  endContent={<TaskIcon />}
                  placeholder="Enter your task"
                  variant="bordered"
                />
                <Input
                  onChange={(e) => setDescripcionEditada(e.target.value)}
                  value={descripcionEditada}
                  endContent={<TaskIcon className="" />}
                  placeholder="Description of your task"
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
                  onPress={() => handleEdit(tarea.id)}
                  disabled={!formValid}
                >
                  Edit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
