<template>
  <fieldset>
    <legend>{{ $t('accessibility.fieldset') }}</legend>
    <ul id="content" class="tasks">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="task"
      >
        <input
          :id="todo.id"
          @click="toggleTodo(todo.id)"
          :checked="todo.completed"
          :aria-label="todo.completed ? $t('accessibility.uncheck') : $t('accessibility.check')"
          class="task__input"
          name="someRadio"
          type="checkbox"
        >
        <label :for="todo.id" class="task__label">
          <p class="task__text">{{ todo.task }}</p>
          <button @click="deleteTodo(todo.id)" class="task__delete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
              <title>Delete task</title>
              <path d="M16,1.4,14.6,0,8,6.6,1.4,0,0,1.4,6.6,8,0,14.6,1.4,16,8,9.4,14.6,16,16,14.6,9.4,8Z" />
            </svg>
          </button>
        </label>
      </li>
    </ul>
  </fieldset>
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
  padding-bottom: .7rem;

  &__input {
    position: absolute;
    left: -9999px;

    + .task__label:after {
      content: '';
      width: 12px;
      height: 12px;
      background: var(--primary);
      position: absolute;
      top: 4px;
      left: 4px;
      border-radius: 100%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    &:checked {
      + .task__label {
        &:after {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }

        .task__text {
          text-decoration: line-through;
          color: var(--primary);
        }
      }
    }

    &:focus + .task__label:before {
      outline: -webkit-focus-ring-color auto 2px;
      outline-color: var(--primary);
    }
  }

  &__label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: flex;
    justify-content: space-between;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      border: 1px solid var(--primary);
      border-radius: 100%;
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
</style>
