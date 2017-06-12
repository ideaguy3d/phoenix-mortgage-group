/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'intro';

    app.component(componentId, {
        templateUrl: 'app/1_intro/temp.intro.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.intro.js';
        vm.nameForm = true;
        vm.realPerson = true;
        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.yesClick = function(){
            vm.endSlide = true;
            vm.realPerson = !vm.realPerson;
        };

        vm.noClick = function(){
            vm.endSlide = false;
            vm.realPerson = !vm.realPerson;
        };

        vm.btnClick =function(){
            if(!vm.endSlide) {
                var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
                vm.activeSlide[activeKey].active = false;
                vm.activeSlide[activeKey].qState = 'answered';
                vm.activeSlide.propertyUsed.active = true;
                return;
            }
            vm.someoneContact = "Thanks, someone will contact you soon.";
        };

        vm.nameSubmit = function(){
            vm.nameForm = !vm.nameForm;
        };
    }
}());