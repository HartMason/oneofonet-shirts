const res = require("express/lib/response");
const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error"); 

const getAllUsers = (req, res) => {
    let sql = "SELECT * FROM user_info"

    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
};


const getUserById = (req, res) => {
    let sql = "SELECT * FROM user_info WHERE user_id = ?"
    sql = mysql.format(sql, [req.params.id])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
};







module.exports = {
    getUserById,
    getAllUsers
}