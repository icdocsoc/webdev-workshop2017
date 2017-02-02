var angular = window.angular

var app = angular.module('chatapp', [])

app.service('MessageService', function () {
  var messages = [
    {
      sender: 'Szilveszter',
      text: 'Cras justo odio',
      date: '2017-02-02 18:09'
    },
    {
      sender: 'Abhinav',
      text: 'Dapibus ac facilisis in',
      date: '2017-02-02 18:08'
    },
    {
      sender: 'Abhinav',
      text: 'Morbi leo risus',
      date: '2017-02-02 18:07'
    },
    {
      sender: 'Szilveszter',
      text: 'Porta ac consectetur ac',
      date: '2017-02-02 18:06'
    },
    {
      sender: 'Abhinav',
      text: 'Vestibulum at eros',
      date: '2017-02-02 18:05'
    }
  ]

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
