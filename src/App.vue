<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home";
export default {
  components: {
    Home
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
  min-width: 540px;
  max-width: 65vw;
  margin: 0 auto;
}

// reset
body,
ul,
ol,
li {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
input[type="text"]:focus {
  box-shadow: 0 0 4px rgba(10, 132, 255, 0.8);
}
</style>
