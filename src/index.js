/**
 * Todo - 할 일
 * @typeof {Object} Todo
 * @property {string} id - Todo id(required)
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
 * getTodo - 목록 가져오기
 * @function getTodo
 * @return {Array} Todo
 */
const getTodo = () => {};

/**
 * readTodo - 조회
 * @function readTodo
 * @param {string} id - Todo id(required)
 * @return {Array} Todo
 */
const readTodo = (id) => {};

/**
 * updateTodo - 수정
 * @function updateTodo
 * @param {string} id - Todo id(required)
 * @param {string} text - Todo text(required)
 * @param {string} category - Todo category(required)
 * @return Todo
 */
const updateTodo = (id) => {};

/**
 * updateTagTodo - 태그 수정
 * @funtion updateTagTodo
 * @param {string} id - Todo id(required)
 * @param {string[]} tags - Todo tags(optional)
 * @return {Array} Todo
 */
const updateTagTodo = ({ id, tag }) => {};

/**
 * deleteTodo - 삭제
 * @function deleteTodo
 * @param {string} id - Todo id(required)
 */
const deleteTodo = ({ id }) => {};

/**
 * deleteAllTodo - 전부 삭제
@function deleteAllTodo
 */
const deleteAllTodo = () => {};

/**
 * deleteAllTagTodo - 태그 전부 삭제
 * @param {string} id - Todo id(required)
 * @param {string} tag - Todo tag(optional)
 */
const deleteAllTagTodo = ({ id, tag }) => {};

/**
 * isChecked - 완료 여부
 * @param {string} id - Todo id(required)
 * @param {boolean} checked - Todo checked(required)
 */
const isChecked = ({ id, checked }) => {};
