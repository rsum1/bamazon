const mysql = require('mysql2')
const inquirer = require('inquirer')

// create the connection information for the sql database
const db = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'root',
  database: 'bamazon_db'
})

// connect to the mysql server and sql database
db.connect(err => {
  if (err) throw err
  // show user the current inventory
  displayInventory()
  // run the start function after the connection is made to prompt the user
  start()
})

var orderTotal = 0

function displayInventory() {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) throw err
    console.log(result)
  })
}

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt([{
      name: 'id',
      type: 'input',
      message: 'Please enter the ID of the item you would like to purchase:',
    },
    {
      name: 'units',
      type: 'input',
      message: 'How many units would you like to purchase?'
    }
    ])
    .then(function (answer) {
      checkQuantity(answer)
    })
}

function checkQuantity(params) {
  db.query(`SELECT * FROM products`, function (err, result) {
    if (err) throw err
    var chosenItem = result[params.id - 1]
    var quantityOrdered = parseInt(params.units)
    var quantityAvailable = chosenItem.stock_quantity
    if (quantityAvailable >= quantityOrdered) {
      console.log('Order Placed')
      updateQuantity(params.id, quantityAvailable, quantityOrdered)
      console.log(`Your total is ${displayOrderTotal(chosenItem, quantityOrdered)}`)
      inquirer
        .prompt({
          name: 'orderAgain',
          type: 'list',
          message: 'Would you like to keep shooping?',
          choices: ['Yes', 'No']
        })
        .then(function (answer) {
          answer.orderAgain === 'Yes' ? start() : db.end()
        }
        )
    } else {
      console.log("Not enough stock")
    }
  })
  start()
}

function updateQuantity(id, quantityAvailable, quantityOrdered) {
  db.query(`UPDATE products SET stock_quantity = ${quantityAvailable - quantityOrdered} WHERE id = ${id}`)
}
function displayOrderTotal(chosenItem, quantityOrdered) {
  orderTotal += chosenItem.customer_price * quantityOrdered
  return orderTotal
}