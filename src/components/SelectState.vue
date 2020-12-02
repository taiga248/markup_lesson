<template>
  <section>
    {{ this.$store.state.active_filter }}
    <ul class="nav">
      <li
        v-for="(filter_flag, i) in filter_flags"
        class="nav__item"
        :key="i"
        @click="flagFilter(filter_flag)"
      >
        <button
          v-if="filter_flag === active_filter"
          class="nav__item__btn nav__item__btn--active"
        >
          {{ filter_flag }}
        </button>
        <button v-else class="nav__item__btn">
          {{ filter_flag }}
        </button>
      </li>
      <li>TODO:</li>
    </ul>

    <div class="search-user">
      <input type="text" class="user-input" placeholder="担当者名で絞り込み" />
      TODO:
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      filter_flags: this.$store.state.filter_flags,
      active_filter: this.$store.state.active_filter
    };
  },
  created() {
    console.log("created");
    this.active_filter = this.$store.state.active_filter;
  },
  beforeUpdate() {
    console.log("beforeUpdate");
    this.active_filter = this.$store.state.active_filter;
  },
  methods: {
    flagFilter(selected_flag) {
      this.FLAG_FILTER(selected_flag);
    },
    ...mapActions(["FLAG_FILTER"])
  }
};
</script>

<style lang="scss" scoped>
section {
  margin: 16px 8px;
}
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
.search-user {
  margin: 8px 0;
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
</style>
