<template>
  <div class="deleteItem">
    {{  task.title  }}
      <span @click="deleteToDoItem()" style='font-size:26px;'>&#10006;</span>
  </div>

</template>

<script>
export default {
  name: 'ToDoItem',
  props: ["task"],
  methods: {
    deleteToDoItem() {
      this.$store.dispatch('deleteToDo', this.task)
    }
  }
}
</script>

<style scoped>
  span{
    float: right;
    margin: -8px 17px 4px 0px;
  }
span:hover {
  cursor: pointer;
}

.deleteItem {
  width: 30%;
  background-color: rgb(151 213 180);
  border: 2px solid white;
  color: rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  border-radius: 10px;
  padding: 10px 0px;
}
</style>