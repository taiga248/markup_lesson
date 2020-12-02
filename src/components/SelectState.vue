<template>
  <section>
    <ul class="nav">
      <li
        v-for="(filter_content, i) in filter_contents"
        class="nav__item"
        :key="i"
        @click="flagFilter(filter_content)"
      >
        <button
          v-if="filter_content === active_filter"
          class="nav__item__btn nav__item__btn--active"
        >
          {{ filter_content }}
        </button>
        <button v-else class="nav__item__btn">
          {{ filter_content }}
        </button>
      </li>
    </ul>

    <div class="search-user">
      <input type="text" class="user-input" placeholder="担当者名で絞り込み" />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      filter_contents: this.$store.state.filter_contents,
      active_filter: this.$store.state.active_filter
    };
  },
  methods: {
    flagFilter(active_flag) {
      this.FLAG_FILTER(active_flag);
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
