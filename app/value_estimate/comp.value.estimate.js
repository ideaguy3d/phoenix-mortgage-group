/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'valueEstimate';

    app.component(componentId, {
        templateUrl: 'app/value_estimate/temp.value.estimate.html',
        bindings: { activeSlide: '=' },
        controller: [ CompCtrlClass ]
    });

    function CompCtrlClass() {
        var vm = this, file = 'comp.value.estimate.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());