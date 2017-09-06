'use strict';

const debug = require('debug')('http:storage');
const createError = require('http-errors');
const Toy = require('../model/toy');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});

const storage = module.exports = {};

//POST (a storage method)
storage.create = function(itemId) {
  debug('#create');
  // debugger;
  return new Promise((resolve, reject)=> {
    // if(!schema) return reject(new Error('cannot create; schema required'));
    if(!item.name || !item.desc) return reject(createError(400, 'cannot create; item required'));
    if(!item.desc) return reject(createError(400, 'cannot create; desc required'))
    // return reject(createError(400, 'cannot create; valid name required'))

    let toy = new Toy(item.name, item.desc);

    return fs.writeFileProm(`${__dirname}/../data/toy${toy._id}/${newToy._id}.json`, JSON.stringify(toy)) //changed from item
      .then(() => resolve(toy)) //take the item and hand to route (route-toy.js) and then moved to the response model. Pass in the toy as a stringified object.
      .catch(reject);//or console.error //something went wrong with the server. And we've created that 500 error in the error middleware file.
  });
};


storage.fetchOne = function(itemId) {
  debug('#fetchOne')

  return new Promise((resolve, reject) => {
    // if(!schema) return reject(new Error('cannot get item; schema required'))
    if(!itemId) return reject(createError('cannot get item; itemId required'))

    return fs.readFileProm(`${__dirname}/../data/toy/${itemId}.json`)
    .then(buff => {
      try {
        let toy = JSON.parse(buff.toString())
        return resolve(toy)
      } catch(e) {
        return reject(e)
      }
    })
    .catch(reject)
  })
}

  storage.fecthAll = function(schema) {
    debug('#fetchAll')
//
//   return new Promise((resolve, reject) => {  //a promise to return an array of objects
//     if(!schema) return reject(new Error('cannot get items; schema required'))
//
//     return fs.readdirProm(`${__dirname}/../data/${schema}`)
//     .then(filepaths => { //changed ids to filepaths for lab 9 but looks like it should be back to ids?
//       let data = Array.prototype.map.call(ids, (id => id.split('.', 1).toString()))//grab one thing(not the first thing necessarily), so it returns the id in string form. the tostring takes the interior array and strinifys it.
//       return resolve(data)
//     })
//     .catch(reject)
//   });
// }


storage.update = function(itemId) {
  debug('#update')

//   return new Promise((resolve, reject) => {
//     if(!schema) return reject(new Error('cannot update; schema required'))
//     if(!item) return reject(new Error('cannot update; item required'))
//
//     return fs.writeFileProm(`${__dirname}/../data/${schema}/${item._id}.json`, JSON.stringify(item))
//     .then(resolve)
//     .catch(reject)
//   })
// }

//DELETE
storage.destroy = function(itemId) {
  debug('#destroy')

//   return new Promise((resolve, reject) => {
//     if(!schema) return reject(createError('cannot delete item; schema required'))
//     if(!itemId) return reject(createError('cannot delete item; itemId required'))
//
//     return fs.unlinkProm(`${__dirname}/../data/toy/${itemId}.json`)//removed schema, replaced with toy
//     .then(resolve)
//     .catch(reject)
//   });
// }
