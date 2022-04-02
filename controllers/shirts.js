const res = require("express/lib/response");
const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error"); 

const getAllShirts = (req, res) => {
    let sql = "SELECT * FROM order_items"

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
};







module.exports = {
    getAllShirts
}