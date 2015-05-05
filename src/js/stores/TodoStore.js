const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = [];
let _id = 1;

// add private functions to modify data
function addItem(title, completed=false) {
  _data.push({_id, title, completed});
  _id++;
}

function clearItems() {
  _data = [];
}

// Facebook style store creation.
let TodoStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      tasks: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.ADD_TASK:
        let text = action.text.trim();
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          addItem(text);
          TodoStore.emitChange();
        }
        break;
      case Constants.ActionTypes.CLEAR_TASKS:
        clearItems();
        TodoStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = TodoStore;
