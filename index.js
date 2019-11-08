const express = require('express')
const PORT = process.env.PORT || 3000;
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter')
const countryRouter = require('./routes/countryRouter')
const photoRouter = require('./routes/photoRouter')




const app = express();
app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use('/countries', countryRouter);
app.use('/users/:userId', userRouter);
app.use('/users/:userId/photos/:photoId', photoRouter);



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});


