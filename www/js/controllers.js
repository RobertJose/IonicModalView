angular.module('starter.controllers', [])


.controller('ChatsCtrl', function($scope,$ionicModal, Chats) {

 $scope.chats = Chats.all();


    $scope.modal= function(chat){
        $ionicModal.fromTemplateUrl('templates/ionicModalView.html', function($ionicModal) 
        {
            $scope.ionicModal = $ionicModal; 
            $scope.ionicModal.show();
            }, 
        {
        scope: $scope,
        animation: 'slide-in-up'}
    );}
    

});


