/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'propertyUsed';

    app.component(componentId, {
        templateUrl: 'app/2_property_used/temp.property.used.html',
        bindings: {activeSlide: '='},
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.property.used.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.primaryHome = function(){
            vm.activeSlide.propertyUsed.propertyUsedFor = 'primary home';
            nextSlide();
        };

        vm.secondaryHome = function(){
            vm.activeSlide.propertyUsed.propertyUsedFor = 'secondary home';
            nextSlide();
        };

        vm.rentalProperty = function(){
            vm.activeSlide.propertyUsed.propertyUsedFor = 'rental property';
            nextSlide();
        };

        var nextSlide = function(){
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.estimateValue.active = true;
        };
    }
}());