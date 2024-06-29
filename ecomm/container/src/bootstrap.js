import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'carts/CartsShow';

productsMount(document.querySelector("#dev-products-host"));
cartMount(document.querySelector("#dev-carts-host"));
console.log("Container file");