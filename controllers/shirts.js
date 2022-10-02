const res = require("express/lib/response");
const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error"); 

const getAllShirts = (req, res) => {
    let sql = "SELECT * FROM order_items"
    console.log("GET ALL SHIRTS***************")
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
};

const getShirtsById = (req, res) => {
    let sql = "SELECT * FROM order_items WHERE shirt_id = ?"
    sql = mysql.format(sql, [req.params.id])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
};

const postNewShirts = (req, res) => {
    const { shirt_id, shirt_name, shirt_quantity, shirt_price } = req.body
    let sql = "INSERT INTO order_items (shirt_id, shirt_name, shirt_quantity, shirt_price) VALUES (?, ?, ?, ?)"
    sql = mysql.format(sql, [ shirt_id, shirt_name, shirt_quantity, shirt_price ])

    pool.query(sql, (err, results) => {
        if (err) return handleSQLError(res, err)
        return res.json({ message: `Added ${shirt_name} to order_items` });
      })
}

const updateShirtsbyId = (req, res) => {
    const { shirt_name, shirt_quantity, shirt_price} = req.body
    let sql = "UPDATE order_items SET shirt_name = ?, shirt_quantity = ?, shirt_price = ? WHERE shirt_id = ?" 
    sql = mysql.format(sql, [ shirt_name, shirt_quantity, shirt_price, req.params.shirt_id ])

    pool.query(sql, (err, results) => {
        if (err) return handleSQLError(res, err)
        return res.status(204).json();                  //write a better res.status
      })
}

const deleteShirtsById = (req, res) => {
    let sql = "DELETE FROM order_items WHERE shirt_id = ?"
    sql = mysql.format(sql, [ req.params.shirt_id ])

    pool.query(sql, (err, results) => {
        if (err) return handleSQLError(res, err)
        return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
      })
};




module.exports = {
    getAllShirts,
    getShirtsById,
    deleteShirtsById,
    postNewShirts,
    updateShirtsbyId
}