"use strict";

var app = angular.module("addressBookApp", ["ngRoute"]);

// This setup allows the usage of partials for the various parts of the app.
//  Note: $routeProvider is a method in ngRoute
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
