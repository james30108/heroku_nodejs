const { Sequelize } = require("sequelize")

module.exports = () => {    
    
    // create
    // const create = require("mysql2").createConnection({
    //     host     : "localhost",
    //     user     : "root",
    //     password : "",

    // })
    const create = require("mysql2").createConnection({
        host     : "migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user     : "zkykl3itog76ird2",
        password : "ms1r1b2la5a5jp2e",

    })

    create.query("CREATE DATABASE IF NOT EXISTS demo_nodeJS")

    // connect
    // const connect = new Sequelize("demo_nodeJS", "root", "", {
    //     host: "localhost",
    //     dialect: "mysql",
    //     sync: true,
    //     define: {
    //       timestamps: false
    //     }
    // })
    const connect = new Sequelize("wuyet86nf37hbuz0", "zkykl3itog76ird2", "ms1r1b2la5a5jp2e", {
        host: "migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        dialect: "mysql",
        sync: true,
        define: {
          timestamps: false
        }
    })

    return connect

}