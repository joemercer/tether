const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

const PouchDB = require('pouchdb');

let db = new PouchDB('messages');

// add private functions to modify data
function addItem(to, content='', sent=false, score=1500) {
  return db.put({
    _id: new Date().toJSON(),
    to: to,
    content: content,
    sent: sent,
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
let MessageStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll() {
    return db.allDocs({include_docs: true}).then(function(resp){
      return new Promise(function(resolve, reject){
        if (resp) {
          resolve(resp.rows.map(row => row.doc));
        }
        else {
          reject({error: '!!! Error: no response'});
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
        addItem(action.item.to).then(function(resp){
          MessageStore.emitChange();
        });
        break;
      // update a task
      case Constants.ActionTypes.UPDATE_MESSAGE:
        updateItem(action.item).then(function(resp){
          MessageStore.emitChange();
        });
        break;
    }
  })

});

module.exports = MessageStore;
