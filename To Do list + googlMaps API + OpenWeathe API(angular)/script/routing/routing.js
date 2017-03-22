app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');


    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'tamplates/home.html',
        controller: 'RoutCtrl'
    })


    .state('video', {
        url: '/video',
        templateUrl: 'tamplates/pageVideo/index.html'
    })

    .state('todo', {
        url: '/ToDo',
        templateUrl: 'tamplates/toDo/index.html'
    })

    .state('todo.addition', {
        url: '/addition',
        templateUrl: 'tamplates/addition/addition.html',
        controller: 'clockCtrl'
    })


});