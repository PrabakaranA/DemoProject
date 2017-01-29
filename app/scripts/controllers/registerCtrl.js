'use strict';

/**
 * @ngdoc function
 * @name jwcmarineApp.controller:RegisterCtrl
 * @description
 * # AboutCtrl
 * Controller of the jwcmarineApp
 */
angular.module('jwcmarineApp')
    .controller('RegisterCtrl', function($scope) {
        $scope.page = {
            title: 'Course Registeration',
            courseTitle : "Java",
            subtitle: 'Place subtitle here...'
        };
        $scope.formInit = function() {
            $scope.steps = {
                step1: true,
                step2: false,
                step3: false,
                step4: false,
                step5: false,
            }
        };
        $scope.activeTabIndex = 0;
        $scope.tabSwitch = function(item) {
            $scope.steps.step2 = true;
            if(item == 'step1') {
                $scope.activeTabIndex = 0
            }else if(item == 'step2'){
                $scope.activeTabIndex = 1
            }else if(item == 'step3'){
                $scope.activeTabIndex = 2
            }else if(item == 'step4'){
                $scope.activeTabIndex = 3
            }else if(item == 'step5'){
                $scope.activeTabIndex = 4
            }
        };
    });
