/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'estimateValue';

    app.component(componentId, {
        templateUrl: 'app/4_estimate_value/temp.value.estimate.html',
        bindings: { activeSlide: '=' },
        controller: [ 'pmgUtilityService', CompCtrlClass ]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.value.estimate.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.remainingBalance1.active = true;
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());