const addTask = (state, data) => {
  state.tasks.push(data);
};
const changeFlag = (state, change_info) => {
  state.tasks[change_info.task_id].flag = state.task_flags[change_info.flag_id];
};
const flagFilter = (state, selected_flag) => {
  console.log(selected_flag);
  let filtering_array = null;
  if (selected_flag === "完了") {
    filtering_array = state.tasks.filter(task => task.flag === "完了");
  } else if (selected_flag === "完了以外") {
    filtering_array = state.tasks.filter(task => task.flag !== "完了");
  } else {
    console.log("すべて");
  }

  state.tasks = filtering_array;
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
