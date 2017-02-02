var angular = window.angular

var app = angular.module('chatapp', [])

app.controller('ChatController', function ($scope) {
  $scope.messages = [
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
})
