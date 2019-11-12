const { Router } = require('express');
const photoRouter = Router({ mergeParams: true });
const { Photo, Country, User } = require('../models.js')

//merge params allows us to carry the countryID over from index. 
// Note: "mergeParams" let's us use the :countryId slug that we used in our base endpoint URL. Also, notice how we imported both models. There's a good chance we'll want to use the Country model here, too.

// index
photoRouter.get('/', async (req, res) => {
  //the next line will find who the country is. give me all the photos from the countryId
  // const countryId = req.params.countryId
  // const photos = await Photo.findAll({ where: { countryId } })
  const photos = await Photo.findAll()
  res.json({ photos })
  // console.log(photo)
})

photoRouter.get('/:id/country', async (req, res) => {
  const id = req.params.id
  //the next line will find who the country is. give me all the photos from the countryId
  // const countryId = req.params.countryId
  // const photos = await Photo.findAll({ where: { countryId } })
  const photos = await Photo.findAll({
    where: {
      countryId: id
    }
  })
  res.json({ photos })
})


// show
photoRouter.get('/:id/user', async (req, res) => {
  const id = req.params.userId
  const photo = await Photo.findByPk(id)
  res.json({ photo })
})

// create
photoRouter.post('/', async (req, res) => {
  console.log(req)
  const countryId = req.body.countryId
  const userId = req.body.userId
  const data = req.body
  console.log(data)
  const country = await Country.findByPk(countryId)
  const user = await User.findByPk(userId)
  const photo = await Photo.create(data)
  //below: we are grabbing the photo and telling it who the country is
  //this will also make sure one photo only has one country
  await photo.setCountry(country)
  await photo.setUser(user)
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
