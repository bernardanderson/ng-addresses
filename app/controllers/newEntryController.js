"use strict";

app.controller("newEntryController", function($scope, $location, AddressListService, XHRCalls){

  $scope.newAddressObject = {
    name: null,
    address: null,
    telephone: null,
    email: null
  };

  $scope.entryItems = [
  {
    inputTitle: "Full Name",
    inputPlaceholder: "Name",
    inputType: "text",
    fieldVariable: "name",
    inputWidth: 2
  }, {
    inputTitle: "Address",
    inputPlaceholder: "Address",
    inputType: "text",
    fieldVariable: "address",
    inputWidth: 4
  }, {
    inputTitle: "Telephone #",
    inputPlaceholder: "Telephone number",
    inputType: "text",
    fieldVariable: "telephone",
    inputWidth: 2
  }, {
    inputTitle: "Email Address",
    inputPlaceholder: "Email address",
    inputType: "text",
    fieldVariable: "email",
    inputWidth: 3
  }];

  $scope.addNewAddress = function() {
    AddressListService.updateAddressArray($scope.newAddressObject);
    XHRCalls.xhrAddresses("", "post", $scope.newAddressObject);
    $scope.newAddressObject = "";
    $location.path('/addresses/list');
  };

});
