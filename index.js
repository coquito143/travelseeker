const express = require('express')
const PORT = process.env.PORT || 3000;
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');




const app = express();
app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});


