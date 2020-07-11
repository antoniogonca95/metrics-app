const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

const metricsRouter = require('./routes/metrics');

const MetricsStore = require('./data/metrics.store');

const app = express();

dotenv.config();

app.use(logger(process.env.STAGE));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/metrics', metricsRouter);

global.metricsStore = new MetricsStore();

module.exports = app;