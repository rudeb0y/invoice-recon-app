const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sql.connect(config.db).then(pool => pool.request()
  .query('select \'Connected to server ok\' as status_message')).then((result) => {
  console.dir(result.recordset[0].status_message);
})
  .then(() => {
    app.listen(config.port, () => {
      console.info(`App running on ${config.port}`);
    });
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });
