var angular = window.angular

var app = angular.module('chatapp', ['ngResource'])

app.factory('Message', function ($resource) {
  return $resource('/api/messages')
})

app.value('User', {
  nickname: 'Anonymous'
})

app.service('MessageService', function (User, Message) {
  var messages = Message.query()

  var listeners = []

  var notifyNewMessage = function () {
    for (var listener of listeners) {
      listener()
    }
  }

  var refresh = function () {
    Message.query(function (newMessages) {
      messages = newMessages
      notifyNewMessage()
    })
  }

  this.onNewMessage = function (fn) {
    listeners.push(fn)
  }

  this.get = function () {
    return messages
  }

  this.send = function (text) {
    var msg = new Message({
      sender: User.nickname,
      text: text,
      date: new Date()
    })
    msg.$save(function () {
      refresh()
    })
  }
})

app.controller('ChatController', function ($scope, User, MessageService) {
  $scope.user = User
  $scope.messages = MessageService.get()

  MessageService.onNewMessage(function () {
    $scope.messages = MessageService.get()
  })

  $scope.setNick = function () {
    User.nickname = $scope.nickname
  }

  $scope.send = function () {
    MessageService.send($scope.text)
    $scope.text = ''
  }
})
