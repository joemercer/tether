const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

const PouchDB = require('pouchdb');

let db = new PouchDB('tasks');

// db.put({
//   _id: new Date().toJSON(),
//   to: 'Mom',
//   message: '',
//   completed: false,
//   score: 1500
// }).then(function() {
//   return db.put({
//     _id: new Date().toJSON(),
//     to: 'Grandma',
//     message: '',
//     completed: false,
//     score: 1400
//   });
// }).then(function() {
//   return db.put({
//     _id: new Date().toJSON(),
//     to: 'Jeff',
//     message: '',
//     completed: false,
//     score: 1100
//   });
// }).then(function () {
//   return db.allDocs({include_docs: true});
// }).then(function (response) {
//   console.log(response);
// }).catch(function (err) {
//   console.log(err);
// });



// task
// - _id
// - text
// - createdTime
// - generatorId (thing that generated it)
// - completed
// - score (how important it is)



// add private functions to modify data
function addItem(to, message='', completed=false, score=1500) {
  db.put({
    _id: new Date().toJSON(),
    to: to,
    message: message,
    completed: completed,
    score: score
  });
};

function updateItem(item) {
  var updateItem = function(doc){
    db.put(item);
  };
  return db.get(item._id).then(updateItem);
};

// Facebook style store creation.
let TodoStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll() {
    return db.allDocs({include_docs: true}).then(function(resp){
      return new Promise(function(resolve, reject){
        if (resp) {
          resolve(resp.rows.map(row => row.doc));
        }
        else {
          reject({error: 'ERROR: no response'});
        }
      });
    });
  },

  // return all documents filtered by filter
  getFiltered(filter) {
    return db.allDocs({include_docs: true}).then(function(resp){
      return new Promise(function(resolve, reject){
        if (resp) {
          resolve(resp.rows.map(row => row.doc));
        }
        else {
          reject({error: 'ERROR: no response'});
        }
      });
    }).then(function(resp){
      return new Promise(function(resolve, reject){
        if (!resp.error) {
          resolve(resp.filter(filter));
        }
        else {
          reject({error: 'ERROR: no response'});
        }
      });
    });
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      // add a task
      case Constants.ActionTypes.ADD_MESSAGE:
        let text = action.item.to.trim();
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          addItem(text);
          TodoStore.emitChange();
        }
        break;
      // update a task
      case Constants.ActionTypes.UPDATE_MESSAGE:
        updateItem(action.item).then(function(resp){
          TodoStore.emitChange();
        });
        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = TodoStore;
