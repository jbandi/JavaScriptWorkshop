var app = angular.module("courserater", ['ngResource']);


// declare a factory for the restful client
app.factory('Rating', ['$resource',
    function ($resource) {

        var restEndpointUrl = 'http://courserater-jbandi.rhcloud.com/courserater/rest/ratings-cors';
//        var restEndpointUrl = 'http://localhost:8080/courserater/rest/ratings-cors';

        // Use the $resource service to declare a restful client -- restangular might be a better alternative
        var Rating = $resource(restEndpointUrl + '/:id', {id: '@id'}, {
            'update': { method: 'PUT'}
        });

        // extend the restful client with additional method
        angular.extend(Rating.prototype, {
            persist: function (callback) {
                if (this.id) {
                    return this.$update(callback);
                }
                return this.$save(callback);
            }
        });

        return Rating;
    }]);

function RestController($scope, $q, Rating) {

    $scope.command = {doPost: true, doPut: true, doDelete: true};

    $scope.executeCommand = function () {

        // use the restful client
        Rating.query().$promise // GET all resources
            .then(function(ratings){
                $scope.ratings = ratings;

                if ($scope.command.doPost) {
                    var rating = new Rating()
                    rating.score = 88;

                    var defer = $q.defer()
                    rating.persist(function (data, headers) { // POST new resource
                        var newId = headers('Location').split('/').pop();
                        defer.resolve(newId)
                    });
                    return defer.promise;
                }
            })
            .then (function(newId) {
                if (!newId) return;
                return Rating.get({id: newId}).$promise; // GET new resource
            })
            .then(function(rating){
                var ratingToUpdate = rating ? rating : getLastResource();
                if ($scope.command.doPut && ratingToUpdate) {
                    ratingToUpdate.score = 55;
                    return ratingToUpdate.persist(); // PUT new resource
                }
            })
            .then(function(updatedRating){
                var ratingToDelete = updatedRating ? updatedRating : getLastResource();
                if ($scope.command.doDelete && ratingToDelete) {
                    Rating.delete({id: ratingToDelete.id}); // DELETE new resource
                }
            });
    };

    var getLastResource = function(){
        if ($scope.ratings && $scope.ratings.length > 0) return $scope.ratings[$scope.ratings.length -1];
        else return undefined;
    };
}