/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'propertyUsed';

    app.component(componentId, {
        templateUrl: 'app/remaining_balance_1st/temp.remaining.balance1.html',
        bindings: {},
        controller: [CompCtrlClass]
    });

    function CompCtrlClass() {
        var vm = this, file = 'comp.remaining.balance1.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());