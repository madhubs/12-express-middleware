'use strict';

const debug = require('debug')('http:storage')
const createError = require('http-errors')
const Toy = require('../model/toy')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})

const storage = module.exports = {};
// const memory = {};
// const memory = {
//   'toy': { //this is the schema, from route-toy.js
//     '123-456-789': {_id: '123-456-789', name: 'barney', desc: 'purple dino'}
//   },//copied the id from terminal so that he could make a GET request.
//'kid': {
//  'id...'

//}
// }

//POST (a storage method)
storage.create = function(item) { //got rid of schema and left just item because....
  debug('#create');
  // debugger;
  return new Promise((resolve, reject)=> {
    if(!name) return reject(createError(400, 'cannot create; name required'));//changed to name from schema
    if(!item) return reject(createError(400'cannot create; desc required'));

    let toy = new Toy(item.name, item.desc);

    return fs.writeFileProm(`${__dirname}/../data/toy/${toy._id}.json, JSON.stringify(toy)`)
      .then(() => resolve(item)) //take the item and hand to route (route-toy.js) and then move to the response model.
      .catch(reject);
  });
};

storage.fetchOne = function(itemId) { //deleted schemaId
  debug('#fetchOne');
  return new Promise((resolve, reject) => {
    if(!itemId) return reject(createError(400, 'cannot get item; itemId required'));

    return fs.readFileProm(`${__dirname}/../data/toy${itemId}.json`)
      .then(buff => resolve(JSON.parse(buff.toString())))
      .catch(err => {
        console.error(err);
        return err;
      });
  });
};

storage.fetchAll = function() {

};

storage.update = function(schema, item) {
  debug('#update');

  return new Promise((resolve, reject) => {
    if(!schema) return reject(new Error('cannot update item; schema required'));
    if(!item) return reject(new Error('cannot update item; updated item required'));

  });
};

storage.delete = function() {

};

//DELETE

// storage.delete = function() {
//
// };
