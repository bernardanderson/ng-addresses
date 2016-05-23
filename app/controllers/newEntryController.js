"use strict";

app.controller("newEntryController", function($scope, AddressListService){

  $scope.newAddressObject = {};

  $scope.entryItems = [
  {
    inputTitle: "Full Name",
    inputPlaceholder: "Name",
    inputType: "text",
    fieldVariable: "name",
    inputWidth: 3
  }, {
    inputTitle: "Address",
    inputPlaceholder: "Address",
    inputType: "text",
    fieldVariable: "address",
    inputWidth: 3
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
    inputWidth: 2
  }];

  $scope.addNewAddress = function() {
    AddressListService.update($scope.newAddressObject);
    // $scope.addressList.push($scope.newAddress);
    console.log("You added a new address!");
    console.log(AddressListService.currentAddresses);

    $scope.newAddressObject = "";
  };

});
