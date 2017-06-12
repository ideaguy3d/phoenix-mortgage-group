/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'borrow';

    app.component(componentId, {
        templateUrl: 'app/7b_borrow/temp.borrow.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass (pmgUtilityService) {
        var vm = this, file = 'comp.borrow.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.yesClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            console.log(activeKey+" = activeKey");
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';

            // requires special logic
            vm.activeSlide.borrow.answer = 'yes';
            vm.activeSlide.creditScore.active = true;
        };

        vm.noClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            console.log(activeKey+" = activeKey");
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';

            // requires special logic
            vm.activeSlide.borrow.answer = 'no';
            vm.activeSlide.creditScore.active = true;
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());