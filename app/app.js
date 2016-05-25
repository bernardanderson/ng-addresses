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
