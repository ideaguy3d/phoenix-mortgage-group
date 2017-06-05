/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module("materialApp", ['ngMaterial',
        'ngMdIcons'])
        .service('userService', UserService)
        .controller("mainCtrl", MainCtrl)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 256)
            .icon('menu', './assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
