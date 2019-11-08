const { Router } = require('express');
const photoRouter = Router({ mergeParams: true });
const { Photo, Country } = require('../models.js')

//merge params allows us to carry the countryID over from index. 
// Note: "mergeParams" let's us use the :countryId slug that we used in our base endpoint URL. Also, notice how we imported both models. There's a good chance we'll want to use the Country model here, too.

// index
photoRouter.get('/', async (req, res) => {
  //the next line will find who the country is. give me all the photos from the countryId
  const countryId = req.params.countryId
  const photos = await Photo.findAll({ where: { countryId } })
  res.json({ photos })
})

// show
photoRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const photo = await Photo.findByPk(id)
  res.json({ photo })
})

// create
photoRouter.post('/', async (req, res) => {
  const countryId = req.params.countryId
  const data = req.body
  const country = await Country.findByPk(countryId)
  const photo = await Photo.create(data)
  //below: we are grabbing the photo and telling it who the country is
  //this will also make sure one photo only has one country
  await photo.setCountry(country)
  res.json({ photo })
})

// update
photoRouter.put('/:id', async (req, res) => {
  const id = req.params.id
  const data = req.body
  const photo = await Photo.findByPk(id);
  await photo.update(data)
  res.json({ photo })
})

// delete
photoRouter.delete('/:id', async (req, res) => {
  const id = req.params.id
  const photo = await Photo.findByPk(id);
  await photo.destroy()
  res.json({ photo }) //this responds to the front end on what we destroyed
})


module.exports = photoRouter