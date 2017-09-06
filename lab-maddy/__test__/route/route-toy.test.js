'use strict';

const superagent = require('superagent');
const server = require('../../server');
const Promise = require('bluebird');
const fs = Promise.promisifyAll('fs');
require('jest');

// require('jest');
// const faker = require('faker');
// const server = require('../../server');
// const superagent = require('superagent');
//
describe('Testing Toy Routes', function() {


  beforeAll(done => {//set up just hte POST tests

    done();
  });
  afterAll(done => server.close(done));//tear down just the post tests

  describe('requests made to /api/toy', () => {
    describe('using GET method', () => {
      test('should return a toy object given a properly formatted request', done => {

      });
    });
  });
});

describe('DELETE requests', ()=> {
  desscribe('Valid Requests', ()=>{
    beforeAll((done => {
      suepragent.delete(':3000/api/toy')
      .query({_id: this.mockToy._id})
      .then(res => {
        this.resDelete = res
        done();
      })
      test('should remove the record from the toy directory', done => {
        fs.readdirProm('{$__dirname}/../../data/toy')
        .then(files => {
          let expectedFalse = files.includes(`${this.mockToy._id}.json`) //validate or expectedFalse returns true or false
          console.log(files); //should see the preexisting files in the data/toy directory in temrinals
        })

      })
    })
  })

})
