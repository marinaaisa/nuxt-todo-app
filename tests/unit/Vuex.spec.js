import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import * as todos from '@/store/index.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Vuex', () => {
  const actions = todos.actions
  const mutations = todos.mutations
  const getters = todos.getters
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      mutations,
      state: { todos: [] }
    })
  })

  describe('Mutations', () => {
    it('commits ADD_TODO', () => {
      store.commit('ADD_TODO', { task: 'Some new task' })

      const current = getters.getTodos(store.state)[0].task
      const taskExpected = 'Some new task'

      expect(current).toEqual(taskExpected)
    })

    it('commits TOGGLE_TODO', () => {
      const taskId = 0
      store.state.todos = [{ id: 0, task: 'Some new task', completed: false }]
      store.commit('TOGGLE_TODO', taskId)

      const current = getters.getTodos(store.state)
      const expected = [{ id: 0, task: 'Some new task', completed: true }]

      expect(current).toEqual(expected)
    })

    it('commits DELETE_TODO', () => {
      const taskId = 0
      store.state.todos = [{ id: 0, task: 'Some new task', completed: false }]
      store.commit('DELETE_TODO', taskId)

      const current = getters.getTodos(store.state)
      const expected = []

      expect(current).toEqual(expected)
    })
  })

  describe('Actions', () => {
    it('dispatches the addTodo action', () => {
      store.dispatch('addTodo', { task: 'Some new task' })

      const current = getters.getTodos(store.state)[0].task
      const taskExpected = 'Some new task'

      expect(current).toEqual(taskExpected)
    })

    it('dispatches the toggleTodo action', () => {
      const taskId = 0
      store.state.todos = [{ id: 0, task: 'Some new task', completed: false }]

      store.dispatch('toggleTodo', taskId)

      const current = getters.getTodos(store.state)
      const expected = [{ id: 0, task: 'Some new task', completed: true }]

      expect(current).toEqual(expected)
    })

    it('dispatches the deleteTodo action', () => {
      const taskId = 0
      store.state.todos = [{ id: 0, task: 'Some new task', completed: false }]

      store.dispatch('deleteTodo', taskId)

      const current = getters.getTodos(store.state)
      const expected = []

      expect(current).toEqual(expected)
    })
  })
})
