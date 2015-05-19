const keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
  	ADD_CONTACT: null,
  	UPDATE_CONTACT: null,
  	CREATE_MESSAGES: null,
  	ADD_MESSAGE: null,
  	UPDATE_MESSAGE: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
