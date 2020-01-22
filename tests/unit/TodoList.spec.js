import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import * as todos from '@/store/index.js'
import TodoList from '@/components/TodoList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('todoNew component', () => {
  const getters = todos.getters
  let store
  let actions

  beforeEach(() => {
    actions = {
      toggleTodo: jest.fn(),
      loadTodos: jest.fn(),
      deleteTodo: jest.fn()
    }

    store = new Vuex.Store({
      actions,
      getters,
      state: {
        todos: {
          '0': {
            id: 0,
            task: 'Do some work',
            completed: false
          },
          '1': {
            id: 1,
            task: 'Take a rest',
            completed: false
          }
        }
      }
    })
  })

  it('load tasks from LocalStorage when component is created', async () => {
    const wrapper = shallowMount(TodoList, { store, localVue })

    await wrapper
    expect(actions.loadTodos).toHaveBeenCalled()
  })

  it('toggles task when task is completed', () => {
    const wrapper = shallowMount(TodoList, { store, localVue })

    wrapper.findAll('li').at(0).trigger('click')
    expect(actions.toggleTodo).toHaveBeenCalled()
  })

  it('removes task when delete button is clicked', () => {
    const wrapper = shallowMount(TodoList, { store, localVue })

    wrapper.find('span').trigger('click')
    expect(actions.deleteTodo).toHaveBeenCalled()
  })
})
