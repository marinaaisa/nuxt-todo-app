import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TodoNew from '@/components/TodoNew.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('todoNew component', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      addTodo: jest.fn()
    }

    store = new Vuex.Store({
      actions
    })
  })

  it('adds a new task if the user has written anything in the input', () => {
    const wrapper = shallowMount(TodoNew, { store, localVue })

    wrapper.find('input').setValue('something')
    wrapper.find('form').trigger('submit.prevent')

    expect(actions.addTodo).toHaveBeenCalled()
  })

  it('doesnt add a new task if the user hasnt write anything', () => {
    const wrapper = shallowMount(TodoNew, { store, localVue })

    wrapper.find('input').setValue('')
    wrapper.find('form').trigger('submit.prevent')

    expect(actions.addTodo).toHaveBeenCalledTimes(0)
  })
})
