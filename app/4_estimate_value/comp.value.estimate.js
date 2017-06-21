/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'estimateValue';

    app.component(componentId, {
        templateUrl: 'app/4_estimate_value/temp.value.estimate.html',
        bindings: { activeSlide: '=' },
        controller: [ '$scope', 'pmgUtilityService', CompCtrlClass ]
    });

    function CompCtrlClass($scope, pmgUtilityService) {
        var vm = this;

        vm.btnClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.borrow.active = true;
        };

        // this updates the data model and view model for the draggable slider
        vm.$onInit = function(){
            angular.element("#slider-estimate-value").slider({
                range: "min",
                value: 500000,
                min: 10000,
                max: 2000000,
                step: 10000,
                slide: function (event, ui) {
                    angular.element("#amount").val(ui.value + " dollars");
                    vm.activeSlide.estimateValue.value = "$"+ui.value;
                }
            });
            angular.element("#amount").val(angular.element("#slider-range-min")
                    .slider("value") + " dollars");
        };
    }
}());