/**
 * Created by Julius Alvarado on 6/7/2017.
 */
(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'remainingBalance2';

    app.component(componentId, {
        templateUrl: '',
        bindings: {},
        controller: [CompCtrlClass]
    });

    function CompCtrlClass() {
        var vm = this;

        vm.$onInit = function(){

        };
    }
}());