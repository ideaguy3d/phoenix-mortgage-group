/**
 * Created by Julius Alvarado on 6/11/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'currentAddress';

    app.component(componentId, {
        templateUrl: 'app/14_current_address/temp.current.address.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.current.address.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.ratesReady.active = true;
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());