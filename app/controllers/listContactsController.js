"use strict";

app.controller("listContactsController", function($scope, $filter, XHRCalls, AddressListService){

// Every time the "list view" page is loaded/showed, the app pulls the most recent copy of the addresses database and stores it
//  in the local variable "addresslist".
  let listAddress = function() {
      AddressListService.clearAddressArray();
      XHRCalls.xhrAddresses("", "get");
      $scope.addressList = AddressListService.currentAddresses;
  };

// This deletes the addresses from the address list.  First it deletes it from the database.  Then it deletes it from the local
//  array.  This cuts down on the internet traffic AND since ng-repeat is being used, when the array is modified ng-repeat
//  automatically refreshes the address list output
  $scope.deleteAddress = function(sentEvent) {
    let deleteItemID = sentEvent.currentTarget.attributes['fb-id'].value;
    XHRCalls.xhrAddresses(deleteItemID, "delete");
    AddressListService.deleteAddressArrayItem(deleteItemID);
    $scope.addressList = AddressListService.currentAddresses;
  };

// This allows the user to click on the arrow buttons to sort the address list by either acending/decending name, address, phone
//  number or email address.
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

// This always runs whenever the list-view is shown/activated.
  listAddress();

});