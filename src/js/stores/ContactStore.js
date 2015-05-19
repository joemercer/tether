
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
const ActionCreator = require('../actions/TodoActionCreators');
const ContactActionCreator = require('../actions/ContactActionCreators');

const PouchDB = require('pouchdb');

let db = new PouchDB('contacts');

function addItem(name, cadence) {
	var now = new Date();
  db.put({
    _id: new Date().toJSON(),
    name: name,
    cadence: cadence, // number of messages to send monthly
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
			ActionCreator.addItem(contact.name);
			// updateContact
			var now = new Date();
			now.setTime(now.getTime() + 60*1000);
			contact.nextTimeToSendMessage = now;
			ContactActionCreator.updateContact(contact);
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
      // create new messages
      case Constants.ActionTypes.CREATE_MESSAGES:
      	createMessages();
        break;
      case Constants.ActionTypes.UPDATE_CONTACT:
      	updateItem(action.contact).then(function(resp){
          ContactStore.emitChange();
        });
        break;
    }
  })

});



module.exports = ContactStore;
