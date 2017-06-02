var myApp = angular.module('myApp', []);

myApp.controller('containerCtrl', function($scope, $http) {

    $scope.aaaaaaaa = "aaaaaaaaaaaaaaaaaaaaaa";
    $scope.bbbbbbbb = "bbbbbbbbbbbbbbbbbbbbbb";

	/*$http.get("app/components/header/header.html").then(function (response) {
        $scope.templateURL  = response.data.records;
    });*/

    $(window).scroll(function(){
	    if ($(window).scrollTop() >= 200) {
	       angular.element('nav').addClass('navbar-fixed-top');
	    }
	    else {
	       angular.element('nav').removeClass('navbar-fixed-top');
	    }
	});

	$(window).resize(function(){
	   console.log($(window).width());
	});

});