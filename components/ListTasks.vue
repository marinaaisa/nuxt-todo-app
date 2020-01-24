<template>
  <ul class="tasks">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="task"
    >
      <input
        :id="todo.id"
        @click="toggleTodo(todo.id)"
        :checked="todo.completed"
        class="task__input"
        name="someRadio"
        type="checkbox"
      >
      <label :for="todo.id" class="task__elem" />
      <div class="task__label">
        <label :for="todo.id" :class="{ completed: todo.completed }" class="task__label-text">{{ todo.task }}</label>
        <button @click="deleteTodo(todo.id)" class="task__delete">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
            <title>Delete task</title>
            <path d="M16,1.4,14.6,0,8,6.6,1.4,0,0,1.4,6.6,8,0,14.6,1.4,16,8,9.4,14.6,16,16,14.6,9.4,8Z" />
          </svg>
        </button>
      </div>
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
<style lang="scss">
.tasks {
  margin-top: 1rem;
}

.task {
  display: flex;
  padding: 0.3rem 0;

  &__input {
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    clip: rect(0,0,0,0);
    overflow: hidden;
    position: absolute;
  }

  &__elem {
    display: inline-block;
    position: relative;
    margin-right: 4px;
    border: 1px solid var(--primary);
    width: 16px;
    height: 16px;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;

    &:before {
      content: "\2022";
      font-size: 1.25em;
      line-height: 0.7em;
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-family: verdana, arial, sans-serif;
      font-weight: bold;
      text-align: center;
      color: var(--primary);
    }
  }

  &__label {
    flex: 1;
    padding-bottom: .5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-left: .5rem;

    &:before {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-bottom: 1px solid var(--border-color);
    }
  }
  &__delete {
    background: transparent;
    border-radius: 100%;
    border: 1px solid var(--primary);
    width: 1.5rem;
    height: 1.5rem;
    padding: .4rem;
    line-height: 0;
    color: var(--primary);
  }
}

.task__elem,
.custom-check__label,
.task__label {
  cursor: pointer;
  vertical-align: middle;
}

.task__input:checked + .task__elem:before {
  display: block;
}

.task__label-text.completed {
  text-decoration: line-through;
  color: var(--primary);
}

.destroy {
  margin-left: auto;
}
</style>
