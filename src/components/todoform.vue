<template>
    <div class="form">
        <h1>ToDo List</h1>
        <input type="text" v-model="newToDoItem" @keyup.enter="submit">
        <button @click="addNewToDoItem()">Add</button>
    </div>
</template>

<script>
export default {
    name: 'ToDoForm',
    data() {
        return {
            newToDoItem: ""
        }
    },
    methods: {
        addNewToDoItem() {
            if (this.newToDoItem == "") {
                alert("Add task!!!")
            } else {

                this.$store.dispatch('addNewToDo', this.newToDoItem);
                this.newToDoItem = '';
            }
        }
    }
}
</script>

<style scoped>
body {
    margin: 0px;
    padding: 0px;

}

h1 {
    background-color: rgb(30, 40, 65);
    color: white;
    padding: 4px;
}


input {
    width: 30%;
    height: 25px;
    background-color: rgb(237 204 204);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 5px 0px 5px 15px;
    border: none;
    border-radius: 8px 0px 0px 8px;
}

button {
    background-color: rgb(0, 122, 209);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 0px 8px 8px 0px;
}

button:hover {
    cursor: pointer;
}
</style>