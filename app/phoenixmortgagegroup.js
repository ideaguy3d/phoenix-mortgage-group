/**
 *
 * Created by Julius Alvarado on 6/4/2017.
 * jQuery & Angular User Interface code
 *
 */

(function () {
    "use strict";
    var app = angular.module('pmg-app', []),
        controllerId = 'CoreCtrl',
        serviceId = 'pmgDataService',
        utilityId = 'pmgUtilityService';

    app.controller(controllerId, ["$scope", CoreCtrlClass]);
    app.factory(serviceId, [pmgDataService]);
    app.factory(utilityId, [pmgUtilityService]);
    var pmgDataModel = {}, bar = " | ";

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
                qState: 'unanswered',
                propertyUsedFor: ''
            },
            zipCode: {
                active: false,
                qState: 'unanswered',
                zip: 12345
            },
            estimateValue: {
                active: false,
                qState: 'unanswered',
                value: ''
            },
            remainingBalance1: {
                active: false,
                qState: 'unanswered',
                balance: ''
            },
            secondMortgage: {
                active: false,
                qState: 'unanswered',
                has2ndMortgage: ''
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
                qState: 'unanswered',
                creditEstimate: ''
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
                qState: 'unanswered',
                priorMilitary: ''
            },
            vaLoan: {
                active: false,
                qState: 'unanswered',
                hadVaLoan: ''
            },
            bankruptcyQuestion: {
                active: false,
                qState: 'unanswered',
                bankruptcy: '',
                foreclosure: ''
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
        };
        // make a copy of the data
        pmgDataModel = $scope.activeSlide;
    }

    function pmgDataService() {

    }

    function pmgUtilityService() {
        var activeKey = function (activeSlide) {
            var zKey = '';
            for (var k in activeSlide) {
                if (activeSlide.hasOwnProperty(k)) {
                    if (activeSlide[k].active) {
                        zKey = k;
                    }
                }
            }
            return zKey;
        };

        var collectEmailData = function () {
            var name = "Name: " + pmgDataModel.intro.username + bar;
            var email = "Email: " + pmgDataModel.intro.email + bar;
            var phoneNumber = "Phone Number:" + pmgDataModel.intro.phoneNumber + bar;
            var propertyUsedFor = "Property will be used for: " + pmgDataModel.propertyUsed.propertyUsedFor + bar;
            var zipCode = "Zip code: " + pmgDataModel.zipCode.zip + bar;
            var mortgage_1st = "1st mortgage estimated value: " + pmgDataModel.estimateValue.value
                + " with a remaining amount of " + pmgDataModel.remainingBalance1.balance + bar;
            var mortgage_2nd = "2nd Mortgage: " + pmgDataModel.secondMortgage.has2ndMortgage +
                " with an estimated balance of " + pmgDataModel.remainingBalance2.balance + bar;
            var wants2borrow = "Wants to borrow: " + pmgDataModel.borrow.amount + bar;
            var credit = "Credit estimate: " + pmgDataModel.creditScore.creditEstimate + bar;
            var birthDate = "Birthdate: " + pmgDataModel.born.month + "-" + pmgDataModel.born.day + "-"
                + pmgDataModel.born.year + bar;
            var priorMilitary = "Prior military: " + pmgDataModel.military.priorMilitary + bar;
            var hasVaLoan = "Has a va loan: " + pmgDataModel.vaLoan.hadVaLoan + bar;
            var bankrupt = "Bankrupt: " + pmgDataModel.bankruptcyQuestion.bankruptcy
                + " from " + pmgDataModel.bankruptcy.yearsAgo + " years ago" + bar;
            var foreclosure = "Foreclosure: " + pmgDataModel.bankruptcyQuestion.foreclosure
                + " from " + pmgDataModel.foreclosure.yearsAgo + " years ago" + bar;
            var address = "Address: " + pmgDataModel.currentAddress.location + bar;
            return name + email + phoneNumber + propertyUsedFor + zipCode + mortgage_1st + mortgage_2nd + wants2borrow
                + credit + birthDate + priorMilitary + hasVaLoan + bankrupt + foreclosure + address;
        };

        return {
            activeKey: activeKey,
            emailData: collectEmailData
        }
    }
}());


//