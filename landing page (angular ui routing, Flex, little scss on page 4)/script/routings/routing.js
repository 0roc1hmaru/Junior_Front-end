app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');


    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'tampletes/home.html',
        controller: 'RoutCtrl'
    })


    .state('event', {
        url: '/event',
        templateUrl: 'tampletes/app4/event.html',
        controller: 'app4Ctrl'
    })

});