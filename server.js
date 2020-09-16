const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {


    res.render('home', {
        name: 'maRtíN ceRVAntEs'
    });

});

app.get('/about', (req, res) => {


    res.render('about');

});


app.listen(port, () => {
    console.log(`Listening for requests on port ${ port }`);
});