/**
 * Created by Julius Alvarado on 6/11/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'currentAddress';

    app.component(componentId, {
        templateUrl: 'app/14_current_address/temp.current.address.html',
        bindings: {activeSlide: '='},
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this;

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            pmgUtilityService.sendEmail();
            vm.activeSlide.ratesReady.active = true;
            console.log("vm.activeSlide.bankruptcy.yearsAgo = "
                + vm.activeSlide.bankruptcy.yearsAgo);
            console.log("vm.activeSlide.foreclosure.yearsAgo = "
                + vm.activeSlide.foreclosure.yearsAgo);
        };
    }
}());