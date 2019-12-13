const express = require('express')

const Router = express.Router();


Router.get('/', function(req, res){
  return res.json([
    {
      name: '1'
    }
  ])
})

module.exports = Router
