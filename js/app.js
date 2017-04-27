/**
 * Created by a615213 on 24/04/2017.
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

new Vue({
    el: '.todoapp',
    data: {
        todos: [
            {text:'Aller au marché', done:false},
            {text:'Préparer tott vuejs', done:false},
            {text:'Faire merge request', done:false}
        ],
        newTodo: '',
        editedTodo: undefined
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
        },
        editTodo: function (todo) {
            this.editedTodo = todo;
        },
        finishEdit: function (todo) {
            this.editedTodo = undefined;
        }
    }
})
