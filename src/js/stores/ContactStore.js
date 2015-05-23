
// TaskGeneratorStore generates tasks

// TaskGenerator
// - task that will be generated
// - when to next generate the task
// - lastTimeGenerated


// Contact
// - info about what type of task to generate
// - nextTimeToGenerateTask






// _________

// In general

// We should probably have Contacts, and Messages, and Users
// Contacts generate new Messages (in draft format)
// Users send those Messages out 



const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');
const ActionCreator = require('../actions/ActionCreators');

const PouchDB = require('pouchdb');

let db = new PouchDB('contacts');

function addItem(name, email, cadence) {
	var now = new Date();
  return db.put({
    _id: now.toJSON(),
    name: name,
    email: email,
    cadence: cadence, // number of messages to send yearly
    nextTimeToSendMessage: now
  });
};

function updateItem(item) {
  var updateItem = function(doc){
    db.put(item);
  };
  return db.get(item._id).then(updateItem);
};

function getAll() {
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
};

function createMessages() {
	getAll().then(function(contacts){
		var now = new Date();
		contacts.filter(function(contact){
			return (now >= contact.nextTimeToSendMessage);
		}).forEach(function(contact){
			// addTask
			ActionCreator.Messages.add({
				to: contact.name
			});
			// updateContact
			now.setTime(now.getTime() + 5*1000);
			contact.nextTimeToSendMessage = now;
			ActionCreator.Contacts.update(contact);
		});
	});
};

// Facebook style store creation.
let ContactStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll() {
    return getAll();
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
    	// add new contact
      case Constants.ActionTypes.ADD_CONTACT:
      	addItem(action.item.name, action.item.email, action.item.cadence).then(function(resp){
      		ContactStore.emitChange();
      	});
        break;
    	// update contact
      case Constants.ActionTypes.UPDATE_CONTACT:
      	updateItem(action.item).then(function(resp){
          ContactStore.emitChange();
        });
        break;
      // create new messages
      case Constants.ActionTypes.CREATE_MESSAGES:
      	createMessages();
        break;
    }
  })

});



module.exports = ContactStore;
