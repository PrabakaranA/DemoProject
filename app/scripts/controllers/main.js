'use strict';

/**
 * @ngdoc function
 * @name jwcmarineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jwcmarineApp
 */
angular.module('jwcmarineApp')
    .controller('MainCtrl', ['$scope', 'ajaxService', 'moment', '$timeout', '$rootScope','$state', function($scope, ajaxService, moment, $timeout, $rootScope,$state) {
        //init variables:
        $scope.data = {
            categoryList: [],
            courseList: [],
            category: '',
            course: '',
            fullCourseList: '',
            eventSources: [],
            prerequisiteList: [],
            courseDuration: '',
            coursePrice: '',
            seatsAvailable: '',
            agreePrerequisite: { value: false }

        };
        //init calendar
        $scope.uiConfig = {
            calendar: {
                height: 350,
                aspectRatio: 2,
                editable: false,
                header: {
                    right: 'today prev,next'
                },
                dayClick: function(date, jsEvent, view) {
                    if ((date.day() == 1) && (date.isAfter(new Date())) && (date.diff(new Date(), 'days') > 4)) {
                        $('.date-clicked').removeClass('date-clicked');
                        $(this).addClass('date-clicked');
                        $scope.data.seatsAvailable = "";
                        ajaxService.getSeatAvailablity().then(function(response) {
                            $scope.data.seatsAvailable = response.data.seat;
                        })
                    }
                },
                dayRender: function(date, cell) {
                    if ((date.day() == 1) && (date.isAfter(new Date()))) {
                        if (date.diff(new Date(), 'days') < 4) {
                            cell.css("background", "#a7a7a7");
                        }
                    }
                }
            }
        };

        $scope.initDashBoard = function() {
            ajaxService.getCourses().then(function(response) {
                $scope.data.fullCourseList = response.data;
                var tempVar = Object.keys(response.data);
                var tempArray = []
                for (var i = 0; i < tempVar.length; i++) {
                    let tempObj = { "name": tempVar[i] }
                    tempArray.push(tempObj);
                }
                $scope.data.categoryList = tempArray;
                $scope.data.category = $scope.data.categoryList[0];
                $scope.handleCategoryChange($scope.data.categoryList[0]);
            });
        };

        $scope.handleCategoryChange = function(item) {
            $scope.data.prerequisiteList = [];
            $scope.data.courseDuration = "";
            $scope.data.coursePrice = "";
            $scope.data.seatsAvailable = "";
            $scope.data.courseList = $scope.data.fullCourseList[item.name];
            //$scope.data.course = $scope.data.courseList[0];

        }

        $scope.handleCourseChange = function(item) {
            $scope.data.course = item;
            $scope.data.prerequisiteList = [];
            $scope.data.courseDuration = "";
            $scope.data.coursePrice = "";
            $scope.data.seatsAvailable = "";
            ajaxService.getCourseDetails().then(function(response) {
                console.log(response.data);
                $scope.data.prerequisiteList = response.data.prerequisite;
                $scope.data.courseDuration = response.data.duration;
                $scope.data.coursePrice = response.data.price;
            })
        }

        $scope.prerequisiteCheckboxChange = function(value) {
            console.log('kkkkkkkk');
        }

        $scope.onSubmit = function(argument) {
        	$state.go('app.register');
        }


    }]);
