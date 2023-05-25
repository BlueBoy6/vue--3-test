<template>
  <div>Hello</div>
</template>

<script lang="js" setup>
import listTodos from '../store/todos.store.js';

const list = computed(() => {
  return listTodos.listTodos;
});
</script>

<style lang="scss" scoped></style>
