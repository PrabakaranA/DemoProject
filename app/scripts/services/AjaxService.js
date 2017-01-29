'use strict';

app.factory('ajaxService', ['$http', '$q',
    function ($http, $q) {
		
		//API Endpoints:
		var courseAPI = "https://api.myjson.com/bins/1f33nl";
		var prerequisiteAPI = "https://api.myjson.com/bins/g38pt";
        var courseDetails = "https://api.myjson.com/bins/gjbf5";
        var seatsAPI = "https://api.myjson.com/bins/17zeep";

        var requestObj = {
            method: 'GET',
            url: '',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {},
            isExternalRequest: false,
            statusText: 'loading...',
            timeout: 60000
        };

        var ajaxService = {

            getCourses: function () {
            	var reqObj = {
					url: courseAPI
					};
				var reqObjExt = angular.extend({}, requestObj, reqObj);
				return $http(reqObjExt);
            },
            getPrerequisite: function () {
            	var reqObj = {
					url: prerequisiteAPI
					};
				var reqObjExt = angular.extend({}, requestObj, reqObj);
				return $http(reqObjExt);
            },
            getCourseDetails: function () {
                var reqObj = {
                    url: courseDetails
                    };
                var reqObjExt = angular.extend({}, requestObj, reqObj);
                return $http(reqObjExt);
            },
            getSeatAvailablity: function () {
                var reqObj = {
                    url: seatsAPI
                    };
                var reqObjExt = angular.extend({}, requestObj, reqObj);
                return $http(reqObjExt);
            },

        };
        return ajaxService;
    }]);
