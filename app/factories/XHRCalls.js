"use strict";

// This factory allows GET, POST, DELETE of addresses from the firebase database
app.factory('XHRCalls', function($q, $http, AddressListService){

  return {

    // This takes up to three arguments and queries the database based on those methods. When successful, the follow-up code is
    //  run depending on which xhrMethod was sent.
    xhrAddresses: function(sentID, xhrMethod, sentData) {

      // Set up as a promise
      return $q(function(resolve, reject){

        // Queries the database depending on which xhrMethod was requested
        $http[xhrMethod](`https://ba-addressbook.firebaseio.com/addressBook/${sentID}.json`, sentData)
        .success(function(returnedItem){

          // If a "GET" is requested with no ID (i.e. refresh the list view)
          if (xhrMethod === "get" && sentID === "") {

            // Add the database entries to the local array
            Object.keys(returnedItem).forEach(function(key){
              returnedItem[key].id = key;
              AddressListService.updateAddressArray(returnedItem[key]);
            });
            resolve();

            // If a "DELETE" is requested nothing extra needs to happen
          } else if (xhrMethod === "delete") {
            resolve();

            // If a "POST" is requested, then add the new entry to the private local array
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
