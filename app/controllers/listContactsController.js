"use strict";

app.controller("listContactsController", function($scope, XHRCalls, AddressListService){

  AddressListService.clearAddressArray();
  XHRCalls.getAddresses("");
  $scope.addressList = AddressListService.currentAddresses;
});