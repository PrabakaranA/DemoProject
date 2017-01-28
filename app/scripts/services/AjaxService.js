'use strict';

app.factory('ajaxService', ['$http', '$q',
    function ($http, $q) {
		
		//API Endpoints:
		var courseAPI = "https://api.myjson.com/bins/1f33nl";

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

            getCourses: function (_data) {
            	var reqObj = {
					url: courseAPI
					};
				var reqObjExt = angular.extend({}, requestObj, reqObj);
				return $http(reqObjExt);
            }
        };
        return ajaxService;
    }]);
