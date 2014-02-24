var artiGame = angular.module('artiGame', []);

artiGame.controller('artiGameController', function ($scope) {
    "use strict";

    /*
    var style = {};
    style.top = Math.floor(Math.random() * 400);
    style.left = Math.floor(Math.random() * 1200);
    $scope.artiGameStyle = style;
    */
    var num = 0;
    $scope.setPosition = function () {
        console.log(++num);
        var style = {};
        style.top = Math.floor(Math.random() * 400) + 200;
        style.left = Math.floor(Math.random() * 1200);
        return style;
    };

    $scope.loadData = function () {
        var data = {
                'words': ['엄지', '엄마', '가방', '바위', '전화', '그릇', '검사', '발성', '바다'],
                'points': [0, 50, 100, 150, 200, 250],
                'imgs': ['../img/3_arti/game1/bigCircle01.png']
            },
            circle = {};

        circle.img = data.imgs[Math.floor(Math.random() * data.imgs.length)];
        circle.word = data.words[Math.floor(Math.random() * data.words.length)];
        circle.point = data.points[Math.floor(Math.random() * data.points.length)];

        $scope.bigCircle = circle;
    };

    $scope.loadData();
});