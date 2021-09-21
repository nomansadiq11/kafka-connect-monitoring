

var ServiceURL = "cp-kafka-connect.grid.svc.cluster.local:8083/";

var app = angular.module("KafkaApp", ['ngCookies']);


app.service("kafkaService", function ($http) {


    this.PostToService = function (param, MethodName) {
        var response = $http({
            method: "post",
            url: ServiceURL +  MethodName,
            data: JSON.stringify(param),
            dataType: "json"
        });
        return response;
    }

    this.PostToServiceWithoutParam = function (MethodName) {
        var response = $http({
            method: "post",
            url: ServiceURL +  MethodName,
            data: '',
            headers: {'Access-Control-Allow-Origin': '*'},
            dataType: "json"
        });
        return response;
    }

    this.readfile = function (filename) {
        var response = $http({
            method: "get",
            url: filename,
            data: '',
            dataType: "json"
        });
        return response;
    }



});








app.controller("kafkaController", ['$scope', '$cookies', '$cookieStore', '$window' ,'kafkaService', function($scope, $cookies, $cookieStore, $window, kafkaService) {


    $scope.fn_GetConnectorsList = function () {

        debugger;

        
                
        var param =            
                {
                    "query": $scope.query
                }; 

        $('#loader').show(); 


        var ResponseRegistration = kafkaService.PostToServiceWithoutParam("connectors");
        ResponseRegistration.then(function (msg) {
            
            $scope.connectors = msg.data;
            

            $('#loader').hide(); 

            
        }, function (msg) {

            console.log('Error: AppInsightsService');
            $('#loader').hide(); 
        });
    }

    $scope.fn_getconntfile = function () {

        debugger;

        
                
       

        $('#loader').show(); 


        var ResponseRegistration = kafkaService.readfile("connectors.json");
        ResponseRegistration.then(function (msg) {
            
            $scope.connectors = msg.data;
            

            $('#loader').hide(); 

            
        }, function (msg) {

            console.log('Error: AppInsightsService');
            $('#loader').hide(); 
        });
    }


   

    
   

    

    

}]);