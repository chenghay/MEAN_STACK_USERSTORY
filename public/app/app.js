//angular.module('MyApp', ['mainCtrl','authService','appRoutes','userService','userCtrl','UserCreateController']);

angular.module('MyApp', ['reverseDirective','mainCtrl','authService','appRoutes','userService','userCtrl','storyService','storyCtrl'])

.config(function($httpProvider){
	$httpProvider.interceptors.push('AuthInterceptor');
})