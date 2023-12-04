const express = require('express');

const app = express();
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router')
const path = require('path');

const cors = require('cors')
const morgan = require('morgan')
 
app.use(cors({
    origin : 'http://localhost:3000',
}));
app.use(morgan('combined'))

app.use(express.json());
app.use(planetsRouter);
app.use('/launches',launchesRouter);


// app.get('/*', (req, res)  => {
//     res.sendFile(path.join(__dirname, '..', 'public'));
// });

app.use(express.static(path.join(__dirname, '..', 'public'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    },
}));
module.exports = app; 