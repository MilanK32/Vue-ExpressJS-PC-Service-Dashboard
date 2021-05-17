const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//express app
const app = express();

//morgan middleware
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// set port, listen for requests
const PORT = process.env.PORT || 5000;

//connect to db
const dbURI = 'mongodb+srv://milank32:griffin32@realmcluster.vlwke.mongodb.net/pc-service?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then((result) => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
    console.log('connected');
})
.catch((err) => {
    console.log(err);
});

const parts = require('./routes/api/partRoutes');

app.use('/api/parts', parts);



