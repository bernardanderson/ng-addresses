"use strict";

app.controller("editEntryController", function($scope, $location, $routeParams, AddressListService, XHRCalls){

  $scope.pageTitle = "Edit Current Address";
  $scope.submitButtonText = "Update Address";
  $scope.submitButtonFunction = "updateAddress()";

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
    inputWidth: 3
  }];

  $scope.newAddressObject = AddressListService.getAddressArrayItem($routeParams.addressID);

// When the submit button is clicked this adds the information to local AddressArray, the database, clears the input fields and
//  then sends the user back to the address list. 
  $scope.addNewAddress = function() {
    let updateItemID = $routeParams.addressID
    XHRCalls.xhrAddresses(updateItemID, "put", $scope.newAddressObject);
    $scope.newAddressObject = "";
    $location.path('#/addresses/list');
  };

});
