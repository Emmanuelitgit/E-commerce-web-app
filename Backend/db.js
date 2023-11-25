import mysql from 'mysql'

 const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Emma19571!",
    database: "commerce_fashion"
  })

  export default db