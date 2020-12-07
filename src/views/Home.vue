<template>
  <section>
    <h1 class="title">TODOアプリ</h1>
    <Form />
    <Table />
  </section>
</template>

<script>
import Form from "@/components/Form";
import Table from "@/components/Table";

export default {
  name: "Home",
  components: {
    Form,
    Table
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-align-last: left;
}
</style>
