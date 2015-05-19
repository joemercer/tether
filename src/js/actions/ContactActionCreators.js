var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  createMessages: function() {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.CREATE_MESSAGES
    });
  },

  updateContact: function(contact) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.UPDATE_CONTACT,
      contact: contact
    });
  }

};
