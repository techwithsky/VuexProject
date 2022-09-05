<template>
  <div>
    <ToDoItem v-for="(task ,index) in todos" :key="index" :task="task"/>
  </div>
</template>

<script>
import ToDoItem from './todoitem.vue'
export default {
    name: 'ToDoList',
    components: {
        ToDoItem
    },
    computed: {
        todos() {
            return this.$store.state.todos
        }
    }
}
</script>

<style>

</style>