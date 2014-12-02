$(document).ready(function() {
 
  $("#carousel").owlCarousel({
  	  navigation : false, // Show next and prev buttons
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true
  });
 
});

var url = 'https://api.parse.com/1/classes/';

angular.module('EmailApp', [])
    .config(function($httpProvider) {
    	$httpProvider.defaults.headers.common['X-Parse-Application-Id'] = 'wRO7sKRzS0HiGREF7Hele3LrJpocvYtdFyPYE072';
        $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = '2fcVE9FWvU2ZG8YAOf5gAIdA4AlbOSr8JgCHoXXm';
    })

    .controller('EmailController', function($scope, $http) {



    });