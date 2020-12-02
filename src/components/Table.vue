<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>タイトル</th>
          <th>担当者</th>
          <th>状態</th>
          <th>削除</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, i) in this.$store.state.tasks" :key="i">
          <td>
            <input type="checkbox" v-model="task.check" />
          </td>
          <td>{{ task.title }}</td>
          <td>{{ task.user }}</td>
          <td class="btns">
            <div
              v-for="(task_flag, j) in task_flags"
              data-toggle="buttons"
              :key="j"
            >
              <button
                v-if="task.flag === task_flag"
                class="flag-btn flag-btn--active"
              >
                {{ task_flag }}
              </button>
              <button v-else class="flag-btn" @click="changeFlag(i, j)">
                {{ task_flag }}
              </button>
            </div>
          </td>
          <td>
            <button class="delete-btn" type="button" @click="deleteTask(i)">
              <font-awesome-icon :icon="['far', 'trash-alt']" />
            </button>
          </td>
          <td>
            <button class="arrow" type="button" @click="moveUpTask(i)">
              <font-awesome-icon icon="arrow-alt-circle-up" />
            </button>
            <button class="arrow" type="button" @click="moveDownTask(i)">
              <font-awesome-icon icon="arrow-alt-circle-down" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button
        class="select-delete-btn"
        type="buton"
        @click="selectDeleteTask()"
      >
        選択アイテムを削除
      </button>
    </div>
    <!-- debug -->
    <div style="display: flex">
      <pre> - すべて :   {{ this.$store.state.tasks }}</pre>
      <pre> - 完了  :  {{ this.$store.state.Done }}</pre>
      <pre> - 完了以外  :  {{ this.$store.state.OtherThanCompletion }}</pre>
      <pre> - 選択フィルタ  :  {{ this.$store.state.active_filter }}</pre>
    </div>
    <!--  -->
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      tasks: this.$store.state.tasks,
      task_flags: this.$store.state.task_flags,
      filter_contents: this.$store.state.filter_contents,
      active_filter: this.$store.state.active_filter,
      delete_indexs: []
    };
  },
  methods: {
    changeFlag(i, j) {
      const change_info = {
        task_id: i,
        flag_id: j
      };
      this.CHANGE_FLAG(change_info);
    },
    moveUpTask(i) {
      if (i === 0) return;
      this.MOVE_UP_TASK(i);
    },
    moveDownTask(i) {
      if (i === this.tasks.length - 1) return;
      this.MOVE_DOWN_TASK(i);
    },
    deleteTask(i) {
      this.DELETE_TASK(i);
    },
    selectDeleteTask() {
      this.SELECT_DELETE_TASK();
    },
    ...mapActions([
      "CHANGE_FLAG",
      "MOVE_UP_TASK",
      "MOVE_DOWN_TASK",
      "DELETE_TASK",
      "SELECT_DELETE_TASK"
    ])
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  margin: 16px 0;
  border: solid 2px #efefef;
  padding: 8px 16px;
  border-radius: 8px;
}
th {
  text-align-last: start;
}
td {
  margin: 8px 0;
}
@mixin defaultBtn() {
  padding: 4px 8px;
  color: #333;
  background-color: #fff;
  outline: none;
  border: solid 1px #bbb;
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
}
.btns {
  display: flex;
}
.delete-btn {
  @include defaultBtn();
}
.arrow {
  @include defaultBtn();
}
.flag-btn {
  @include defaultBtn();
  &--active {
    background-color: #bbb;
  }
}
.select-delete-btn {
  @include defaultBtn();
}
</style>
