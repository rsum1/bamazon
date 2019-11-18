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
      name: 'item',
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
      console.log(answer.item)
    })
}