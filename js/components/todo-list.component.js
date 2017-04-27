/**
 * Created by a615213 on 27/04/2017.
 */

Vue.filter('capitalize', function (val) {
    return val.toUpperCase();
})

Vue.directive('todo-focus', {
    bind: function (el, binding) {
        if (binding.value) {
            el.focus();
        }
    },
    update: function (el, binding) {
        if (binding.value) {
            el.focus();
        }
    }
})

Vue.component('todo-list', {
    data: function () {
        return {
            todos: [
                {text: 'Aller au marché', done: false},
                {text: 'Préparer tott vuejs', done: false},
                {text: 'Faire merge request', done: false}
            ],
            editedTodo: undefined
        }
    },
    methods: {
        removeTodo: function (todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },
        editTodo: function (todo) {
            this.editedTodo = todo;
        },
        finishEdit: function (todo) {
            this.editedTodo = undefined;
        }
    },
    template: '<ul class="todo-list">' +
                '<li class="todo" :class="{completed: todo.done, editing: todo == editedTodo}" v-for="todo in todos">' +
                    '<div class="view">' +
                        '<input class="toggle" type="checkbox" v-model="todo.done">' +
                        '<label :class="{done:todo.done}" @dblclick="editTodo(todo)">{{todo.text | capitalize}}</label>' +
                    '</div>' +
                    '<button class="destroy" @click="removeTodo(todo)"></button>' +
                    '<input class="edit" type="text" v-todo-focus="todo == editedTodo" v-model="todo.text"' +
                        '@blur="finishEdit" @keyup.enter="finishEdit">' +
                '</li>' +
              '</ul>'
})