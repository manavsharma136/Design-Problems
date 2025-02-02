const pizzaFactory = require("./factory");

function main() {
  const pizzaType ="cheese";
  try {
    const pizza = pizzaFactory.createPizza(pizzaType);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  } catch (error) {
    console.log(error.message);
  }
}

main();