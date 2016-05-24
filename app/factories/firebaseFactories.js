"use strict";

// This factory allows the storing, retrieval and clearing of the addresses across all controllers
app.factory('AddressListService', function(){

  return {

    currentAddresses: [],

    clearAddressArray: function() {
      this.currentAddresses.splice(0);
    },

    updateAddressArray: function(sentNewAddressObject) {
      this.currentAddresses.push(sentNewAddressObject);
    }
  };
});

app.factory('XHRCalls', function($q, $http, AddressListService){

  return {

    xhrAddresses: function(sentID, xhrMethod, sentData) {

      return $q(function(resolve, reject){

        $http[xhrMethod](`https://ba-addressbook.firebaseio.com/addressBook/${sentID}.json`, sentData)
        .success(function(returnedItem){

          if (xhrMethod === "get" && sentID === "") {
            Object.keys(returnedItem).forEach(function(key){
              returnedItem[key].id = key;
              AddressListService.updateAddressArray(returnedItem[key]);
            });
            resolve();
          } else if (xhrMethod === "delete") {
            resolve();
          } else if (xhrMethod === "post") {
            sentData.id = returnedItem;
            AddressListService.updateAddressArray(sentData);
            resolve();
          }
        }).error(function(error) {
          reject(error);
        });
      });
    }
  };
});