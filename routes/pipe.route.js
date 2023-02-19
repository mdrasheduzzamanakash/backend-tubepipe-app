const express = require('express');

const PipeRoute = express.Router();

const Pipe = require('../models/pipe.model');
const Enrolled = require('../models/Enrolled.model');



PipeRoute.route('/enrolled').get((req, res, next) => {
    Enrolled.find({}, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

PipeRoute.route('/enrolled').post((req, res, next) => {
    Enrolled.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

PipeRoute.route('/enrolled/:id').delete((req, res, next) => {
    Enrolled.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});


PipeRoute.route('/').get((req, res, next) => {
    Pipe.find({}, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

PipeRoute.route('/').post((req, res, next) => {
    Pipe.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

PipeRoute.route('/:id').get((req, res, next) => {
    Pipe.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});


PipeRoute.route('/:id').put((req, res, next) => {
    Pipe.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

PipeRoute.route('/:id').delete((req, res, next) => {
    Pipe.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

module.exports = PipeRoute;
