"use strict";

app.controller("newEntryController", function($scope, $location, AddressListService, XHRCalls){

// Builds a blank newAddressObject in case the user leaves a field blank
  $scope.newAddressObject = {
    name: null,
    address: null,
    telephone: null,
    email: null
  };

// This contains the data for the input fields for the new address page. An ng-repeat builds part of that page from this data
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

// When the submit button is clicked this adds the information to local AddressArray, the database, clears the input fields and
//  then sends the user back to the address list. 
  $scope.addNewAddress = function() {
    AddressListService.updateAddressArray($scope.newAddressObject);
    XHRCalls.xhrAddresses("", "post", $scope.newAddressObject);
    $scope.newAddressObject = "";
    $location.path('#/addresses/list');
  };

});
