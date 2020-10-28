var sql = require('mysql');

var connection = sql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'Allstars9',
    database: 'quizlet_clone'
   
    });
 
connection.connect(error => {
    if(error) throw error
    console.log("Successfylly connected to the database")
})

// connection.query('SELECT * from users', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].email);
//   });

// var connection = new Connection(config);
// connection.on('connect', function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Connected');
//     }
// });

module.exports = connection; //makes connection available to the whole application

// The CommonJS (CJS) format is used in Node.js and uses require and module.exports to define dependencies and modules. The npm ecosystem is built upon this format.
// The ES Module (ESM) format. As of ES6 (ES2015), JavaScript supports a native module format. It uses an export keyword to export a module’s public API and an import keyword to import it.