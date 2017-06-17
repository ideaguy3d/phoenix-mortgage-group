/**
 * Created by Julius Alvarado on 6/7/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'secondMortgage';

    app.component(componentId, {
        templateUrl: 'app/6_second_mortgage/temp.second.mortgage.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this;

        vm.yesClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.secondMortgage.answer = 'yes';
            vm.activeSlide.borrow.active = true;
        };

        vm.noClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';

            // requires special logic
            vm.activeSlide.secondMortgage.answer = 'no';
            vm.activeSlide.borrow.active = true;
        };
    }
}());