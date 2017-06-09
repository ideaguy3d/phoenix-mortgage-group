/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'born';

    app.component(componentId, {
        templateUrl: 'app/born/temp.born.html',
        bindings: {},
        controller: [CompCtrlClass]
    });

    function CompCtrlClass() {
        var vm = this, file = 'comp.born.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());