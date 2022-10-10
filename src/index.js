const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { urlencoded } = require('express');


// init
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

// routes
app.use('/api/charges', require('./routes/charges.routes'));
app.use('/api/employees', require('./routes/employees.routes'));

// run
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});