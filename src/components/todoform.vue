<template>
    <div class="form">
        <h1 class="title">ToDo List</h1>
        <h2 class="completed">Completed : {{ $store.getters.completedToDos }}</h2>
        <h2 class="pending">Pending : {{ $store.getters.pendingToDos }}</h2>
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

<style>
body {
    margin: 0;
    padding: 0;
}
::-webkit-scrollbar{
    width:20px;
    height: 20px;
}
::-moz-scrollbar{
    width:20px;
    height: 20px;
}
::-webkit-scrollbar-thumb{
    background: linear-gradient(
        to bottom,
        #FF850A,
        #FF3474
    );
    border-radius: 50px;
}
::-moz-scrollbar-thumb{
    background: linear-gradient(
        to bottom,
        #FF850A,
        #FF3474
    );
    border-radius: 50px;
}
::-webkit-scrollbar-track{
    background: #474747;
}
::-moz-scrollbar-track{
    background: #474747;
}

.completed{
    color: green
}
.pending{
    color: #e13939
}

.title{
    background-color: rgb(30, 40, 65);
    color: white;
    padding: 20px;
    margin: 0;
}


input {
    width: 30%;
    height: 26px;
    background-color: rgb(237 204 204);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 5px 0px 5px 15px;
    border: none;
    outline: none;
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