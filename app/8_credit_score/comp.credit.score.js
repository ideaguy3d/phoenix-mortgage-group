/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'creditScore';

    app.component(componentId, {
        templateUrl: 'app/8_credit_score/temp.credit.score.html',
        bindings: {activeSlide: '='},
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.credit.score.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.excellentClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.creditScore.creditEstimate = 'excellent(more than 720)';
            vm.activeSlide.military.active = true;
        };

        vm.goodClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.creditScore.creditEstimate = 'good(680 to 719)';
            vm.activeSlide.military.active = true;
        };

        vm.fairClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.creditScore.creditEstimate = 'fair(640 to 679)';
            vm.activeSlide.military.active = true;
        };

        vm.poorClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.creditScore.creditEstimate = 'poor(less than 639)';
            vm.activeSlide.military.active = true;
        };
    }
}());