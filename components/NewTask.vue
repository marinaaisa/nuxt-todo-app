<template>
  <form @submit.prevent="addTodo">
    <input
      v-model="task"
      class="new-task-input"
      type="text"
      placeholder="Enter a new task"
    >
  </form>
</template>

<script>
export default {
  data () {
    return {
      task: ''
    }
  },
  methods: {
    addTodo () {
      if (this.task !== '') {
        this.$store.dispatch('addTodo', this)
        this.task = ''
      }
    }
  }
}
</script>
<style lang="scss">
.new-task-input {
  padding: .7rem;
  border: 0;
  width: 100%;
  background: transparent;
  color: var(--text-color);
  position: relative;
  border-bottom: 1px solid var(--border-color);
  box-sizing: border-box;
  font-size: 1rem;
}
::placeholder {
  color: var(--text-color);
  opacity: .7;
}
</style>
