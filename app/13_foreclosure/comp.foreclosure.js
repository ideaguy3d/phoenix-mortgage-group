/**
 * Created by Julius Alvarado on 6/11/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'foreclosure';

    app.component(componentId, {
        templateUrl: 'app/13_foreclosure/temp.foreclosure.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.foreclosure.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.ratesReady.active = true;
            // send email
            vm.activeSlide.closeWindowCondition = false;
            pmgUtilityService.sendEmail();
        };

        // this updates the data model and view model for the draggable slider
        vm.$onInit = function(){
            angular.element("#slider-foreclosure").slider({
                range: "min",
                value: 3,
                min: 1,
                max: 7,
                slide: function (event, ui) {
                    angular.element("#foreYearsAgo").val(ui.value+"+");
                    vm.activeSlide.foreclosure.yearsAgo = ui.value+" years ago";
                }
            });
            angular.element("#foreYearsAgo").val(angular.element("#slider-range-min")
                    .slider("value") + " years");
        };
    }
}());