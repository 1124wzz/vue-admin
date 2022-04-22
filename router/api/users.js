const express = require('express')
const router = express.Router()

const md5 = require('blueimp-md5')

const User = require('../../module/user')
const Aside = require('../../module/aside')
const TableDate = require('../../module/tableData')
const EchartsModule = require('../../module/echartsModule')
const Mall = require('../../module/mall')


router.post('/register', (req, res) => {
  console.log(req.body)
//   const newUser = new User({
//     name: req.body.name,
//     age: req.body.age,
//     sex: req.body.sex,
//     birthday: req.body.birthday,
//     address: req.body.address
//
//   })
//   newUser.save()
//       .then(user => res.json(user))
//       .catch(err => console.log(err))
// })
  const newAside = new Aside({
    path: req.body.path,
    name: req.body.name,
    label: req.body.label,
    icon: req.body.icon,
    url: req.body.url

  })
  newAside.save()
      .then(user => res.json(user))
      .catch(err => console.log(err))
})

router.get('/user-info', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  User.find()
      .then(user => res.json(user))
      .catch(err => console.log(err))
})

router.get('/main', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  TableDate.find()
      .then(data => res.json(data))
      .catch(err => console.log(err))
})

router.get('/aside', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  Aside.find()
      .then(aside => res.json(aside))
      .catch(err => console.log(err))
})

router.get('/echarts', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  EchartsModule.find()
      .then(echarts => res.json(echarts))
      .catch(err => console.log(err))
})

router.get('/mall', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  Mall.find()
      .then(echarts => res.json(echarts))
      .catch(err => console.log(err))
})

router.post('/addUser', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  console.log('user')
  User.findOne({name: req.body.name})
      .then(user => {
        if(user) {
          return res.json({
            err_code: 400,
            message: '用户已存在'
          })
        }else {
          const newAside = new User({
            name: req.body.name,
            age: req.body.age,
            sex: req.body.sex,
            birthday: req.body.birthday,
            address: req.body.address
          }).save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
        }
      })
})

router.post('/editUser', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  User.updateOne({name: req.body.name}, {
    age: req.body.age,
    sex: req.body.sex,
    birthday: req.body.birthday,
    address: req.body.address
  }).catch(err => console.log(err))
})

router.post('/deleteUser', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  console.log(req.body.name)
  User.deleteOne({name: req.body.name}, ).catch(err => console.log(err))
})


router.post('/addMall', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  console.log(req.body)
  // res.setHeader("content-type","text/json; charset=utf-8")
  Mall.findOne({name: req.body.name})
      .then(mall => {
        if(mall) {
          console.log(mall)
          return res.json({
            err_code: 400,
            message: '商品已存在'
          })
        }else {
          console.log(123)
          const newAside = new Mall({
            name: req.body.name,
            stock: req.body.stock,
            price: req.body.price,
            surplus_stock: req.body.surplus_stock
          }).save()
              .then(mall => res.json(mall))
              .catch(err => console.log(err))
        }
      })
})

router.post('/editMall', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  console.log(req.body)
  Mall.updateOne({name: req.body.name}, {
    stock: req.body.stock,
    price: req.body.price,
    surplus_stock: req.body.surplus_stock
  }).catch(err => console.log(err))
})

router.post('/deleteMall', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", '*')
  Mall.deleteOne({name: req.body.name}, ).catch(err => console.log(err))
})


module.exports = router
