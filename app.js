(function () {
  'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope)
{
 $scope.checkLunchItems = function(){
   console.log($scope.lunchItems);
   if($scope.lunchItems === "" || $scope.lunchItems === undefined){
     $scope.result = "Please enter data first";
     return $scope.result;
   }
   $scope.lunchItemsArray = $scope.lunchItems.split(',');
   $scope.noOfItems = $scope.lunchItemsArray.length;
   if($scope.noOfItems <= 3) {
     $scope.result = "Enjoy!";
   }
    else {
      $scope.result = "Too much!";
    }
    return $scope.result;
 };
};

})();
