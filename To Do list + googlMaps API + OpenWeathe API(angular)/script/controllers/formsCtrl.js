app.controller('MyList', ['$scope', 'clockServise', function ($scope, clockServise) {

    $scope.addToStorage = localStorage.getItem('listTask');
    $scope.listTask = (localStorage.getItem('listTask') !== null) ? JSON.parse($scope.addToStorage) : [{
        nameTask: 'AngularJs',
        periodTask: 'Friday',
        taskInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus, a quam ducimus officia? Optio, omnis esse sed error mollitia quas quos odio quis, reiciendis vitae commodi, ab libero, eveniet.',
        emailTask: 'some@example.com',
        done: false
    }, {
        nameTask: 'ReactJS',
        periodTask: 'soon as posible',
        taskInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias soluta vero cupiditate iusto, exercitationem reprehenderit aspernatur, corporis atque minus dicta maiores reiciendis, incidunt quae? Voluptatum blanditiis neque soluta iste nam? Vero similique maiores minima nulla iste aperiam officiis ducimus maxime, voluptatibus saepe consequatur ea consectetur nesciunt numquam dolorum excepturi accusantium? Labore quia ducimus iste, explicabo laboriosam praesentium recusandae, aperiam quisquam.',
        emailTask: 'some@example.com',
        done: false

    }, ];
    localStorage.setItem('listTask', JSON.stringify($scope.listTask));

    $scope.todoAdd = function () {
        $scope.listTask.push({
            nameTask: $scope.nameTask,
            periodTask: $scope.periodTask,
            taskInfo: $scope.taskInfo,
            emailTask: $scope.emailTask,
            done: false
        });
        $scope.nameTask = "";
        $scope.periodTask = "";
        $scope.taskInfo = "";
        $scope.emailTask = "";
        localStorage.setItem('listTask', JSON.stringify($scope.listTask));
    };

    $scope.isChecked = function () {
        localStorage.setItem('listTask', JSON.stringify($scope.listTask));
    };

    $scope.remove = function () {
        var oldList = $scope.listTask;
        $scope.listTask = [];
        angular.forEach(oldList, function (x) {
            if (!x.done) {
                $scope.listTask.push(x);
            }
        });
        localStorage.setItem('listTask', JSON.stringify($scope.listTask));
    };
}]);