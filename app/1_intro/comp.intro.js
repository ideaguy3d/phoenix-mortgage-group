/**
 * Created by Julius Alvarado on 6/7/2017.
 */


(function () {
    "use strict";

    var app = angular.module('pmg-app'),
        componentId = 'intro';

    app.component(componentId, {
        templateUrl: 'app/1_intro/temp.intro.html',
        bindings: {activeSlide: '='},
        controller: ['pmgUtilityService', CompCtrlClass]
    });

    function CompCtrlClass(pmgUtilityService) {
        var vm = this, file = 'comp.intro.js';
        vm.nameForm = true;
        vm.realPerson = true;
        vm.status = "This is working ^_^/ from [ " + file + " ]";

        var pmgData = function () {
            var zName = "name: " + vm.activeSlide.intro.username + " | ";
            var zEmail = "email: " + vm.activeSlide.intro.email + " | ";
            var zPhoneNumber = "phone number: " + vm.activeSlide.intro.phoneNumber + " | ";
            return zName + zEmail + zPhoneNumber;
        };

        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        }

        vm.yesClick = function () {
            vm.endSlide = true;
            vm.realPerson = !vm.realPerson;
        };

        vm.noClick = function () {
            vm.userClickedNo = true;
            vm.endSlide = false;
            vm.realPerson = !vm.realPerson;
        };

        vm.btnClick = function () {
            var c_name = vm.activeSlide.intro.username;
            var c_email = vm.activeSlide.intro.email;
            // this is the all important Data !!
            var c_message = pmgData();
            console.log(c_message);
            if (!vm.endSlide) {
                var activeKey = pmgUtilityService.activeKey(vm.activeSlide);
                vm.activeSlide[activeKey].active = false;
                vm.activeSlide[activeKey].qState = 'answered';
                vm.activeSlide.propertyUsed.active = true;
                return;
            }
            vm.someoneContact = "Thanks, someone will contact you soon.";

            //----------------
            //-- Send Email --
            //----------------
            var responseMessage = jQuery('#ajax-response');

            // Front End Validation
            if ((c_email == "" || c_message == "") || (!isValidEmailAddress(c_email) )) {
                vm.pmgError = "Please correct mistakes.";
                responseMessage.fadeIn(500);
                responseMessage.html('<i class="fa fa-warning"></i> Check all fields.');
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
                    },
                    beforeSend: function (result) {
                        vm.pmgError = '';
                        $('#contact-form button').empty();
                        jQuery('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
                    },
                    success: function (result) {
                        if (result.sendstatus == 1) {
                            responseMessage.html(result.message);
                            responseMessage.fadeIn(500);
                            $('#contact-form').fadeOut(500);
                        } else {
                            $('#contact-form button').empty();
                            $('#contact-form button').append('<i class="fa fa-retweet"></i> Try again.');
                            responseMessage.html(result.message);
                            responseMessage.fadeIn(1000);
                        }
                    }
                });
            }
        };

        vm.nameSubmit = function () {
            vm.nameForm = !vm.nameForm;
        };
    }
}());