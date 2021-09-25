

var ServiceURL = "http://cp-kafka-connect.sandbox.grid2.maf.ae/";

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
            method: "get",
            url: ServiceURL +  MethodName,
            data: '',
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

    $scope.connectorwithdetails  = []; 

    $scope.fn_GetConnectorsList = function () {

        debugger;

        $('#loader').show(); 


        var ResponseRegistration = kafkaService.PostToServiceWithoutParam("connectors");
        ResponseRegistration.then(function (msg) {
            
            $scope.connectors = msg.data;
            

            angular.forEach($scope.connectors, function(value, key){

                $scope.fn_GetConnectorStatus(value)

                console.log($scope.connectorstatus);

                
                
             });

            

            $('#loader').hide(); 

            
        }, function (msg) {

            console.log('Error: AppInsightsService');
            $('#loader').hide(); 
        });
    }

    $scope.fn_GetConnectorStatus = function (connectorname) {

        debugger;

        $('#loader').show(); 


        var ResponseRegistration = kafkaService.PostToServiceWithoutParam("connectors/" + connectorname + "/status");
        ResponseRegistration.then(function (msg) {
            
            $scope.statusdata = msg.data;

            $scope.taskslist = []; 

            for(var i = 0; i<$scope.statusdata.tasks.length; i++)
            {
                $scope.task = 
                {
                    "state" : $scope.statusdata.tasks[i].state,
                    "id" : $scope.statusdata.tasks[i].id,
                    "trace" : $scope.statusdata.tasks[i].trace
                }

                $scope.taskslist.push($scope.task);
            }

             

            $scope.connector = 
            {

                "name" : $scope.statusdata.name,
                "state" : $scope.statusdata.connector.state,
                "worker_id": $scope.statusdata.connector.worker_id,
                "totaltasks" : $scope.statusdata.tasks.length,
                "tasks": $scope.taskslist
            }

            $scope.connectorwithdetails.push($scope.connector); 

            $('#loader').hide(); 

            
        }, function (msg) {

            console.log('Error: AppInsightsService');
            $('#loader').hide(); 
        });

        return $scope.statusdata;
    }



    $scope.fn_getconntfile = function () {

        debugger;

        
                
       

        $('#loader').show(); 


        var ResponseRegistration = kafkaService.readfile("/dummdata/status.json");
        ResponseRegistration.then(function (msg) {
            
            $scope.connectors = msg.data;
            

            $('#loader').hide(); 

            
        }, function (msg) {

            console.log('Error: AppInsightsService');
            $('#loader').hide(); 
        });
    }


    $scope.fn_showtrace = function(msg) {
        alert(msg); 
    }
   

    
   

    

    

}]);