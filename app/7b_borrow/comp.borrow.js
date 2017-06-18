/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'borrow';

    app.component(componentId, {
        templateUrl: 'app/7b_borrow/temp.borrow.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass (pmgUtilityService) {
        var vm = this;

        vm.yesClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            console.log(activeKey+" = activeKey");
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';
            vm.activeSlide.borrow.answer = 'yes';
            vm.activeSlide.creditScore.active = true;
            console.log("vm.activeSlide.borrow.amount = "+vm.activeSlide.borrow.amount);
        };

        vm.noClick = function () {
            var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
            console.log(activeKey+" = activeKey");
            vm.activeSlide[activeKey].active = false;
            vm.activeSlide[activeKey].qState = 'answered';

            // requires special logic
            vm.activeSlide.borrow.answer = 'no';
            vm.activeSlide.creditScore.active = true;
        };

        // this updates the data model and view model for the draggable slider
        vm.$onInit = function(){
            angular.element("#slider-amount2borrow").slider({
                range: "min",
                value: 42500,
                min: 0,
                max: 85000,
                step: 5000,
                slide: function (event, ui) {
                    angular.element("#amount2borrow").val(ui.value + " dollars");
                    vm.activeSlide.borrow.amount = "$"+ui.value;
                }
            });
            angular.element("#amount2borrow").val(angular.element("#slider-range-min")
                    .slider("value") + " dollars");
        };
    }
}());