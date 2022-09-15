<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
=======
/**
 * Todo - 할 일
 * @typeof {Object} Todo
 * @property {string} id - Todo id(required)
 * @property {string} text - Todo text(required)
 * @property {boolean} checked - Todo checked(required)
 * @property {string} category - Todo category(required)
 * @property {string[]} [tags] - Todo tags(optional)
 */
class Todo {
  constructor({ id, content, checked, category, tags }) {
    this.id = id;
    this.content = content;
    this.checked = checked;
    this.category = category;
    this.tags = tags;
  }
}

class TodoList {
  constructor() {
    this.todoLists = [];
  }
}

/**
 * createTodo - 추가
 * @funtion createTodo
 * @param {string} id - Todo id(required)
 * @param {string} text - Todo text(required)
 * @param {string} category - Todo category(required)
 * @param {boolean} checked - Todo checked(required)
 * @param {string[]} tags - Todo tags(optional)
 */
const createTodo = ({ id, text, category, checked, tags }) => {
  const todo = new Todo({ id, text, category, checked, tags });
  this.todoLists.push(todo);
};

/**
 * getTodo - 목록 가져오기
 * @function getTodo
 * @return {Array} Todo
 */
const getTodo = () => {
  return this.todoLists;
};

/**
 * readTodo - 조회
 * @function readTodo
 * @param {string} id - Todo id(required)
 * @return {Array} Todo
 */
const readTodo = (id) => {
  return this.todoLists.find((todoList) => todoList.id === id);
};

/**
 * updateTodo - 수정
 * @function updateTodo
 * @param {string} id - Todo id(required)
 * @param {string} text - Todo text(required)
 * @param {string} category - Todo category(required)
 * @return Todo
 */
const updateTodo = ({ id, text, category }) => {
  const todoList = this.todoLists.find((todoList) => todoList.id === id);
  const index = this.todoLists.findIndex((todoList) => todoList.id === id);
  this.todoLists[index] = {
    ...todoList,
    text: text ?? todoList.text,
    category: category ?? todoList.category,
  };
};

/**
 * updateTagTodo - 태그 수정
 * @funtion updateTagTodo
 * @param {string} id - Todo id(required)
 * @param {string[]} tags - Todo tags(optional)
 * @return {Array} Todo
 */
const updateTagTodo = ({ id, tag }) => {
  const todoList = this.todoLists.find((todoList) => todoList.id === id);
  const todoIndex = this.todoLists.findIndex((todoList) => todoList.id === id);
  const tags = this.todoLists[todoIndex].tags;

  const newTags = tags.map((tag) =>
    tag.id === id ? { ...tag, tag: tag } : tag
  );

  this.todoLists[todoIndex] = {
    ...todoList,
    tags: newTags,
  };
};

/**
 * deleteTodo - 삭제
 * @function deleteTodo
 * @param {string} id - Todo id(required)
 */
const deleteTodo = ({ id }) => {
  this.todoLists = this.todoLists.filter((todoList) => todoList.id !== id);
};

/**
 * deleteAllTodo - 전부 삭제
@function deleteAllTodo
 */
const deleteAllTodo = () => {
  this.todoLists = [];
};

/**
 * deleteAllTagTodo - 태그 전부 삭제
 * @param {string} id - Todo id(required)
 * @param {string} tag - Todo tag(optional)
 */
const deleteAllTagTodo = ({ id, tag }) => {
  const todoList = this.todoLists.find((todoList) => todoList.id === id);
  const todoIndex = this.todoLists.findIndex((todoList) => todoList.id === id);
  const tags = this.todoLists[todoIndex].tags;

  this.todoLists[todoIndex] = {
    ...todoList,
    tags: [],
  };
};

/**
 * isChecked - 완료 여부
 * @param {string} id - Todo id(required)
 * @param {boolean} checked - Todo checked(required)
 */
const isChecked = ({ id, checked }) => {
  const todoList = this.todoLists.find((todoList) => todoList.id === id);
  const index = this.todoLists.findIndex((todoList) => todoList.id === id);
  this.todoLists[index] = {
    ...todoList,
    checked: checked ?? todoList.checked,
  };
};
>>>>>>> 3d0d53f24497e25a9d222ed43814c608a7ac756d
