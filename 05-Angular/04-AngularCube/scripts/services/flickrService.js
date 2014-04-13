"use strict";

angular.module("cubeApp")
  .provider("flickr", function () {
    var API_KEY;

    // This is a provider so that it can be configured before beeing injection (in contrast to a factory or a service)
    // Configuration is done by the setter of the API Key below.

    this.apiKey = function (apiKey) {
      if (apiKey) {
        API_KEY = apiKey;
      }
      return apiKey;
    };

    // This $get method is called by the Angular dependency injection
    this.$get = function ($http) {
      var getPhotosByTagFn = function (tag) {
        return $http.get("http://api.flickr.com/services/rest/", {
          params: {
            method: "flickr.photos.search",
            api_key: API_KEY,
            format: "json",
            nojsoncallback: 1,
            per_page: "6",
            tags: tag,
            tag_mode: "all"
          }
        })
          .then(function (response) {
            var array = response.data.photos.photo.map(function (photo) {
              return "http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg"
                .replace("{farm-id}", photo.farm)
                .replace("{server-id}", photo.server)
                .replace("{id}", photo.id)
                .replace("{secret}", photo.secret);
            });
            return array;
          });
      };

      // Public API
      return {
        getPhotosByTag: function (tag) {
          return getPhotosByTagFn(tag);
        },
        getApiKey: function(){
          return API_KEY;
        }
      };
    }
  });