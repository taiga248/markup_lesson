const addTask = (state, data) => {
  state.tasks.push(data);
};
const changeFlag = (state, change_info) => {
  state.tasks[change_info.task_id].flag = state.task_flags[change_info.flag_id];
};
const flagFilter = (state, active_flag) => {
  state.active_filter = active_flag;
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
const deleteTask = (state, delete_index) => {
  state.tasks.splice(delete_index, 1);
};
const selectDeleteTask = state => {
  const filter_array = state.tasks.filter(task => task.check === false);
  state.tasks = filter_array;
  console.log(state.tasks);
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
