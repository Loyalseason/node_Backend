const express = require('express');

const app = express();
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router')

const cors = require('cors')
const morgan = require('morgan')
 
app.use(cors({
    origin : 'http://localhost:3000',
}));
app.use(morgan('combined'))

app.use(express.json());
app.use(planetsRouter);
app.use(launchesRouter)

app.get('', );

module.exports = app; 