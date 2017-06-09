/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'secondMortage';

    app.component(componentId, {
        templateUrl: 'app/property_used/temp.property.used.html',
        bindings: {},
        controller: [CompCtrlClass]
    });

    function CompCtrlClass() {
        var vm = this, file = 'comp.property.used.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());