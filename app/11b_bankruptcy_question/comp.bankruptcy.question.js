/**
 * Created by Julius Alvarado on 6/12/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'bankruptcyQuestion';

    app.component(componentId, {
        templateUrl: 'app/11b_bankruptcy_question/temp.bankruptcy.question.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.military.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.bothClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';

            vm.activeSlide.bankruptcy.go2forclosure = true;
            vm.activeSlide.bankruptcy.active = true;
        };

        vm.noClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.currentAddress.active = true;
        };

        vm.bankruptcyClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.bankruptcy.active = true;
        };

        vm.foreclosureClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.foreclosure.active = true;
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());