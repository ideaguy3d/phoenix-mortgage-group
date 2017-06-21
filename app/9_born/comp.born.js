/**
 * Created by Julius Alvarado on 6/7/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'born';

    app.component(componentId, {
        templateUrl: 'app/9_born/temp.born.html',
        bindings: {activeSlide: '='},
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this;

        vm.yesClick = function () {
            vm.activeSlide.firstHomePurchase.answer = 'yes';
            nexSlide();
        };

        vm.noClick = function(){
            vm.activeSlide.firstHomePurchase.answer = 'no';
            nexSlide();
        };

        var nexSlide = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.military.active = true;
        };
    }
}());