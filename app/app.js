"use strict";

var app = angular.module("addressBookApp", ["ngRoute"]);

// $routeProvider is a method in ngRoute
app.config(function($routeProvider) {
  $routeProvider.
    when("/addresses/list", {
      templateUrl: "partials/addressesListContacts.html",
      controller: "listContactsController"
    }).
    when("/addresses/new", {
      templateUrl: "partials/addressesNewContact.html",
      controller: "newEntryController"
    }).
    otherwise("/addresses/list");
});

// This factory allows the storing and retrieval of the addresses across all controllers
app.factory('AddressListService', function(){
  return {
    currentAddresses: [
      {
        name: "Bernie Anderson",
        address: "Home",
        telephone: "615-911-4111",
        email: "junk@hotmail.com"
      }
    ],
    update: function(sentNewAddressObject) {
      this.currentAddresses.push(sentNewAddressObject);
    }
  };
});