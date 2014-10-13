'use strict';

angular.module('presentApp')
  .factory('db', function () {
    var tasks = function(task) {

    }

    /* Recive task from BaaseBox */
    var getTasks = function() {
        var promise = BaasBox.loadCollectionWithParams("tasks", {
          where: "isComplete = false",
          orderBy: "_creation_date desc"
        })
          .done(function(res) {
            return res;
          })
          .fail(function(err) {
            console.log(err);
          });
        return promise;
      };

    var makeTask = function(task) {
        var promise = BaasBox.save(task, "tasks")
          .done(function(res) {
            return res;
          })
          .fail(function(err){
            console.log(err);
          });
        return promise;
      };

    var invertCompletion = function(task) {
      var promise = BaasBox.updateField(task.id, "tasks", "isComplete", !task.isComplete)
        .done(function(res) {
          return res;
        })
        .fail(function(error) {
          console.log("error ", error);
        });
      return promise;

    };

    var setCompletionDate = function(task) {
      var promise = BaasBox.updateField(task.id, "tasks", "date", Date.now())
        .done(function(res) {
          return res;
        })
        .fail(function(err){
          console.err(err);
        });

      return promise;
    };


    // Public API here
    return {

      getTasks: function() {
        return getTasks();
      },

      makeTask: function(task) {
        return makeTask(task);
      },

      completeTask: function(task) {
        var promise = new Promise(
          function(resolve, reject) {
            setCompletionDate(task)
              .then(function (dateRes) {
                invertCompletion(dateRes)
                  .then(function (taskRes) {
                    resolve(taskRes);

                  })
              })

          }
        );
        return promise;
      },

    };
  });
