$(document).ready(function() {
 
  $("#carousel").owlCarousel({
  	  navigation : false, // Show next and prev buttons
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true
  });
 
});

var url = 'https://api.parse.com/1/classes/emails';

angular.module('EmailApp', [])
    .config(function($httpProvider) {
    	$httpProvider.defaults.headers.common['X-Parse-Application-Id'] = 'wRO7sKRzS0HiGREF7Hele3LrJpocvYtdFyPYE072';
        $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = '2fcVE9FWvU2ZG8YAOf5gAIdA4AlbOSr8JgCHoXXm';
    })

    .controller('EmailController', function($scope, $http) {

    	$scope.refreshEmails = function() {
            $scope.loading = true;
            $http.get(url)
                .success(function(responseData) {
                    $scope.comments = responseData.results;
                })
                .error(function(err) {
                    console.log(err);
                })
                 .finally(function() {
                    $scope.loading = false;
                });
        };

        $scope.refreshEmails();

        //initialize email object
        $scope.newEmail = {done: false};

        //adds new email from form
    	$scope.addComment = function(comment) {
            $scope.adding = true; //begin loading animation
            $scope.none = false; //now a comment exists
            comment.score = 0; //default comment score
            $http.post(url + 'comments', comment)
                .success(function(responseData) {
                    comment.objectId = responseData.objectId;
                    $scope.comments.push(comment);
                    //clear form and create new comment object
                    $scope.newComment = {done: false};
                })
                .error(function(err) {
                	console.log(err);
                })
                .finally(function() {
                    $scope.adding = false; //end loading animation
                });
        };



    });