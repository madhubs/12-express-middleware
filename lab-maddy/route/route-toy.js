'use strict';

const storage = require('../lib/storage');
const debug = require('debug')('http:route-toy');
//deleted model/toy and lib/response requires

module.exports = function(router) {
  router.post('/api/toy', (req, res, next) => { //added next- to pass control to the next middleware function
    debug('/api/toy POST');
    //deleted the try and the catch that were storing object in memory using storage module. good response and bad response.
    return storage.create(req.body)
    .then (toy => res.status(201).json(toy))
    .catch (err => next(err))
  });

  router.get('/api/toy:_id', (req, res, next) => {
    debug('/api/toy/:_id GET');
    //deleted the .then and .catch that take care of writing the status code and our custom message.
    return storage.fetchOne(req.params._id)
        .then(toy => res.json(toy))
        .catch(next)
    })
    router.get('/api/toy', (req, res, next) => { //Added from Scotts demo code
      debug('/api/toy GET')
    })
  });

  router.put('/api/toy', (req, res, next) => {
    debug('/api/toy PUT');
    if (req.url.query._id) { //deleted the 'if no body' (id, name, desc, material, price)then storage.update with the .then (status code- 204) and .catch(status code- 400).

    router.delete('/api/toy/:_id', (req, res, next) => {
      debug('/api/toy DELETE')
//   if(req.url.query._id) {
//     return storage.destroy('toy', req.url.query._id)
//     .then(() => response(res, 204))
//     .catch(err => response(res, 404, err.message))
//   }
//   response(res, 400, 'bad request; could not delete resource')
  });
};
