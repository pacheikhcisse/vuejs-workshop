---?image=vue.png

---

- Vuejs (lire `view js`) released in 2014
- Vue 2 in 2016
- Vue.js offre un `two-way data binding` (comme sur AngularJS), server-side rendering (like in Angular2 and ReactJS), Vue-cli (scaffolding tool for quick start)

---

## L'instance Vue

- `el`: element où greffer vuejs dans le DOM
- `data`: toutes les variables qu’on souhaite injecter
- `methods`: méthodes utilisées dans les directives
- etc. (voir [Vue api](https://vuejs.org/v2/api))

---

## L'instance Vue

Un exemple:

``` 
<div id="app">
  {{ message }}
</div>
```
```
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

```

---

## Quelques directives

##### v-bind : 'Binder' un attribut

`v-bind` ou simplement `:` (deux points)

- `v-bind:href` devient `:href`
- `v-bind:title` devient `:title`

```
<div id="app">
  <span v-bind:title="message"> {{ message }} </span>
</div>
```

---

## Quelques directives

##### v-on : Appel d'un événement (une méthode)

`v-on` ou simplement `@` (arobase)

- `v-on:click` devient `@click`
- `v-on:change` devient `@change`
- `v-on:keyup.enter` ou `@keyup.enter` (clic sur la touche Enter)

```
<div id="app">
  <span v-bind:title="message"> {{ message }} </span>
</div>
```


---

The End :)