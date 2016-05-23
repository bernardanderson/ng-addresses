"use strict";

app.controller("newEntryController", function($scope){

  $scope.newAddress = {};

  $scope.addressList = [
    {
      name: "Bernie Anderson",
      address: "Home",
      telephone: "615-911-4111",
      email: "junk@hotmail.com"
    }
  ];

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
    $scope.addressList.push($scope.newAddress);
    console.log("You added a new address!", $scope.addressList);
    $scope.newAddress = "";
  };

});
