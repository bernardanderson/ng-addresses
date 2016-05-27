"use strict";

// This factory allows the storing, retrieval and clearing of the addresses in a private local array across all controllers
app.factory('AddressListService', function(){

  return {

    // This is s private local array for holding the addresses pulled from the database. Having an array like this allows
    //  its modification which then ng-repeat can "on-the-fly" update the address list page. Also, you don't have to do some many
    //  "GET" requests from the server.
    currentAddresses: [],

    // This method clears the array which is needed when switching to/from the address list view.
    clearAddressArray: function() {
      this.currentAddresses.splice(0);
    },

    // This allows the adding of new elements to the private local array
    updateAddressArray: function(sentNewAddressObject) {
      this.currentAddresses.push(sentNewAddressObject);
    },
    
    // This allows the deleting of a single address from the private local array which allows ng-repeat to autoupdate the list view.
    //  It loops through the array and when the .id is matched it splices it out.
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

