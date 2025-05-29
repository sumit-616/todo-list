import React from 'react'
import { useState } from "react";
import FilterButton from "./FilterButton";
import Form from "./Form";
import Todo from "./Todo";
import useLocalStorage from "../lib/useLocalStorage";
import { toast } from 'sonner';
import { motion } from "framer-motion";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

function ManageTodo() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [completedAll, setCompletedAll] = useState(false);
  const [filter, setFilter] = useState("All");
  const [currentlyEditing, setCurrentlyEditing] = useState("");

  function addTodo(todo) {
    try {
      const isDuplicate = todos.some((t) => t.text.trim().toLowerCase() === todo.text.trim().toLowerCase());

      if (isDuplicate) {
        toast("Task already exists", {
          description: "Duplicate tasks are not allowed",
          className: "!bg-orange-400 !text-gray-800",
          duration: 3000,
        });
        return;
      }

      setTodos([...todos, todo]);
      toast("Task Added successfully", {
        description: "Added successfully",
        className: "!bg-green-400 !text-gray-800",
        duration: 3000,
      });
    } catch (error) {
      toast("Error adding task", {
        description: error.message,
        className: "!bg-red-400 !text-red-800",
        duration: 3000,
      });
    }
  }


  function deleteTodo(id) {
    try {
      setTodos(todos.filter((todo) => todo.id !== id));
      toast("Task deleted", {
        description: "Task deleted successfully",
        className: "!bg-red-400 !text-gray-800",
        duration: 3000,
      });
    } catch (error) {
      toast("Error deleting task", {
        description: error.message,
        className: "!bg-red-400 !text-red-800",
        duration: 3000,
      });
    }
  }

  function deleteAll() {
    try {
      setTodos([]);
      toast("All tasks deleted", {
        description: "All tasks have been deleted",
        className: "!bg-red-400 !text-gray-800",
        duration: 3000,
      });
    } catch (error) {
      toast("Error deleting tasks", {
        description: error.message,
        className: "!bg-red-400 !text-red-800",
        duration: 3000,
      });
    }
  }

  function toggleTodo(id) {
    try {
      setTodos(todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
      toast("Task updated", {
        description: "Task completion status changed",
        className: "!bg-yellow-400 !text-gray-800",
        duration: 3000,
      });
    } catch (error) {
      toast("Error toggling task", {
        description: error.message,
        className: "!bg-red-400 !text-red-800",
        duration: 3000,
      });
    }
  }

  function toggleAll() {
    try {
      setTodos(todos.map((todo) => ({ ...todo, completed: !todo.completed })));
      toast("All tasks updated", {
        description: "All task completion statuses have been toggled",
        className: "!bg-yellow-400 !text-gray-800",
        duration: 3000,
      });
    } catch (error) {
      toast("Error toggling tasks", {
        description: error.message,
        className: "!bg-red-400 !text-red-800",
        duration: 3000,
      });
    }
  }

  function updateTodo(text, id) {
    try {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo)));
      toast("Task updated", {
        description: `Task updated to: ${text}`,
        className: "!bg-blue-400 !text-gray-800",
        duration: 3000,
      });
    } catch (error) {
      toast("Error updating task", {
        description: error.message,
        className: "!bg-red-400 !text-red-800",
        duration: 3000,
      });
    }
  }

  function completeAll() {
    try {
      setTodos(todos.map((todo) => ({ ...todo, completed: !completedAll })));
      setCompletedAll(!completedAll);
      toast("All tasks completed", {
        description: `All tasks have been marked as ${completedAll ? "not completed" : "completed"}`,
        className: "!bg-green-400 !text-gray-800",
        duration: 3000,
      });
    } catch (error) {
      toast("Error completing all tasks", {
        description: error.message,
        className: "!bg-red-400 !text-red-800",
        duration: 3000,
      });
    }
  }

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      name={name}
      key={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (

    <div className="relative app-container bg-gradient-to-br from-black via-gray-900 to-black flex h-screen overflow-hidden">
      {/* Static Bubbles (No Glow) */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-500 opacity-10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-500 opacity-10 rounded-full blur-2xl" />

      <div className="m-auto bg-black bg-opacity-60 backdrop-blur-lg border border-yellow-500/20 p-6 rounded-2xl text-white w-[90%] max-w-md shadow-xl shadow-yellow-900/20">
        <h2 className="text-yellow-400 text-xl font-bold mb-4 text-center tracking-wide">
          TO DO LIST
        </h2>

        <Form addTodo={addTodo} />

        <ul className="todos max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-transparent pr-2 mt-4 space-y-3">
          {todos.filter(FILTER_MAP[filter]).map(({ text, id, completed }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Todo
                text={text}
                id={id}
                completed={completed}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
                isEditing={id === currentlyEditing}
                setCurrentlyEditing={setCurrentlyEditing}
              />
            </motion.li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex justify-between mt-5 gap-2">
          <button
            onClick={deleteAll}
            className="bg-yellow-700 hover:bg-yellow-600 text-black font-medium py-2 px-3 rounded-lg w-full transition duration-300"
          >
            Delete All
          </button>
          <button
            onClick={toggleAll}
            className="bg-yellow-700 hover:bg-yellow-600 text-black font-medium py-2 px-3 rounded-lg w-full transition duration-300"
          >
            Toggle All
          </button>
          <button
            onClick={completeAll}
            className="bg-yellow-700 hover:bg-yellow-600 text-black font-medium py-2 px-3 rounded-lg w-full transition duration-300"
          >
            Complete All
          </button>
        </div>

        {/* Filter Buttons */}
        <div className={`mt-5 flex justify-center gap-2 ${!todos.length && 'hidden'}`}>
          {filterList}
        </div>
      </div>
    </div>

  );
}

export default ManageTodo;
