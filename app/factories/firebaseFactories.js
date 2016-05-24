
// This factory allows the storing and retrieval of the addresses across all controllers
app.factory('AddressListService', function(){

  return {

    currentAddresses: [
      {
        name: "Bernie Anderson",
        address: "Home",
        telephone: "615-911-4111",
        email: "junk@hotmail.com"
      }
    ],

    update: function(sentNewAddressObject) {
      this.currentAddresses.push(sentNewAddressObject);
    }
  };

});