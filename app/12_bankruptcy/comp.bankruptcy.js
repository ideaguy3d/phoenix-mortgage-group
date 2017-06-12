/**
 * Created by Julius Alvarado on 6/11/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'bankruptcy';

    app.component(componentId, {
        templateUrl: 'app/12_bankruptcy/temp.bankruptcy.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.bankruptcy.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            if(vm.activeSlide.bankruptcy.go2forclosure) {
                vm.activeSlide.foreclosure.active = true;
            } else {
                vm.activeSlide.currentAddress.active = true;
            }
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());