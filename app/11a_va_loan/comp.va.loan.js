/**
 * Created by Julius Alvarado on 6/12/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'vaLoan';

    app.component(componentId, {
        templateUrl: 'app/11a_va_loan/temp.va.loan.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.va.loan.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.yesClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            console.log(activeKey+" = activeKey");
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';

            // requires special logic
            vm.activeSlide.bankruptcyQuestion.active = true;
        };

        vm.noClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            console.log(activeKey+" = activeKey");
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';

            // requires special logic
            vm.activeSlide.bankruptcyQuestion.active = true;
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());