const orders = [
  {
    date: '2022-02-24',
    subtotal: 99.99,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Old Shoe',
          price: 34.56,
        },
        quantity: 2,
      },
    ],
  },
]

function getAllOrders() {
  return orders
}

module.exports = {
  getAllOrders,
}
