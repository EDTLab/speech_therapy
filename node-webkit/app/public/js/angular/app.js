'use strict';
var stApp = angular.module('stApp', ['ngResource', 'ngAnimate'])
    .factory('ItemsDB', function ($resource) {
        "use strict";
        return $resource('/items/:id', {id: '@id'}, {
            get: {method: 'GET', isArray: true },
            add: {method: 'POST'},
            delete: {method: 'DELETE'}
        });
    })
    .factory('Window', function () {
        "use strict";
        var gui = require('nw.gui');
        return gui.Window.get();
    })
    .controller('WindowToolbar', ['$scope', 'Window', function ($scope, Window) {
        "use strict";
        $scope.windowMinimize = function() {
            Window.minimize();
        };

        $scope.windowToggleFullscreen = function () {
            Window.toggleFullscreen();
        };

        $scope.windowClose = function () {
            Window.close();
        };
    }])
    .controller('Listing', ['$scope', 'ItemsDB', function ($scope, ItemsDB) {
        "use strict";
        ItemsDB.get(function (data) {
            $scope.items = data;
        });

        $scope.addItem = function () {
            var item = {
                name: $scope.newItem.name,
                description: $scope.newItem.description
            };
            ItemsDB.add(item, function (data) {
                item._id = data._id;
                $scope.items.push(item);
                $scope.newItem = {
                    name: null,
                    description: null
                };
            });
        };

        $scope.removeItem = function (item) {
            ItemsDB.delete({id: item._id}, function () {
                $scope.items.splice($scope.items.indexOf(item), 1);
            });
        };
    }]);

