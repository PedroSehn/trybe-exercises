const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
 console.log(`Ola ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone:${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`)

}

customerInfo(order);

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.payment.total = 'R$ 50.00';
  order.order.pizza.margherita = 'Muzarella';
  order.order.pizza.pepperoni = 'Calabresa';
  console.log(`Ola ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${order.order.pizza.margherita}, ${order.order.pizza.pepperoni} e ${order.order.drinks.coke.type} é de ${order.payment.total}`)

//"Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
}

orderModifier(order);

