app.component('cart-display', {
  props:['cart'], //props é uma propriedade que vem do componente pai
  setup(){

  },
  template:
  `<div class="cart">Cart: {{ cart }}</div>`
})