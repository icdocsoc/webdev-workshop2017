var angular = window.angular

var app = angular.module('chatapp', [])

app.value('User', {
  nickname: 'Anonymous'
})

app.service('MessageService', function (User) {
  var messages = []

  this.get = function () {
    return messages
  }

  this.send = function (text) {
    var msg = {
      sender: User.nickname,
      text: text,
      date: new Date()
    }

    messages.unshift(msg)
  }
})

app.controller('ChatController', function ($scope, User, MessageService) {
  $scope.user = User
  $scope.messages = MessageService.get()

  $scope.setNick = function () {
    User.nickname = $scope.nickname
  }

  $scope.send = function () {
    MessageService.send($scope.text)
    $scope.text = ''
  }
})
