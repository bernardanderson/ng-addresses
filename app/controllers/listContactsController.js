"use strict";

app.controller("listContactsController", function($scope, XHRCalls, AddressListService){

  $scope.listAddress = function() {
    AddressListService.clearAddressArray();
    XHRCalls.xhrAddresses("", "get");
    $scope.addressList = AddressListService.currentAddresses;
  };

  $scope.deleteAddress = function(sentEvent) {
    let deleteItem = sentEvent.currentTarget.attributes['fb-id'].value;
    XHRCalls.xhrAddresses(deleteItem, "delete");
  };

  $scope.listAddress();

});