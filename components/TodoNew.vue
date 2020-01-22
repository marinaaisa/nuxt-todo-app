<template>
  <form @submit.prevent="addTodo">
    <input
      v-model="task"
      class="todo-input"
      type="text"
      placeholder="Enter a new task"
    >
  </form>
</template>

<script>
export default {
  data () {
    return {
      task: '',
      newId: 0
    }
  },
  methods: {
    addTodo () {
      if (this.task !== '') {
        this.$store.dispatch('addTodo', this)
        this.newId++
        this.task = ''
      }
    }
  }
}
</script>
