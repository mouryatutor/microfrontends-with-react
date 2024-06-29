import faker from "faker";

let carts = `<div>You have ${faker.random.number()} items in your cart </div>`

document.querySelector('#dev-carts').innerHTML = carts;