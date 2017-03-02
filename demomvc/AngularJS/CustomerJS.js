var app = angular.module('CustomerModule', []);
app.controller('CustomerCtrl', function ($scope, $http, CustomersService) {

    $scope.CustomersData = null;
    // Fetching records from the factory created at the bottom of the script file
    CustomersService.GetAllRecords().then(function (d) {
        $scope.CustomersData = d.data; // Success
    }, function () {
        alert('Error Occured !!!'); // Failed
    });

    // Calculate Total of Price After Initialization

    $scope.Customer = {
        Id: '',
        Firstname: '',
        Lastname:'',
        Email: '',
        IdentityCard: '',
        UniqueKey: '',
        DateOfBirth: '',
        Mobile: '',
        ResgisteredDate:''
    };

    // Reset product details
    $scope.clear = function () {
        $scope.Customer.Id= '';
        $scope.Customer.Firstname= '';
        $scope.Customer.Lastname='';
        $scope.Customer.Email= '';
        $scope.Customer.IdentityCard= '';
        $scope.Customer.UniqueKey= '';
        $scope.Customer.DateOfBirth= '';
        $scope.Customer.Mobile= '';
        $scope.Customer.ResgisteredDate='';
    }

    //Add New Item
    $scope.save = function () {
        if ($scope.Customer.Firstname != "" &&
       $scope.Customer.Lastname != "" && $scope.Customer.Email != "" &&
       $scope.Customer.IdentityCard!="" && $scope.Customer.UniqueKey!= ""&&
        $scope.Customer.DateOfBirth!= "" && $scope.Customer.Mobile!= ""&& 
            $scope.Customer.ResgisteredDate!="") {
            $http({
                method: 'POST',
                url: 'api/Customer/PostCustomer/',
                data: $scope.Customer
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.CustomersData.push(response.data);
                $scope.clear();
                alert("Customer Added Successfully @@");
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

    // Edit Customer details
    $scope.edit = function (data) {
        $scope.Customer = {
            Id: data.Id, Firstname: data.Firstname,
            Lastname: data.Lastname, Email: data.Email,
            IdentityCard: data.IdentityCard, UniqueKey: data.UniqueKey,
            DateOfBirth: data.DateOfBirth, Mobile: data.Mobile,
            ResgisteredDate: data.ResgisteredDate
        };
    }

    // Cancel product details
    $scope.cancel = function () {
        $scope.clear();
    }

    // Update product details
    $scope.update = function () {
        if ($scope.Customer.Firstname != "" &&
       $scope.Customer.Lastname != "" && $scope.Customer.Email != "" &&
       $scope.Customer.IdentityCard != "" && $scope.Customer.UniqueKey != "" &&
        $scope.Customer.DateOfBirth != "" && $scope.Customer.Mobile != "" &&
            $scope.Customer.ResgisteredDate != "") {
            $http({
                method: 'PUT',
                url: 'api/Customer/PutCustomer',
                data: $scope.Customer
            }).then(function successCallback(response) {
                $scope.CustomersData = response.data;
                $scope.clear();
                alert("Customer Updated Successfully @@");
            }, function errorCallback(response) {
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

    // Delete Customer details
    $scope.delete = function (index) {
        $http({
            method: 'DELETE',
            url: 'api/Customer/DeleteCustomer/' + $scope.CustomersData[index].Id,
        }).then(function successCallback(response) {
            $scope.CustomersData.splice(index, 1);
            alert("Customer Deleted Successfully !!!");
        }, function errorCallback(response) {
            alert("Error : " + response.data.ExceptionMessage);
        });
    };

});

app.factory('CustomersService', function ($http) {
    var fac = {};
    fac.GetAllRecords = function () {
        return $http.get('api/Customer/GetAllCustomers');
    }
    return fac;
});