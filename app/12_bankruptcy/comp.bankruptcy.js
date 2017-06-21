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

        // this updates the data model and view model for the draggable slider
        vm.$onInit = function(){
            angular.element("#slider-bankruptcy").slider({
                range: "min",
                value: 3,
                min: 1,
                max: 7,
                slide: function (event, ui) {
                    angular.element("#bankYearsAgo").val(ui.value+"+");
                    vm.activeSlide.bankruptcy.yearsAgo = ui.value+" years ago";
                }
            });
            angular.element("#bankYearsAgo").val(angular.element("#slider-range-min")
                    .slider("value") + " years");
        };
    }
}());