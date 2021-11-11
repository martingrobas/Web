var uniqid = require('uniqid'); 

let mysql = require('mysql')

let db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root', 
    database: 'Productos',
});

db.connect();

module.exports = {
    listadoProductos:listadoProductos,
    prodPorId:prodPorId,
}


function listadoProductos(){
    return new Promise(function(resolve, reject) {
       db.query("SELECT * FROM productos", function(err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    })
}

function prodPorId(id){
    return new Promise(function(resolve, reject) {
        db.query("SELECT * FROM productos where id=?", id,function(err, rows) {
             if (err) {
                 reject(err);
             } else {
                 resolve(rows);
             }
         });
     })
}
