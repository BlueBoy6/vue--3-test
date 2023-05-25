<template>
  <div id="app">
    <div>
      <input />
      <button>submit</button>
    </div>
  </div>
</template>

<script>
import ListTodos from './components/ListTodo.vue';

export default {
  name: 'App',
  components: {
    ListTodos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
