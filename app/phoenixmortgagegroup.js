/**
 *
 * Created by Julius Alvarado on 6/4/2017.
 * jQuery & Angular User Interface code
 *
 */

(function(){
    "use strict";
    var app = angular.module('pmg-app', []),
        controllerId = 'CoreCtrl',
        serviceId = 'pmgDataService';

    app.controller(controllerId, [CoreCtrlClass]);
    app.factory(serviceId, [pmgDataService]);

    function CoreCtrlClass() {

    }

    function pmgDataService() {

    }
}());


//