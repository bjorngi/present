'use strict';

angular.module('presentApp')
  .factory('todotxtParse', function () {
    var task = {
      "text": null,
      "projects": [],
      "contexts": [],
      "date": null,
      "isComplete": false
    };

    var toSortUrlTask = function(todotxt) {
      var newText = "";
      var words = todotxt.split(" ");
      for(var i=0; i < words.length; i++) {
        switch(words[i].charAt(0)) {
          case "@":
          case "+":
            words[i] = "<a class='pointer' ng-model='filter' ng-click='search = "+ words[i] +")'>" + words[i] + "</a>";
        }
      }
      return words.join(" ");
    };

    var taskToSortUrl = function(task) {
      var promise = new Promise(function(resolve, reject) {
        task.text = toSortUrlTask(task.text);
        resolve(task);

      });
      return promise;

    };

    var tasksToSortUrl = function(tasks) {
      var promise = new Promise(function(resolve, reject) {
        for(var i = 0; i < tasks.length; i++) {
          tasks[i].text = toSortUrlTask(tasks[i].text);
        }
        resolve(tasks);
      });

      return promise;
    };

    var parseTxt = function(todotxt) {
      var promise = new Promise(
        function(resolve, reject) {
          task.text = todotxt;

          if(todotxt.length !== 0) {
            var words = todotxt.split(" ");
            for(var i=0; i < words.length; i++) {
              switch(words[i].charAt(0)) {
                case "@":
                  task.contexts.push(words[i].substr(1, words[i].length));
                  break;
                case "+":
                  task.projects.push(words[i].substr(1, words[i].length));
                  break;
              }
            }
            resolve(task)
          } else {
            reject("Length can't be 0");
          }
        });

      return promise
    };

    // Public API here
    return {
      parse: function(todoTxt) {
        return parseTxt(todoTxt);
      },

      tasksToSortUrl: function(tasks) {
        return tasksToSortUrl(tasks);
      },

      taskToSortUrl: function(task) {
        return taskToSortUrl(task);
      }
    };
  });
