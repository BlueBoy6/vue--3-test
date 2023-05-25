export default defineStore('todos', () => {
  const listTodos = ref([]);

  const pushTodo = (todo) => {
    listTodos.value.push(todo);
  };

  return { listTodos, pushTodo };
});
