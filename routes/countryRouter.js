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


module.exports = countryRouter