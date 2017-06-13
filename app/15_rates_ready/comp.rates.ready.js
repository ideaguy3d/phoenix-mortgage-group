/**
 * Created by Julius Alvarado on 6/11/2017.
 */

(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'ratesReady';

    app.component(componentId, {
        templateUrl: 'app/15_rates_ready/temp.rates.ready.html',
        bindings: { activeSlide: '=' },
        controller: ['pmgUtilityService', '$location', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService, $location) {
        var vm = this, file = 'comp.rates.ready.js';

        vm.status = "This is working ^_^/ from [ "+file+" ]";

        vm.btnClick = function () {
            //-- SEND THE EMAIL:
            console.log("email date: ");
            console.log(pmgUtilityService.emailData());
            // send user to pmg login page
            console.log("should send user to pmg login page.");
            //location.assign("https://phoenixmortgagegroup.mortgage-application.net/MyAccount/AccountLogin.aspx");
        };

        vm.$onInit = function(){
            console.log("jha - "+file+" Successfully initialized ^_^/");
        };
    }
}());