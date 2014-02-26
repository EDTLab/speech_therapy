var artiGame = angular.module('artiGame', ['ngRoute']);

artiGame.service('artiGameService', function () {
    "use strict";

    return {
        data: {
            'words': ['엄지', '엄마', '가방', '바위', '전화', '그릇', '검사', '발성', '바다'],
            'points': [0, 50, 100, 150, 200, 250],
            'imgs': ['../img/3_arti/game1/bigCircle01.png']
        },
        getBigCircle: function () {
            var circle = {};
            circle.img = this.data.imgs[Math.floor(Math.random() * this.data.imgs.length)];
            circle.word = this.data.words[Math.floor(Math.random() * this.data.words.length)];
            circle.point = this.data.points[Math.floor(Math.random() * this.data.points.length)];
            return circle;
        },
        random: function (from, to) {
            return Math.floor(Math.random() * (to - from + 1)) + from;
        },
        setPosition: function (n, e, s, w) {
            var style = {};
            style.top = this.random(n, s);
            style.left = Math.random() * 2 < 1? this.random(50, 300)
            return style;
        },
        getPosition: function () {
            var a = [];
            for (var i in [0, 1, 2, 3]) {
                a[i] = this.setPosition();
            }
            return a;
        }
    };
});

artiGame.controller('artiGameController', ['$scope', 'artiGameService', function ($scope, artiGameService) {
    "use strict";

    $scope.loadData = function ($event, val) {
        $scope.bigCircle = artiGameService.getBigCircle();
        $scope.position = artiGameService.getPosition();
    };

    $scope.loadData();
}]);
