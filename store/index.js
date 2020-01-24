export const state = () => ({
  todos: []
})

export const getters = {
  getTodos: state => state.todos,
  getNumberOfTodos: state => Object.keys(state.todos).length
}

export const mutations = {
  SET_TODOS (state, payload) {
    state.todos = payload
  },
  ADD_TODO (state, payload) {
    const newTask = {
      id: (new Date()).getTime(),
      task: payload.task,
      completed: false
    }
    state.todos.push(newTask)
  },
  TOGGLE_TODO (state, payload) {
    const item = state.todos.find(todo => todo.id === payload)
    if (item) {
      item.completed = !item.completed
    }
  },
  DELETE_TODO (state, payload) {
    const index = state.todos.findIndex(todo => todo.id === payload)
    state.todos.splice(index, 1)
  }
}

export const actions = {
  addTodo ({ commit }, todo) {
    commit('ADD_TODO', todo)
  },
  toggleTodo ({ commit }, todos) {
    commit('TOGGLE_TODO', todos)
  },
  deleteTodo ({ commit }, todos) {
    commit('DELETE_TODO', todos)
  },
  saveTodos ({ state }) {
    localStorage.setItem('todoStore', JSON.stringify(state.todos))
  },
  loadTodos ({ commit }) {
    commit('SET_TODOS', JSON.parse(localStorage.getItem('todoStore')) || [])
  }
}
