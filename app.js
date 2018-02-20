/* Ideas para resolver
--> *opcional, sirve de algo?* Volver el array order con un reduce en un objeto 
que contenga el id como key. y la cantidad del mismo item como valor de es key
el uso de ese reduce reviria para no tener que declarar una propiedad por cada kitty distinto
que fueran contadores que ayudaran a rastrear la especificidad de la orden
--> funciones para pintar en el DOM, definir si seran metodos de nuestros objetos
--> Catalogar menu en dos divisiones por precio: 150 y 250
--> Agregar modal (definir que de ese modal estara estatico en el html 
  y que se va a pintar a traves del DOM)
--> en el modal desplegar el listado de items incluyendo tipo de kitty, precio + iva,
 e imagen
--> *el metodo para editar la cart que hace? es el momento donde el usuario despues de
remover un item cierra el modal para disponerse a comprar un item mas, cualquier otro? (slack)
--> Es cuando aparece el modal el momento en que se permite al usuario
  quitar y editar la cantidad de kitties ...
-->  checar carritos de pagina de amazon y waltmart para validar idea anterior 
--> el metodo para remover items del cart deberia identificar que kitty en especifico se desea remover
 */

var kitties = [
  {
    id: 'ky-0',
    name: 'Kitty 1',
    thumbnail: 'landing-kitty01.svg',
    price: 150
  },
  {
    id: 'ky-1',
    name: 'Kitty 2',
    thumbnail: 'landing-kitty03.svg',
    price: 250
  },
  {
    id: 'ky-2',
    name: 'Kitty 3',
    thumbnail: 'landing-kitty05.svg',
    price: 250
  },
  {
    id: 'ky-3',
    name: 'Kitty 4',
    thumbnail: 'landing-kitty07.svg',
    price: 250
  },
  {
    id: 'ky-4',
    name: 'Kitty 5',
    thumbnail: 'landing-kitty09.svg',
    price: 250
  },
  {
    id: 'ky-5',
    name: 'Kitty 6',
    thumbnail: 'landing-kitty11.svg',
    price: 250
  },
  {
    id: 'ky-6',
    name: 'Kitty 7',
    thumbnail: 'landing-kitty13.svg',
    price: 250
  },
  {
    id: 'ky-7',
    name: 'Kitty 8',
    thumbnail: 'landing-kitty15.svg',
    price: 250
  }
];

//var order = [];


function render() {
  for (var i = 0; i < kitties.length; i++) {
    var kitty = kitties[i];
    $('.js-gallery-list').append(`
    <li class="kitty ${kitty.id}">
      <h3 class="title">${kitty.name}</h3>
      <img src="https://www.cryptokitties.co/images/${kitty.thumbnail}"/>
      <p>$${kitty.price}</p>
    </li>
    `);
  }
}

function initListeners() {
  $('.js-gallery-list').on('click', '.kitty', initCart);
  $('.js-btn-cart').on('click', openMenu);
  $('.js-btn-close').on('click', closeMenu);
}

const Cart = {
  order: [],
  sum: function() {
    let totalSum = 0;
    for (let i = 0; i < this.order.length; i++) {
      totalSum += this.order[i].price;
    }
    console.log(totalSum);
    return totalSum;
  },
  remove: function() {

  },
  edit: function() {

  },
  list: function() {
    let li = ` `;
    console.log(this.order)
    for (let i = 0; i < this.order.length; i++) {
      li += `${this.order[i].name} ${this.order[i].price} \n`;
    }
    console.log(li);
  }
}


function initCart() {
  var id = $(this).attr('class').split(' ')[1];
  for (let i = 0; i < kitties.length; i++) {
    if(id === kitties[i].id) {
      Cart.order.push(kitties[i]);
    }
  }
}

function closeMenu() {
  $('.js-btn-cart').removeClass('hidden');
  $('.js-shopping-cart').addClass('hidden');
  $('.js-btn-close').addClass('hidden');
}

function openMenu() {
  $('.js-btn-close').removeClass('hidden');
  $('.js-shopping-cart').removeClass('hidden');
  $('.js-btn-cart').addClass('hidden');
  Cart.sum();
  Cart.list();
}
$(function () {
  render();
  initListeners();
});