<template>
  <section>
    <div>
      <ul class="nav">
        <li v-for="(filter_flag, i) in filter_flags" class="nav__item" :key="i">
          <button
            v-if="filter_flag === activeFilter"
            class="nav__item__btn nav__item__btn--active"
            @click="flagFilter(filter_flag)"
          >
            {{ filter_flag }}
          </button>
          <button
            v-else
            class="nav__item__btn"
            @click="flagFilter(filter_flag)"
          >
            {{ filter_flag }}
          </button>
        </li>
      </ul>
      <input
        type="text"
        class="user-input"
        v-model="userName"
        placeholder="担当者名で絞り込み"
      />
    </div>
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
        <tr v-for="(task, i) in taskRef" :key="i">
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
            <button
              class="delete-btn"
              type="button"
              @click="deleteTask(task.id)"
            >
              <font-awesome-icon :icon="['far', 'trash-alt']" />
            </button>
          </td>
          <td>
            <button class="arrow" type="button" @click="moveUpTask(i, taskRef)">
              <font-awesome-icon icon="arrow-alt-circle-up" />
            </button>
            <button
              class="arrow"
              type="button"
              @click="moveDownTask(i, taskRef)"
            >
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
    <!-- <div style="display: flex">
      <pre> - すべて :   {{ this.$store.state.tasks }}</pre>
      <pre> - 完了  :  {{ Done }}</pre>
      <pre> - 完了以外  :  {{ OtherThanCompletion }}</pre>
      <pre> - 選択フィルタ  :  {{ activeFilter }}</pre>
    </div> -->
    <!--  -->
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      tasks: this.$store.state.tasks,
      task_flags: this.$store.state.task_flags,
      filter_flags: this.$store.state.filter_flags,
      userName: ""
    };
  },
  computed: {
    taskRef() {
      switch (this.$store.getters.activeFilter) {
        case this.filter_flags[0]: // すべて
          return this.$store.getters.AllTasks;
        case this.filter_flags[1]: // 完了
          return this.$store.getters.Done;
        case this.filter_flags[2]: // 完了以外
          return this.$store.getters.OtherThanCompletion;
        default:
          return this.$store.getters.AllTasks;
      }
    },
    // TODO: ユーザー絞り込み
    filterUserName(task) {
      return task.filter(value => value.match(this.userName));
    },
    ...mapGetters(["AllTasks", "Done", "OtherThanCompletion", "activeFilter"])
  },
  methods: {
    // TODO: ユーザー絞り込み
    // filterUserName(task) {
    //   return task.filter((value) => value.match(this.userName));
    // },
    changeFlag(i, j) {
      const change_info = {
        task_id: i,
        flag_id: j
      };
      this.CHANGE_FLAG(change_info);
    },
    moveUpTask(i, tasks) {
      if (tasks[i] === tasks[0]) return; // それぞれのタスクの先頭の時動かさない
      this.MOVE_UP_TASK(i);
    },
    moveDownTask(i, tasks) {
      if (i === tasks.length - 1) return;
      this.MOVE_DOWN_TASK(i);
    },
    deleteTask(id) {
      this.DELETE_TASK(id);
    },
    selectDeleteTask() {
      this.SELECT_DELETE_TASK();
    },
    flagFilter(selected_flag) {
      this.FLAG_FILTER(selected_flag);
    },

    ...mapActions([
      "CHANGE_FLAG",
      "MOVE_UP_TASK",
      "MOVE_DOWN_TASK",
      "DELETE_TASK",
      "SELECT_DELETE_TASK",
      "FLAG_FILTER"
    ])
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  &__item {
    margin: 0 8px;
    &__btn {
      padding: 8px 16px;
      color: rgb(10, 132, 255);
      background-color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      &--active {
        color: #333;
      }
    }
  }
}

.user-input {
  display: inline-block;
  margin: 4px;
  padding: 8px 16px;
  color: #555;
  outline: none;
  border: solid 1px #ccc;
  border-radius: 4px;
  vertical-align: middle;
}

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
