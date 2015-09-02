/**
 * Created by Gracie on 15-8-31.
 */
var myAppModule=angular.module('openWeatherMap',[]);

myAppModule.controller('getDataCtrl',function($scope,$http){

    $scope.search=function(){
        var request_citry="http://api.openweathermap.org/data/2.5/weather?q="+city;
        console.log(request_citry);
        $http.get(request_citry)
            .success(function(response){
                $scope.datas=response;
            });
    };
});
