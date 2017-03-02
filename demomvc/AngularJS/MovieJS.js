var app = angular.module('movieModule', []);
app.controller('movieCtrl', function ($scope, $http, MoviesServiece) {
    $scope.moviesData = null;
    MoviesServiece.GetAllRecords().then(function (d) {
        $scope.moviesData = d.data; //Thanh cong
    }, function () {
        alert('Loi Occured @^@'); //That bai
    });
    $scope.Movie = {
        ID: '',
        Title: '',
        Description: '',
        Image: '',
        Director: '',
        Producer: '',
        Writer: '',
        Genre: '',
        Rating: '',
        TrailerURL: ''
    };
    $scope.clear = function () {
        $scope.Movie.ID = '';
        $scope.Movie.Title = '';
        $scope.Movie.Description = '';
        $scope.Movie.Image = '';
        $scope.Movie.Director = '';
        $scope.Movie.Producer = '';
        $scope.Movie.Writer = '';
        $scope.Movie.Genre = '';
        $scope.Movie.Rating = '';
        $scope.Movie.TrailerURL = '';
    }
    //ADD
    $scope.save = function () {
        if ($scope.Movie.Title != "" && $scope.Movie.Description != "" &&
            $scope.Movie.Image != "" && $scope.Movie.Director != "" &&
            $scope.Movie.Producer != "" && $scope.Movie.Writer != "" &&
            $scope.Movie.Genre != "" && $scope.Movie.Rating != "" &&
            $scope.Movie.TrailerURL != "") {
            $http({
                method: 'POST',
                url: 'api/Movie/PostMovie/',
                data: $scope.Movie
            }).then(function successCallback(response) {
                $scope.moviesData.push(response.data);
                $scope.clear();
                alert("Them thanh cong ^^");
            }, function errorCallback(response) {
                //them that bai
                alert("Them that bai, Error: " + response.data.ExceptionMessage);
            });
        }
        else {
            alert("Vui long nhap gia tri can them");
        }
    };
    //UPDATE
    $scope.edit = function (data) {
        $scope.Movie = {
            ID: data.ID,
            Title: data.Title,
            Description: data.Description,
            Image: data.Image,
            Director: data.Director,
            Producer: data.Producer,
            Writer: data.Writer,
            Genre: data.Genre,
            Rating: data.Rating,
            TrailerURL: data.TrailerURL
        };
    }

    //cancel
    $scope.cancel = function () {
        $scope.clear();
    }
    //updata
    $scope.update = function () {
        if ($scope.Movie.Title != "" && $scope.Movie.Description != "" &&
            $scope.Movie.Image != "" && $scope.Movie.Director != "" &&
            $scope.Movie.Producer != "" && $scope.Movie.Writer != "" &&
            $scope.Movie.Genre != "" && $scope.Movie.Rating != "" &&
            $scope.Movie.TrailerURL != "") {
            $http({
                method: 'PUT',
                url: 'api/Movie/PutMovie',
                data: $scope.Movie
            }).then(function successCallback(response) {
                $scope.moviesData = response.data;
                $scope.clear();
                alert("Sua phim thanh cong@");
            }, function errorCallback(response) {
                alert("Error: " + response.data.ExceptionMessage);
            });
        }
        else {
            alert("Nhap vao gia tri sua");
        }
    };

    //DELETE
    $scope.delete = function (index) {
        $http({
            method: 'DELETE',
            url: 'api/Movie/DeleteMovie/' + $scope.moviesData[index].ID
        }).then(function successCallback(response) {
            $scope.moviesData.splice(index, 1);
            alert("Xoa thanh cong");
        }, function errorCallback(response) {
            alert("Error: " + response.data.ExceptionMessage);
        });
    };

});
app.factory('MoviesServiece', function ($http) {
    var fac = {};
    fac.GetAllRecords = function () {
        return $http.get('api/Movie/GetAllMovie');
    }
    return fac;
})