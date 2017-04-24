/**
 * Created by a615213 on 24/04/2017.
 */

new Vue({
    el: '.todoapp',
    data: {
        todos: [
            {text:'Aller au marché', done:false},
            {text:'Préparer tott vuejs', done:false},
            {text:'Faire merge request', done:false}
        ],
        newTodo: ''
    },
    methods: {
        removeTodo: function (todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },
        addTodo: function () {
            this.todos.push(
                {text: this.newTodo, done:false }
            );
            this.newTodo = '';
        }
    }
})
