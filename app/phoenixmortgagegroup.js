/**
 *
 * Created by Julius Alvarado on 6/4/2017.
 * jQuery & Angular User Interface code
 *
 */

(function(){
    "use strict";
    var app = angular.module('pmg-app', []),
        controllerId = 'CoreCtrl',
        serviceId = 'pmgDataService',
        utilityId = 'pmgUtilityService';

    app.controller(controllerId, ["$scope", CoreCtrlClass]);
    app.factory(serviceId, [pmgDataService]);
    app.factory(utilityId, [pmgUtilityService]);

    function CoreCtrlClass($scope) {
        $scope.activeSlide = {
            intro: {
                active: true,
                qState: 'unanswered',
                username: '',
                email: 'user@mail.com',
                phoneNumber: 4151234567
            },
            propertyUsed: {
                active: false,
                qState: 'unanswered'
            },
            zipCode: {
                active: false,
                qState: 'unanswered',
                zip: 12345
            },
            valueEstimate: {
                active: false,
                qState: 'unanswered'
            },
            remainingBalance1: {
                active: false,
                qState: 'unanswered',
                balance: ''
            },
            secondMortgage: {
                active: false,
                qState: 'unanswered',
                answer: 'a'
            },
            remainingBalance2: {
                active: false,
                qState: 'unanswered',
                balance: ''
            },
            borrow: {
                active: false,
                qState: 'unanswered',
                amount: ''
            },
            creditScore: {
                active: false,
                qState: 'unanswered'
            },
            born: {
                active: false,
                qState: 'unanswered',
                day: '',
                month: '',
                year: ''
            },
            military: {
                active: false,
                qState: 'unanswered'
            },
           vaLoan: {
                active: false,
                qState: 'unanswered'
            },
            bankruptcyQuestion: {
                active: false,
                qState: 'unanswered'
            },
            bankruptcy: {
                active: false,
                qState: 'unanswered',
                yearsAgo: ''
            },
            foreclosure: {
                active: false,
                qState: 'unanswered',
                yearsAgo: ''
            },
            currentAddress: {
                active: false,
                qState: 'unanswered',
                location: ''
            },
            ratesReady: {
                active: false,
                qState: 'unanswered'
            }
        }
    }

    function pmgDataService() {

    }
    
    function pmgUtilityService() {
        var activeKey = function(activeSlide){
            var zKey = '';
            for(var k in activeSlide) {
                if(activeSlide.hasOwnProperty(k)) {
                    if(activeSlide[k].active) {
                        zKey = k;
                    }
                }
            }
            return zKey;
        };

        return {
            activeKey: activeKey
        }
    }
}());


//