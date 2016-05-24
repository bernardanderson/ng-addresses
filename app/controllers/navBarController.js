"use strict";

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
