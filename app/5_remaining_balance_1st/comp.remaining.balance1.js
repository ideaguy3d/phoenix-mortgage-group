/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'remainingBalance1';

    app.component(componentId, {
        templateUrl: 'app/5_remaining_balance_1st/temp.remaining.balance1.html',
        bindings: {activeSlide: '='},
        controller: [ 'pmgUtilityService', CompCtrlClass ]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this;

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.secondMortgage.active = true;
        };
    }
}());