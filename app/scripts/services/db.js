'use strict';

angular.module('presentApp')
  .factory('db', function () {
    var tasks = function(task) {

    }


    // Public API here
    return {

      getTasks: function() {
        var promise;
        promise = BaasBox.loadCollectionWithParams("tasks", {
          orderBy: "_creation_date desc"
        })
          .done(function(res) {
            return res;
          })
          .fail(function(err) {
            console.log(err);
          });
        return promise;
      },

      makeTask: function(task) {
        var promise;
        promise = BaasBox.save(task, "tasks")
          .done(function(res) {
            return res;
          })
          .fail(function(err){
            console.log(err);
          });
        return promise;

      }
    };
  });
