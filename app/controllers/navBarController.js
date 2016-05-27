"use strict";

// This simply assigns a navbar heading to a angular url
app.controller("navBarController", function($scope){
  $scope.navItems = [
  {
    name: "List Addresses",
    url: "#/addresses/list"
  }, {
    name: "New Address",
    url: "#/addresses/new"
  }];
});
