const addTask = (state, data) => {
  state.tasks.push(data);
};
const changeFlag = (state, change_info) => {
  state.tasks[change_info.task_id].flag = state.task_flags[change_info.flag_id];
};
const flagFilter = (state, selected_flag) => {
  switch (selected_flag) {
    case state.filter_flags[0]: // すべて
      state.active_filter = state.filter_flags[0];
      break;
    case state.filter_flags[1]: // 完了
      state.active_filter = state.filter_flags[1];
      break;
    case state.filter_flags[2]: // 完了以外
      state.active_filter = state.filter_flags[2];
      break;
    default:
      state.active_filter = "";
      break;
  }
};
const moveUpTask = (state, up_index) => {
  state.tasks.splice(
    up_index - 1,
    2,
    state.tasks[up_index],
    state.tasks[up_index - 1]
  );
};
const moveDownTask = (state, down_index) => {
  state.tasks.splice(
    down_index,
    2,
    state.tasks[down_index + 1],
    state.tasks[down_index]
  );
};
const deleteTask = (state, id) => {
  const deleted_array = state.tasks.filter(task => task.id !== id);
  state.tasks = deleted_array;
};
const selectDeleteTask = state => {
  const deleted_array = state.tasks.filter(task => task.check === false);
  state.tasks = deleted_array;
};

export default {
  addTask,
  changeFlag,
  flagFilter,
  moveUpTask,
  moveDownTask,
  deleteTask,
  selectDeleteTask
};
