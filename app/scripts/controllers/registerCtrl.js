'use strict';

/**
 * @ngdoc function
 * @name jwcmarineApp.controller:RegisterCtrl
 * @description
 * # AboutCtrl
 * Controller of the jwcmarineApp
 */
angular.module('jwcmarineApp')
    .controller('RegisterCtrl', function($scope, $stateParams, FileUploader,$state) {

        //File Uploader
        var uploader = $scope.uploader = new FileUploader({
            //url: 'scripts/modules/fileupload/upload.php' 
        });
        uploader.filters.push({
            name: 'customFilter',
            fn: function() {
                return this.queue.length < 10;
            }
        });

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/ , options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/ , filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };


        $scope.page = {
            title: 'Course Registeration',
            courseTitle: "Java",
            subtitle: 'Place subtitle here...'
        };
        $scope.prerequisiteList = [];
        if ($stateParams.prerequisite) {
            $scope.prerequisiteList = $stateParams.prerequisite;
        }
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
            if (item == 'step1') {
                $scope.activeTabIndex = 0
            } else if (item == 'step2') {
                $scope.activeTabIndex = 1
            } else if (item == 'step3') {
                $scope.activeTabIndex = 2
            } else if (item == 'step4') {
                $scope.activeTabIndex = 3
            } else if (item == 'step5') {
                $scope.activeTabIndex = 4
            }
        };

        $scope.finishForm = function () {
            alert('successfully Registered');
            $state.go('app.dashboard');
        }
    });
