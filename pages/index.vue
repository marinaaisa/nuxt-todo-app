<template>
  <div class="container">
    <h1>To-Do List</h1>
    <div id="app">
      <div>
        <TodoNew />
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TodoNew from '@/components/TodoNew.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    TodoNew,
    TodoList
  }
}
</script>
