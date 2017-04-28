/**
 * Created by a615213 on 24/04/2017.
 */

/*TODO 6: Implementer ici notre directive v-todo-focus: il donne le focus à l'élement sur lequel il est affecté quand cet élement est édité*/

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
        /*TODO 5: implementer les méthodes editTodo et finishTodo*/
    }
})
