/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="_all.ts"/>

// materialApp is created here
module ContactManagerApp {
    // import JuliusSkillsCtrl = JuliusSkillsApp.JuliusSkillsCtrl;
    angular.module("materialApp", ['ngMaterial', 'ngMdIcons', 'ngMessages'])
        .service('userService', UserService)
        .controller("mainCtrl", MainCtrl)
        .config(($mdIconProvider: angular.material.IIconProvider,
                 $mdThemingProvider: angular.material.IThemingProvider) => {
            $mdIconProvider
                .defaultIconSet('./assets/svg/avatars.svg', 128)
                .icon("google_plus", "./assets/svg/google_plus.svg")
                .icon("hangouts", "./assets/svg/hangouts.svg")
                .icon("twitter", "./assets/svg/twitter.svg")
                .icon("phone", "./assets/svg/phone.svg")
                .icon("menu", './assets/svg/menu.svg', 24);

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');

            // to have a dark theme.
            //$mdThemingProvider.theme("default").dark();

            // $mdThemingProvider.theme('default')
            //     .primaryPalette('pink', {
            //         'default': '400',
            //         'hue-1': '100',
            //         'hue-2': '600',
            //         'hue-3': 'A100'
            //     })
            //     .accentPalette('purple', {
            //         'default': '200'
            //     });
            //
            //use ".definePalette({});" for complete customization
        });
} // END OF: module ContactManagerApp {}

module JuliusSkillsApp {
    angular.module('materialApp')
        .controller('juliusSkillsCtrl', JuliusSkillsCtrl);
}

//\\