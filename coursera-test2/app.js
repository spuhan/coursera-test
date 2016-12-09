(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var shopItem = this;

  shopItem.items = ShoppingListCheckOffService.getToBuyItems();

  shopItem.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItemsList = this;

  boughtItemsList.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{
    name: 'Cashew nuts',
    quantity: 500
  },
  {
    name: 'Chocolates',
    quantity: 10
  },
  {
    name: 'Burgers',
    quantity: 3
  },
  {
    name: 'Pastries',
    quantity: 4
  },
  {
    name: 'Sprite',
    quantity: 6
  }];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);;
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
