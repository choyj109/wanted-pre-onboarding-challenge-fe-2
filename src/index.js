/**
 * Todo - 할 일
 * @typeof {Object} Todo
 * @property {number} id - Todo id(required)
 * @property {string} text - Todo text(required)
 * @property {boolean} checked - Todo checked(required)
 * @property {string} category - Todo category(required)
 * @property {string[]} [tags] - Todo tags(optional)
 */
const Todo = {};

/**
 * createTodo - 추가
 * @funtion createTodo
 * @param {string} text - Todo text(required)
 * @param {string} category - Todo category(required)
 * @param {string[]} tags - Todo tags(optional)
 */
const createTodo = ({ text, category, tags }) => {};

/**
 * readTodo - 조회
 * @function readTodo
 * @param {number} id - Todo id(required)
 */
const readTodo = (id) => {};

/**
 * updateTodo - 수정
 * @param {string} text - Todo text(required)
 * @param {string} category - Todo category(required)
 * @param {string[]} tags - Todo tags(optional)
 */
const updateTodo = ({ text, category, tags }) => {};

/**
 * deleteTodo - 삭제
 * @param {number} id - Todo id(required)
 */
const deleteTodo = ({ id }) => {};

/**
 * deleteAllTodo - 전부 삭제
 * @param {number} id - Todo id(required)
 */
const deleteAllTodo = ({ id }) => {};
