var angular = window.angular

var app = angular.module('chatapp', [])

app.service('MessageService', function () {
  var messages = []

  this.get = function () {
    return messages
  }

  this.send = function (sender, text) {
    var msg = {
      sender: sender,
      text: text,
      date: new Date()
    }

    messages.unshift(msg)
  }
})

app.controller('ChatController', function ($scope, MessageService) {
  $scope.messages = MessageService.get()

  $scope.send = function () {
    MessageService.send($scope.nickname, $scope.text)
    $scope.text = ''
  }
})
