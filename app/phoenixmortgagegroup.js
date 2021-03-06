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

    app.controller(controllerId, ["$scope", "$window", "pmgUtilityService", CoreCtrlClass]);
    app.factory(utilityId, [pmgUtilityService]);
    var pmgDataModel = {}, bar = ", \n";

    function CoreCtrlClass($scope, $window, pmgUtilityService) {
        $scope.activeSlide = {
            closeWindowCondition: true,
            intro: {
                active: true,
                qState: 'unanswered',
                username: '',
                loanType: 'refinance',
                propertyType: 'singleFamily'
            },
            intro2: {
                email: '',
                phoneNumber: ''
            },
            propertyUsed: {
                active: false,
                qState: 'unanswered',
                propertyUsedFor: ''
            },
            zipCode: {
                active: false,
                qState: 'unanswered',
                zip: 0
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
                answer: ''
            },
            remainingBalance2: {
                active: false,
                qState: 'unanswered',
                balance: ''
            },
            borrow: {
                active: false,
                qState: 'unanswered',
                amount: '',
                answer: ''
            },
            creditScore: {
                active: false,
                qState: 'unanswered',
                creditEstimate: ''
            },
            firstHomePurchase: {
                active: false,
                qState: 'unanswered',
                answer: ''
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
                foreclosure: 0
            },
            bankruptcy: {
                active: false,
                qState: 'unanswered',
                yearsAgo: 0
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

        var closeCondition = $scope.activeSlide.closeWindowCondition,
            justClose = false;
        if (justClose) {
            $window.onbeforeunload = function (e) {
                var text = "Thanks for visiting.";
                pmgUtilityService.sendEmail();
                e.returnValue = null;
                return null;
            }
        }
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

        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        }

        var collectEmailData = function () {
            var name = "Name: " + pmgDataModel.intro.username + bar;
            var propertyType = "property type: " + pmgDataModel.intro.propertyType + bar;
            var loanType = "loan type: " + pmgDataModel.intro.loanType + bar;
            var email = "Email: " + pmgDataModel.intro2.email + bar;
            var phoneNumber = "Phone Number:" + pmgDataModel.intro2.phoneNumber + bar;
            var propertyUsedFor = "Property will be used for: " + pmgDataModel.propertyUsed.propertyUsedFor + bar;
            var zipCode = "Zip code: " + pmgDataModel.zipCode.zip + bar;
            var mortgage_1st = "1st mortgage estimated value: " + pmgDataModel.estimateValue.value
                + " with a remaining amount of " + pmgDataModel.remainingBalance1.balance + bar;
            var mortgage_2nd = "2nd Mortgage: " + pmgDataModel.secondMortgage.answer +
                " with an estimated balance of " + pmgDataModel.remainingBalance2.balance + bar;
            var wants2borrow = "Wants to borrow: " + pmgDataModel.borrow.amount + bar;
            var credit = "Credit estimate: " + pmgDataModel.creditScore.creditEstimate + bar;
            var firstHomePurchase = 'First Time Purchasing a home: ' + pmgDataModel.firstHomePurchase.answer + bar;
            var priorMilitary = "Prior military: " + pmgDataModel.military.priorMilitary + bar;
            var hasVaLoan = "Has a va loan: " + pmgDataModel.vaLoan.hadVaLoan + bar;
            var bankrupt = "Bankrupt: " + pmgDataModel.bankruptcyQuestion.bankruptcy
                + " from " + pmgDataModel.bankruptcy.yearsAgo + " years ago" + bar;
            var foreclosure = "Foreclosure: " + pmgDataModel.bankruptcyQuestion.foreclosure
                + " from " + pmgDataModel.foreclosure.yearsAgo + " years ago" + bar;
            var address = "Address: " + pmgDataModel.currentAddress.location;
            return name + email + phoneNumber + propertyType + loanType + propertyUsedFor + zipCode + mortgage_1st + mortgage_2nd + wants2borrow
                + credit + firstHomePurchase + priorMilitary + hasVaLoan + bankrupt + foreclosure + address;
        };

        var sendEmail = function () {
            var c_email = pmgDataModel.intro2.email;
            var c_name = pmgDataModel.intro.name || 'user did not provide name';
            var c_message = collectEmailData();
            var emailCheck = typeof c_email === "string";
            var messageCheck = typeof c_email === "string";
            var validationCheck = (!emailCheck || !messageCheck) || !isValidEmailAddress(c_email);
            if (!messageCheck) {
                console.error("No data was collected.");
            }
            else {
                jQuery.ajax({
                    type: "POST",
                    url: "php/contactForm.php",
                    dataType: 'json',
                    data: {
                        c_email: c_email,
                        c_name: c_name,
                        c_message: c_message
                    }
                });
            }
        };

        return {
            activeKey: activeKey,
            emailData: collectEmailData,
            sendEmail: sendEmail
        }
    }
}());


//