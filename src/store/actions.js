const ADD_TASK = ({ commit }, data) => {
  commit("addTask", data);
};
const CHANGE_FLAG = ({ commit }, change_info) => {
  commit("changeFlag", change_info);
};
const FLAG_FILTER = ({ commit }, selected_flag) => {
  commit("flagFilter", selected_flag);
};
const MOVE_UP_TASK = ({ commit }, up_index) => {
  commit("moveUpTask", up_index);
};
const MOVE_DOWN_TASK = ({ commit }, down_index) => {
  commit("moveDownTask", down_index);
};
const DELETE_TASK = ({ commit }, delete_index) => {
  commit("deleteTask", delete_index);
};
const SELECT_DELETE_TASK = ({ commit }) => {
  commit("selectDeleteTask");
};

export default {
  ADD_TASK,
  CHANGE_FLAG,
  FLAG_FILTER,
  MOVE_UP_TASK,
  MOVE_DOWN_TASK,
  DELETE_TASK,
  SELECT_DELETE_TASK
};
