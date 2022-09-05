import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Task 1',
        completed: false
      },
      {
        title: 'Task 2',
        completed: false
      }
    ]
  },
  getters: {
  },
  mutations: {
    NEW_TODO (state, toDoItem) {
      state.todos.push({
        title: toDoItem,
        completed: false
      });
    },
    REMOVE_TODO(state, toDoItem) {
      let index = this.state.todos.indexOf(toDoItem)
      state.todos.splice(index,1)
    }
  },
  actions: {
    addNewToDo({ commit }, toDoItem) {
      commit('NEW_TODO', toDoItem);
    },
    deleteToDo({ commit }, toDoItem) {
      commit('REMOVE_TODO', toDoItem)
    }
  },
  modules: {
  }
});
