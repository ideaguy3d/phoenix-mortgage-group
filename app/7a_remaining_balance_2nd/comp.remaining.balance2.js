/**
 * Created by Julius Alvarado on 6/7/2017.
 */
(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'remainingBalance2';

    app.component(componentId, {
        templateUrl: 'app/7a_remaining_balance_2nd/temp.remaining.balance2.html',
        bindings: {activeSlide: '='},
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this;

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';

            // requires special logic
            vm.activeSlide.borrow.active = true;
        };
    }
}());