const mysql = require('mysql')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const saltRounds = 10

const signup = async(req, res) => {
    const { user_email, user_password } = req.body
    let sql = "INSERT INTO user_info (user_email, user_password) VALUES (?, ?)"

    let hash = await argon2.hash(user_password) 
    console.log(hash)


    pool.query(sql, [user_email, hash], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('user_email is taken')
        return handleSQLError(res, err)
      }
      return res.send('Sign-up successful')
    })
  }

  const login = (req, res) => {
    const { user_email, password } = req.body
    let sql = "SELECT * FROM user_info WHERE user_email = ?"
    sql = mysql.format(sql, [ user_email ])
  
    pool.query(sql, async(err, rows) => {
      if (err) return handleSQLError(res, err)
      if (!rows.length) return res.status(404).send('No matching users')
  
      const hash = rows[0].user_password
      console.log(hash)
      let match = await argon2.verify(hash, password)
      if (!match) {
        res.status(401).json({msg: "Your password does not match."})
      } 
      res.json({msg: "Your password is a match."})
    }) 
  };
  
  module.exports = {
    signup,
    login
  }
  