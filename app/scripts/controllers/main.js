'use strict';

/**
 * @ngdoc function
 * @name jwcmarineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jwcmarineApp
 */
angular.module('jwcmarineApp')
  .controller('MainCtrl', ['$scope','ajaxService',function ($scope,ajaxService) {
  	//init variables:
  	//test api https://api.myjson.com/bins/1f33nl
  	$scope.data = {
  		categoryList : [],
  		courseList : [],
  		category : '',
  		course : '',
  		fullCourseList : ''
  	};

  	$scope.initDashBoard = function () {
  		ajaxService.getCourses().then(function(response) {
  			$scope.data.fullCourseList = response.data;
  			$scope.data.categoryList = Object.keys(response.data);
  			$scope.data.category = $scope.data.categoryList[0];
  			$scope.handleCategoryChange($scope.data.categoryList[0]);
  		})
  	};

  	$scope.handleCategoryChange = function(item) {
  		$scope.data.courseList = $scope.data.fullCourseList[item];
  		$scope.data.course = $scope.data.courseList[0]
  	}

  	$scope.handleCourseChange = function(item) {
  		$scope.data.courseList = $scope.data.fullCourseList[item];
  		$scope.data.course = $scope.data.courseList[0];
  		ajaxService.getPrerequisite().then(function(response) {
  			console.log(response.data);
  		})
  	}




  }]);
