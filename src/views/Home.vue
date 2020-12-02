<template>
  <section>
    <h1 class="title">TODOアプリ</h1>
    <Form />
    <SelectState />
    <Table />
  </section>
</template>

<script>
import Form from "@/components/Form";
import Table from "@/components/Table";
import SelectState from "@/components/SelectState";

export default {
  name: "Home",
  components: {
    Form,
    Table,
    SelectState
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-align-last: left;
}
</style>
