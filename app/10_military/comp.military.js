/**
 * Created by Julius Alvarado on 6/11/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'military';

    app.component(componentId, {
        templateUrl: 'app/10_military/temp.military.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.military.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.yesClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            console.log(activeKey+" = activeKey");
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.military.priorMilitary = true;
            vm.activeSlide.vaLoan.active = true;
        };

        vm.noClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            console.log(activeKey+" = activeKey");
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.military.priorMilitary = false;
            vm.activeSlide.bankruptcyQuestion.active = true;
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());