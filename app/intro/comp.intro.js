/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'intro';

    app.component(componentId, {
        templateUrl: 'app/intro/temp.intro.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.intro.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.btnClick = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.propertyUsed.active = true;
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());