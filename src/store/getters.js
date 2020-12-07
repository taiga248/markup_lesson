const AllTasks = state => {
  return state.tasks;
};
const Done = state => {
  return state.tasks.filter(task => task.flag === state.filter_flags[1]); // 完了
};
const OtherThanCompletion = state => {
  return state.tasks.filter(task => task.flag !== state.filter_flags[1]); // 完了以外
};
const activeFilter = state => {
  return state.active_filter;
};

export default {
  AllTasks,
  Done,
  OtherThanCompletion,
  activeFilter
};
