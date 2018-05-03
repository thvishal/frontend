var app = angular.module("myapp", []);
app.controller("mycontroller",function($scope){
  $scope.submit=function(){
    if($scope.myform.$valid) {
              alert("Form is Valid..!!");
              }
           else
           {
           alert("Form is not Valid..!!");
           }
  }
});
