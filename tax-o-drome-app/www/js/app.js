// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'ngResource', 'starter.controllers', 'starter.services', 'starter.resources'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleLightContent();
		}
	});
})
.config(function($stateProvider, $urlRouterProvider, $compileProvider) {
  	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
	.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})

	.state('login', {
		url: '/login',
		templateUrl: 'templates/users/login.html',
		controller: 'LoginCtrl'
	})
	.state('register', {
		url: '/register',
		// views: {
		//   'login': {
				templateUrl: 'templates/users/register.html',
				controller: 'RegisterCtrl'
		//   }
		// }
	})

	// Each tab has its own nav history stack:

	.state('tab.dash', {
		url: '/dash',
		views: {
			'tab-dash': {
				templateUrl: 'templates/tab-dash.html',
				controller: 'DashCtrl'
			}
		}
	})
		.state('tab.standings', {
			url: '/dash/standings/',
			views: {
				'tab-dash': {
					templateUrl: 'templates/users/standings.html',
					controller: 'DashCtrl'
				}
			}
		})
		.state('tab.lotary', {
			url: '/dash/lotary/',
			views: {
				'tab-dash': {
					templateUrl: 'templates/users/previous-lotary.html',
					controller: 'DashCtrl'
				}
			}
		})
		.state('tab.receipt-statistics', {
			url: '/statistics',
			views: {
				'tab-dash': {
					templateUrl: 'templates/users/statistics.html',
					controller: 'ReceiptsCtrl'
				}
			}
		})
			.state('tab.receipt-statistics-list', {
				url: '/statistics/list/',
				views: {
					'tab-dash': {
						templateUrl: 'templates/receipt/list.html',
						controller: 'ReceiptsCtrl'
					}
				}
			})
			.state('tab.receipt-diagrams', {
				url: '/diagrams',
				views: {
					'tab-dash': {
						templateUrl: 'templates/receipt/diagrams.html',
						controller: '' 
					}
				}
			})
			.state('tab.receipt-statistics-group', {
				url: '/statistics/list/group/',
				views: {
					'tab-dash': {
						templateUrl: 'templates/receipt/categories.html',
						controller: 'ReceiptsCtrl'					}
				}
			})
	.state('tab.receipts', {
			url: '/receipts',
			views: {
				'tab-receipts': {
					templateUrl: 'templates/receipt/receipt-enter.html',
					controller: 'ReceiptPhotoCtrl'

				}
			}
		})
	.state('tab.registration', {
			url: '/registration',
			views: {
				'tab-registration': {
					templateUrl: 'templates/users/registration.html',
					controller: 'RegisterCtrl'

				}
			}
		})
		.state('tab.receipt-create', {
			url: '/receipts/create',
			params: {receipt: null},
			views: {
				'tab-receipts': {
					templateUrl: 'templates/receipt/receipt-create.html',
					controller: 'ReceiptsCreateCtrl',
				}
			}
		})
		.state('tab.receipt-help', {
			url: '/receipts/help',
			views: {
				'tab-receipts': {
					templateUrl: 'templates/receipt/help.html',
					controller: 'ReceiptsCtrl',
				}
			}
		})
		.state('tab.category-detail', {
			url: '/category/receipts/:chatId',
			views: {
				'tab-receipts': {
					templateUrl: 'templates/receipt/category-detail.html',
					controller: 'ChatDetailCtrl'
				}
			}
		})
			.state('tab.receipt-business-list', {
				url: '/business/receipts/:id',
				views: {
					'tab-receipts': {
						templateUrl: 'templates/receipt/business-list.html',
						controller: 'ChatDetailCtrl'
					}
				}
			})
				.state('tab.receipt-detail', {
					url: '/business/detail/receipt/:id',
					views: {
						'tab-receipts': {
							templateUrl: 'templates/receipt/detail.html',
							controller: 'ReceiptDetailCtrl'
						}
					}
				})

	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'templates/users/account.html',
				controller: 'AccountCtrl'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/register');

});
