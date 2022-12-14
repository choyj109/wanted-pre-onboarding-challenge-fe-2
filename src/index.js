/**
 * @description Todo model
 */

class Todo {
  constructor({ id, content, isDone, category, tags }) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
    this.category = category;
    this.tags = tags;
  }
}

class TodoList {
  constructor() {
    this.todoLists = [];
  }

  createTodo({ id, content, isDone, category, tags }) {
    const todo = new Todo({ id, content, isDone, category, tags });
    this.todoLists.push(todo);
  }

  readTodo(id) {
    return this.todoLists.find((todoList) => todoList.id === id);
  }

  readAllTodo() {
    return this.todoLists;
  }

  updateTodo({ id, content, isDone, category, tags }) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);
    const index = this.todoLists.findIndex((todoList) => todoList.id === id);

    this.todoLists[index] = {
      ...todoList,
      content: content ?? todoList.content,
      isDone: isDone ?? todoList.isDone,
      category: category ?? todoList.category,
      tags: tags ?? todoList.tags,
    };
  }

  updateTags({ id, tagId, tagName }) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);
    const todoIndex = this.todoLists.findIndex(
      (todoList) => todoList.id === id
    );
    const tags = this.todoLists[todoIndex].tags;

    const newTags = tags.map((tag) =>
      tag.id === tagId ? { ...tag, tag: tagName } : tag
    );

    this.todoLists[todoIndex] = {
      ...todoList,
      tags: newTags,
    };
  }

  deleteTodo(id) {
    this.todoLists = this.todoLists.filter((todoList) => todoList.id !== id);
  }

  deleteAllTodo() {
    this.todoLists = [];
  }

  deleteTag({ id, tagId }) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);
    const todoIndex = this.todoLists.findIndex(
      (todoList) => todoList.id === id
    );
    const tags = this.todoLists[todoIndex].tags;

    this.todoLists[todoIndex] = {
      ...todoList,
      tags: tags.filter((tag) => tag.id !== tagId),
    };
  }

  deleteAllTag(id) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);
    const todoIndex = this.todoLists.findIndex(
      (todoList) => todoList.id === id
    );

    this.todoLists[todoIndex] = {
      ...todoList,
      tags: [],
    };
  }
}

const todoList = new TodoList();
const todo = new Todo({
  id: 1,
  content: "????????? ?????? ??????",
  isDone: true,
  category: "??????",
  tags: [
    {
      id: 1,
      tag: "0904",
    },
    {
      id: 2,
      tag: "2022",
    },
  ],
});

const todo2 = new Todo({
  id: 2,
  content: "??? ??????",
  isDone: false,
  category: "??????",
  tags: [
    {
      id: 1,
      tag: "0908",
    },
    {
      id: 2,
      tag: "2022",
    },
  ],
});

todoList.createTodo(todo);
todoList.createTodo(todo2);

todoList.readAllTodo();
todoList.readTodo(2);

todoList.updateTodo({
  id: 1,
  isDone: true,
});

todoList.updateTags({ id: 1, tagId: 1, tagName: "hihihi" });

todoList.deleteTodo(2);
todoList.deleteAllTodo();

todoList.deleteTag({
  id: 1,
  tagId: 1,
});

todoList.deleteAllTag(1);

import { ITag } from "./interface";

/**
 * @function
 * @name createTodo
 * @description Todo ??????
 * @param {number} id
 * @param {string} content
 * @param {boolean} [isDone=false]
 * @param {string} [category=null]
 * @param {ITag[]} [tags=[]]
 */

export const createTodo = ({ id, content, isDone, category, tags }) => {};

/**
 * @function
 * @name readTodo
 * @description ?????? id??? Todo ??????
 * @param {number} id
 * @returns {object}
 */
export const readTodo = (id) => {};

/**
 * @function
 * @name readAllTodo
 * @description ?????? Todo ??????
 * @returns {object}
 */
export const readAllTodo = () => {};

/**
 * @function
 * @name updateTodo
 * @description ?????? Id Todo update
 * @param {number} id
 * @param {string} [content]
 * @param {boolean} [isDone]
 * @param {string} [category]
 * @param {ITag[]} [tags]
 */

export const updateTodo = ({ id, content, isDone, category, tags }) => {};

/**
 * @function
 * @name updateTodo
 * @description ?????? Todo??? ?????? tag ??????
 * @param {number} id
 * @param {number} tagId
 * @param {string} tag
 */
export const updateTags = ({ id, tagId, tag }) => {};

/**
 * @function
 * @name deleteTodo
 * @description ?????? id Todo ??????
 * @param {number} id
 */
export const deleteTodo = (id) => {};

/**
 * @function
 * @name deleteTodo
 * @description ?????? Todo ??????
 */
export const deleteAllTodo = () => {};

/**
 * @function
 * @name deleteTag
 * @description ?????? Todo??? ?????? tag ??????
 * @param {number} id
 * @param {number} tagId
 */
export const deleteTag = ({ id, tagId }) => {};

/**
 * @function
 * @name deleteAllTag
 * @description ?????? Todo??? ?????? tag ??????
 * @param {number} id
 */
export const deleteAllTag = (id) => {};
