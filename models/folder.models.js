/*

    This is a repository but the models are in here as well


    Write Folder.extention functions that will be database query methods 

    end with module.exports = Customer This will allow the whole application to use these extention function when using const folder = require("/.folder.js")
    In another file


    const sqlDatabase = require("./database.js")

    Use sqlDatabase.query("sql statement") inside of Folder.extention functions to open connection and insert or query database
*/

const sqlDatabase = require("./database.js")

//constructor for Folder object