<template>
  <ul class="tasks">
    <li
      v-for="todo in todos"
      :key="todo.id"
      :class="{ completed: todo.completed }"
      @click="toggleTodo(todo.id)"
      class="task"
    >
      {{ todo.task }}
      <span @click="deleteTodo(todo.id)" class="delete">ⓧ</span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos () {
      return this.$store.getters.getTodos
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: 'save'
    }
  },
  created () {
    this.$store.dispatch('loadTodos')
  },
  methods: {
    toggleTodo (id) {
      this.$store.dispatch('toggleTodo', id)
    },
    deleteTodo (id) {
      this.$store.dispatch('deleteTodo', id)
    },
    save () {
      this.$store.dispatch('saveTodos')
    }
  }
}
</script>
