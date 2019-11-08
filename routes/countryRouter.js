const { Router } = require('express');
const countryRouter = Router();
const { Country } = require('../models.js')

// index
countryRouter.get('/', async (req, res) => {
  const countries = await Country.findAll()
  res.json({ countries })
})

// show
countryRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const country = await Country.findByPk(id)
  res.json({ country })
})

// // create
// countryRouter.post('/', async (req, res) => {
//   const data = req.body
//   const country = await Country.create(data)
//   res.json({ country })
// })

// // update
// countryRouter.put('/:id', async (req, res) => {
//   const id = req.params.id
//   const data = req.body

//   const country = await Country.findByPk(id);
//   await country.update(data)
//   res.json({ country })
// })

// // delete
// countryRouter.delete('/:id', async (req, res) => {
//   const id = req.params.id
//   const country = await Country.findByPk(id);
//   await country.destroy()
//   res.json({ country })
// })


module.exports = countryRouter