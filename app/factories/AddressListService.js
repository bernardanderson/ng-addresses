"use strict";

// This factory allows the storing, retrieval and clearing of the addresses across all controllers
app.factory('AddressListService', function(){

  return {

    // This is the local machine array for holding the addresses pulled from the database
    currentAddresses: [],

    // This method clears the array (which )
    clearAddressArray: function() {
      this.currentAddresses.splice(0);
    },

    updateAddressArray: function(sentNewAddressObject) {
      this.currentAddresses.push(sentNewAddressObject);
    },
  
    deleteAddressArrayItem: function(sentID) {
      for (var i = 0; i < this.currentAddresses.length; i++) {
        for (var key in this.currentAddresses[i] ) {
          if (this.currentAddresses[i][key] === sentID) {
            this.currentAddresses.splice(i, 1);
            break;
          };
        }
      }
    }
  };
});

