const res = require("express/lib/response");
const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error"); 



const getAllOrderDetails = (req, res) => {
    let sql = "SELECT * FROM order_details"

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
};


const getOrderById = (req, res) => {
    let sql = "SELECT * FROM order_details WHERE order_num = ?"
    sql = mysql.format(sql, [req.params.order_num])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
};





module.exports = {
    getAllOrderDetails,
    getOrderById
}