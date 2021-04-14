import DB from './tiny-idb';
import { v4 as uuidv4 } from 'uuid';

const uid = uuidv4()
const getStore = async () => {
  let db = await DB.openDB("TodosDatabase", 1);
  const todosStore = await DB.transaction(
    db,
    ["todo"],
    "readwrite"
  ).getStore("todo");

  return todosStore;
}

// set up the database when is called
export const setUpDatabase = async () => {
  "use strict";
  return await DB.createDB("TodosDatabase", 1, [
    {
      name: "todo",
      config: { keyPath: "id" },
    },
  ]);
};

// GET all todos
export const getAllTodos = async () => {
  await setUpDatabase();
  const todosStore = await getStore();

  let allTodos = await DB.getAllObjectData(todosStore);

  return allTodos;
};

// POST todo
export const addTodo = async text => {
  const todosStore = await getStore();

  const newTodosStore = await DB.addObjectData(todosStore, {
    id: uid,
    content: text,
  });

  return newTodosStore;
};

// PUT todo
export const updateTodo = async (textEdit, id) => {
  const todosStore = await getStore();

  const update = await DB.updateObjectData(todosStore, 'id', id, {
    id: id,
    content: textEdit,
  });

  return update;
};

// DELETE todo
export const deleteTodo = async id => {
  const todosStore = await getStore();

  const [, remaining] = await DB.deleteObjectData(
    todosStore,
    id
  );

  return remaining;
};