const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = [
  {
    _id: 1,
    to: 'Mom',
    message: '',
    completed: false,
    score: 1500
  },
  {
    _id: 2,
    to: 'Grandma',
    message: '',
    completed: false,
    score: 1400
  },
  {
    _id: 3,
    to: 'Jeff',
    message: '',
    completed: false,
    score: 1100
  }
];

// task
// - _id
// - text
// - createdTime
// - generatorId (thing that generated it)
// - completed
// - score (how important it is)

let _id = 0;

// add private functions to modify data
function addItem(to, completed=false) {
  _data.push({_id, to, completed});
  _id++;
}

function completeItem(_id) {
  _data.forEach(function(task){
    if (task._id) {
      task.completed = true;
    }
  });
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
      // add a task
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
      // complete a task
      case Constants.ActionTypes.COMPLETE_TASK:
        completeItem(action._id);
        TodoStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = TodoStore;
