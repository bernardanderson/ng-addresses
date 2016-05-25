"use strict";

// This factory allows GET, POST, DELETE of addresses from the
//  firebase database
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
            sentData.id = returnedItem.name;
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
