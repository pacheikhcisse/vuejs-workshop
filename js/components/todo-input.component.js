/**
 * Created by a615213 on 27/04/2017.
 */

Vue.component('todo-input', {
    data: function () {
        return {
            todos : [],
            newTodo : ''
        }
    },
    methods : {
        addTodo: function () {
            this.todos.push(
                {text: this.newTodo, done:false }
            );
            this.newTodo = '';
            console.log(this.todos);
        }
    },
    template: '<input class="new-todo" type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="What needs to be done?">'
})