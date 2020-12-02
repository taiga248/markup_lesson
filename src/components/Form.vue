<template>
  <section>
    <div class="head">
      <p class="head__title">新しい作業の追加</p>
      <font-awesome-icon
        v-if="isAccordion"
        class="head__right-icon fa-lg"
        icon="angle-up"
        @click="toggleAccordion()"
      />
      <font-awesome-icon
        v-else
        class="head__right-icon fa-lg"
        icon="angle-down"
        @click="toggleAccordion()"
      />
    </div>
    <form
      v-show="isAccordion"
      class="form"
      @submit.prevent
      action="/"
      name="form"
      method="POST"
    >
      <input
        type="text"
        class="form__input"
        v-model="title"
        placeholder="タイトル"
        required
      />
      <input
        type="text"
        class="form__input"
        v-model="user"
        placeholder="担当者"
      />
      <div class="form__flag" v-for="(task_flag, i) in task_flags" :key="i">
        <button
          v-if="task_flag === flag"
          class="form__flag__btn form__flag__btn--active"
          @click="toggleFlag(task_flag)"
        >
          {{ task_flag }}
        </button>

        <button v-else class="form__flag__btn" @click="selectFlag(task_flag)">
          {{ task_flag }}
        </button>
      </div>
      <input
        v-show="title"
        type="submit"
        class="form__add"
        value="追加"
        @click="postData()"
      />
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      task_flags: this.$store.state.task_flags,
      isAccordion: true,
      title: null,
      user: null,
      flag: "未対応"
    };
  },
  methods: {
    toggleAccordion() {
      this.isAccordion = !this.isAccordion;
    },
    selectFlag(task_flag) {
      this.flag = task_flag;
    },
    postData() {
      const data = {
        check: false,
        title: this.title,
        user: this.user,
        flag: this.flag
      };
      console.log(data);
      this.ADD_TASK(data);
      this.formInit();
    },
    // 初期化時 input要素のrequiredの警告が出るのとても嫌 TODO:
    formInit() {
      this.title = null;
      this.user = null;
      this.flag = "未対応";
    },
    ...mapActions(["ADD_TASK"])
  }
};
</script>

<style lang="scss" scoped>
section {
  border: solid 1px #ddd;
  border-radius: 5px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f5f5f5;
  border-bottom: solid 1px #ddd;
  &__title {
    margin: 0;
    padding: 8px 16px;
  }
  &__right-icon {
    margin: 8px 16px;
  }
}
.form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 8px;
  &__input {
    display: inline-block;
    margin: 4px;
    padding: 8px 16px;
    color: #555;
    outline: none;
    border: solid 1px #bbb;
    border-radius: 4px;
    vertical-align: middle;
  }
  &__flag {
    &__btn {
      padding: 4px 12px;
      color: #333;
      background-color: #fff;
      outline: none;
      border: solid 1px #bbb;
      border-radius: 4px;
      transition: 0.2s;
      cursor: pointer;
      &--active {
        background-color: #bbb;
      }
      &:hover {
        background-color: #ddd;
      }
    }
  }
  &__add {
    padding: 4px 12px;
    margin: 0 0 0 8px;
    color: #fff;
    background-color: rgb(10, 132, 255);
    opacity: 0.9;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
