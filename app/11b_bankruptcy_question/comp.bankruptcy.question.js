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

        vm.bothClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.bankruptcy.go2forclosure = true;
            // set data model
            vm.activeSlide.bankruptcyQuestion.bankruptcy = true;
            vm.activeSlide.bankruptcyQuestion.foreclosure = true;

            vm.activeSlide.bankruptcy.active = true;
        };

        vm.noClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            // set data model
            vm.activeSlide.bankruptcyQuestion.bankruptcy = false;
            vm.activeSlide.bankruptcyQuestion.foreclosure = false;
            console.log("user clicked no, ratesReady should become active now!!!!");
            vm.activeSlide.ratesReady.active = true;
            pmgUtilityService.sendEmail();
        };

        vm.bankruptcyClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            // set data model
            vm.activeSlide.bankruptcyQuestion.bankruptcy = true;
            vm.activeSlide.bankruptcyQuestion.foreclosure = false;

            vm.activeSlide.bankruptcy.active = true;
        };

        vm.foreclosureClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            // set data model
            vm.activeSlide.bankruptcyQuestion.bankruptcy = false;
            vm.activeSlide.bankruptcyQuestion.foreclosure = true;

            vm.activeSlide.foreclosure.active = true;
        };
    }
}());