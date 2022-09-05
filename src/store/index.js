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
    completedToDos(state) {
      return state.todos.filter(task => {
        return task.completed === true
      }).length;
    },
    pendingToDos(state) {
      return state.todos.filter(task => {
        return task.completed === false
      }).length;
    }
  },
  mutations: {
    NEW_TODO(state, toDoItem) {
      state.todos.push({
        title: toDoItem,
        completed: false
      });
    },
    REMOVE_TODO(state, toDoItem) {
      let index = this.state.todos.indexOf(toDoItem)
      state.todos.splice(index, 1)
    },
    TOGGLE_TODO(state, toDoItem) {
      toDoItem.completed = !toDoItem.completed
    }
  },
  actions: {
    addNewToDo({ commit }, toDoItem) {
      commit('NEW_TODO', toDoItem);
    },
    deleteToDo({ commit }, toDoItem) {
      commit('REMOVE_TODO', toDoItem)
    },
    toggleToDo({ commit }, toDoItem) {
      commit('TOGGLE_TODO', toDoItem)
    }
  },
  modules: {
  }
});
