const express = require ('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const indexRouter = require('./routes/indexRoute');

const app = express();
dotenv.config();

app.use(cors());
dotenv.config();

app.use('/', indexRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})