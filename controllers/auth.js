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
    const { user_email, user_password } = req.body
    let sql = "SELECT * FROM user_info WHERE user_email = ?"
    sql = mysql.format(sql, [ user_email ])
  
    pool.query(sql, async(err, rows) => {
      if (err) return handleSQLError(res, err)
      if (!rows.length) return res.status(404).send('No matching users')
  
      const hash = rows[0].user_password
      console.log(hash)
      let match = await argon2.verify(hash, user_password)
      if (!match) {
        res.status(401).json({msg: "Your password does not match."})
      } 
      
      let unsignedToken = {
        user_id: rows[0].user_id, 
        user_email: rows[0].user_email
      }
      const token = jwt.sign(unsignedToken, process.env.SUPER_SECRET)  
      console.log(token)

      res.json( {
        msg: "Your password is a match.",
        token 
      } )
    }) 
  };

  const checkJWT = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json("Your not Authorized") 
    } 
    let bearer = req.headers.authorization.split(" ")
    let token = bearer[1]
    let decoded = await jwt.verify(token, process.env.SUPER_SECRET)
    console.log(decoded)
    req.user_id = decoded.user_id
    next()
}

  
  module.exports = {
    signup,
    login,
    checkJWT
  }
  