var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

	Contacts: {

		add: function(item) {
			AppDispatcher.handleViewAction({
	      type: Constants.ActionTypes.ADD_CONTACT,
	      item: item
	    });
		},

		update: function(item) {
			AppDispatcher.handleViewAction({
	      type: Constants.ActionTypes.UPDATE_CONTACT,
	      item: item
	    });
		},

		createMessages: function() {
			AppDispatcher.handleViewAction({
	      type: Constants.ActionTypes.CREATE_MESSAGES
	    });
		}

	},

	Messages: {
		add: function(item) {
	    AppDispatcher.handleViewAction({
	      type: Constants.ActionTypes.ADD_MESSAGE,
	      item: item
	    });
	  },

	  update: function(item) {
	    AppDispatcher.handleViewAction({
	      type: Constants.ActionTypes.UPDATE_MESSAGE,
	      item: item
	    });
	  }
	}

};
