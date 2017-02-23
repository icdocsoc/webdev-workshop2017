var angular = window.angular

var app = angular.module('chatapp', ['ngResource'])

app.factory('Message', function ($resource) {
  return $resource('/api/message')
})

app.value('User', {
  nickname: 'Anonymous'
})

app.service('MessageService', function ($interval, User, Message) {
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

  $interval(refresh, 1000)

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

app.controller('UserController', function ($scope, $http, User) {
  $scope.user = User

  $scope.register = function () {
    $http.post('/api/user/register', {
      username: $scope.user.username,
      password: $scope.user.password
    }).then(function (res) {
      $scope.regMessage = 'Registration successful! You can log in now.'
      $scope.regStatus = 'success'
    }).catch(function (res) {
      $scope.regMessage = 'Registration failed! Someone is already using that name.'
      $scope.regStatus = 'danger'
    })
  }
})
