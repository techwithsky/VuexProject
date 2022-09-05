<template>
  <div class="deleteItem">
    <span :class="{ done: task.completed }" @click="toggleStatus">{{ task.title }}</span>
    <span class="removeIcon" @click="deleteToDoItem()" style='font-size:26px;'>&#10006;</span>
  </div>

</template>

<script>
export default {
  name: 'ToDoItem',
  props: ["task"],
  methods: {
    deleteToDoItem() {
      this.$store.dispatch('deleteToDo', this.task)
    },
    toggleStatus() {
      this.$store.dispatch('toggleToDo', this.task)
      // this.completed = !this.completed
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through double rgb(239, 239, 239);
}

.removeIcon {
  float: right;
  margin: -8px 17px 4px 0px;
}

.removeIcon:hover {
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
  cursor: pointer;
}
</style>