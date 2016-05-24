"use strict";

// This factory allows the storing and retrieval of the addresses across all controllers
app.factory('AddressListService', function(){

  return {

    currentAddresses: [],

    clearAddressArray: function() {
      this.currentAddresses.splice(0);
    },

    update: function(sentNewAddressObject) {
      this.currentAddresses.push(sentNewAddressObject);
    }
  };

});

app.factory('XHRCalls', function($q, $http, AddressListService){

  return {

    getAddresses: function(sentID) {

      return $q(function(resolve, reject){

        $http.get(`https://ba-addressbook.firebaseio.com/addressBook/${sentID}.json`)
        .success(function(addressCollection){
          Object.keys(addressCollection).forEach(function(key){
            addressCollection[key].id = key;
            AddressListService.update(addressCollection[key]);
          });
          resolve();
        })
        .error(function(error) {
          reject(error);
        });
      });
    }
  };
});