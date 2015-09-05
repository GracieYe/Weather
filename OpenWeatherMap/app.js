/**
 * Created by Gracie on 15-8-31.
 */
var myAppModule=angular.module('openWeatherMap',[]);

var favoriteCities=[];

myAppModule.controller('getDataCtrl',function($scope,$http){
    var cityId;
    $scope.showDetails=false;
    $scope.favoriteCities=favoriteCities;

    //Search the weather
    $scope.search=function(){
        var request_city="http://api.openweathermap.org/data/2.5/weather?q="+city;
        console.log(request_city);
        $http.get(request_city)
            .success(function(response){
                $scope.showDetails=true;
                $scope.city=city;
                cityId=response.id;
                $scope.country=country;

                $scope.datas=response;
                $scope.coord=response.coord;
                $scope.weather=response.weather;
                $scope.main=response.main;
                $scope.wind=response.wind;
                $scope.clouds=response.clouds;
            });
    };

    $scope.addToFavorite=function(){
        var data={"Id":cityId,"name":city};
        favoriteCities.push(data);
        $scope.favoriteCities=favoriteCities;
        queryWeather();
    };

    function queryWeather(){
        //Get all ids of favorite cities
        var cityIds=null;
        for(var i=0;i<favoriteCities.length;i++){
            var Id=favoriteCities[i].Id;
            if(cityIds!=null){
                cityIds=cityIds+","+Id;
            }else{
                cityIds+=Id;
            }
        }
        console.log(cityIds);

        //Get current weather for favorite cities
        var request="http://api.openweathermap.org/data/2.5/group?id="+cityIds+"&units=metric";
        console.log(request);
        $http.get(request).success(function(response){
            $scope.weathers=response.list;

            for(var i=0;i<response.cnt;i++){

            }
        });
    }
});
