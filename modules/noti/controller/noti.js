angular.module('phyman.noti',['ngMaterial', 'ngMessages','ngMessages', 'angular-jwt', 'ui.router','ngGrid','phyman.user','phyman.detail'])
.config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('altTheme')
	    .primaryPalette('purple');
	})
/*.controller('notidetailCtrl',['$scope','$state','$rootScope','NotiServie',
      function($scope,$state,$rootScope,NotiServie){
	alert("notidetailCtrl");
	
}])*/
.controller('notilistCtrl',['$scope','$state', '$rootScope','NotiService',
      function($scope,$state,$rootScope,NotiService){
	var promise =NotiService.getlist();
	 promise.then(function(response) {
		 $scope.noti=JSON.parse(response.data.list);
	 },function(response){
		 alert("NotiList fail");
		/* $state.transitionTo("NotiDetail",null,{
			 reload:true
		 });*/
	 });
	 $scope.notiDetail= function(id){
		 NotiService.setnotiid(id);
		 $state.go('/',null,{
			 reload:true
		 });
		/* $state.go('NotiDetail',null,{
			 reload:true
		 });*/
		 /*var promise =NotiService.getdetail(id);
		 promise.then(function(response) {
			 $scope.noti.detail=JSON.parse(response.data.notification);
			 $scope.detail=JSON.parse(response.data.notification);
		 },function(response){
			 alert("NotiDetail fail");
			 $state.go("login",null,{
				 reload:true
			 });
		 });
		 $state.go("/",null,{
			 reload:true
		 });*/
		/* $state.go("NotiDetail",null,{
			 reload:true
		 });
		*/
		 
		 /*$state.go("NotiDetail",null,{
			 reload:true
		 });*/
	 }
  }])
.controller('SubheaderAppCtrl',['$scope', '$rootScope', 'AuthService', 'AuthDialog','$state','NotiService',
      function($scope,$rootScope,NotiService,AuthService) {
      $list=NotiService.getjson();
      console.log($list);
      $scope.listnew=$list;//.listnew;
       $scope.listlast=$list;//.listlast;
      $scope.listearly=$list;//d.listearly;
                            }])
/*.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})*/;  

/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/