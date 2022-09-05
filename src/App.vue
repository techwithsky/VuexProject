<template>
  <div id="app">
    
    <ToDoForm />
    <ToDoList />
  </div>
</template>

<script>
import ToDoForm from './components/todoform.vue';
import ToDoList from './components/todolist.vue'
export default {
  name: 'App',
  components: {
    ToDoForm,
    ToDoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
