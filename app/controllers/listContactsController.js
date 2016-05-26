"use strict";

app.controller("listContactsController", function($scope, $filter, XHRCalls, AddressListService){

  let listAddress = function() {
      AddressListService.clearAddressArray();
      XHRCalls.xhrAddresses("", "get");
      $scope.addressList = AddressListService.currentAddresses;
  };

  $scope.deleteAddress = function(sentEvent) {
    let deleteItemID = sentEvent.currentTarget.attributes['fb-id'].value;
    XHRCalls.xhrAddresses(deleteItemID, "delete");
    AddressListService.deleteAddressArrayItem(deleteItemID);
  };

  $scope.sortItem = function(sentSortVar) {

    $scope.addressList = AddressListService.currentAddresses; // Gets the current array of addresses

    // Checks to see if one of the sort buttons was already clicked.  If not, the reverse gets set to false and sets the predicate
    //   to the new sort parameter.  If true, the reverse gets set to true.
    if ($scope.predicate === sentSortVar) {
      $scope.reverse = !$scope.reverse; // Sets the opposite of what .reverse is already set
    } else {
      $scope.predicate = sentSortVar; // Sets the sorting item that the user clicked
      $scope.reverse = false;         // Sets reverse to false since it's the first time that sort item was clicked
    }

    $scope.addressList = $filter('orderBy')($scope.addressList, sentSortVar, $scope.reverse); // Sets the array to the sorting params
  };

  listAddress();

});