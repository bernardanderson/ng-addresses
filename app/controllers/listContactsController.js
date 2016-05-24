"use strict";

app.controller("listContactsController", function($scope, AddressListService){

  $scope.addressList = AddressListService.currentAddresses;
});