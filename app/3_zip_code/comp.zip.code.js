/**
 * Created by Julius Alvarado on 6/7/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'zipCode';

    app.component(componentId, {
        templateUrl: 'app/3_zip_code/temp.zip.code.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this;

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.estimateValue.active = true;
        };
    }
}());