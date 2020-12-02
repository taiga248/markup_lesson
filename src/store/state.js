const task_flags = ["未対応", "処理中", "処理済み", "完了"];
const tasks = [
  {
    check: false,
    title: "お買い物",
    user: "1",
    flag: task_flags[0]
  },
  {
    check: false,
    title: "お菓子",
    user: "2",
    flag: task_flags[2]
  },
  {
    check: false,
    title: "お昼ご飯",
    user: "3",
    flag: task_flags[3]
  },
  {
    check: false,
    title: "仕事",
    user: "4",
    flag: task_flags[1]
  }
];
const filter_flags = ["すべて", "完了", "完了以外"];
const active_filter = filter_flags[0];

const Done = [];
const OtherThanCompletion = [];

export default {
  tasks,
  task_flags,
  filter_flags,
  active_filter,
  Done,
  OtherThanCompletion
};
