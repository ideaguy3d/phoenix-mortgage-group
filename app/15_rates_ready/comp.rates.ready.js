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
        var vm = this;

        vm.btnClick = function () {
            // pmg login page: https://phoenixmortgagegroup.mortgage-application.net/MyAccount/AccountLogin.aspx
            location.assign("http://www.phoenixmortgagegroup.com/Calculators/Menu.aspx");
            // Phoenix Mortgage Calculators: http://www.phoenixmortgagegroup.com/Calculators/Menu.aspx
        };
    }
}());