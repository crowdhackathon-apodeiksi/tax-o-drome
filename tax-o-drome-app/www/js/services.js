angular.module('starter.services', []).factory('Camera', ['$q',
    function($q) {
        return {
            getPicture: function(options) {
                var q = $q.defer();
                navigator.camera.getPicture(function(result) {
                    // Do any magic you need
                    q.resolve(result);
                }, function(err) {
                    q.reject(err);
                }, options);
                return q.promise;
            }
        };
    }
]).factory('Profile', ['$window',
    function($window) {
        var initBadgesProgress = function() {};
        var badges = $window.localStorage.badges || [];
        var badgesProgress = $window.localStorage.badgesProgress || initBadgesProgress();
        return {
            username: function() {
                return $window.localStorage.username || null;
            },
            setUsername: function(username) {
                $window.localStorage.username = username;
            },
            password: function() {
                return $window.localStorage.password || null;
            },
            setPassword: function(password) {
                $window.localStorage.password = password;
            },
            points: function() {
                return parseInt($window.localStorage.points || 0);
            },
            badges: function() {
                return badges;
            },
            addPoints: function(action, vat) {
                var coefficient = 0.2;
                // TODO Calculate game coefficients
                var points = parseInt($window.localStorage.points || 0);
                points = parseInt(vat) * coefficient;
                $window.localStorage.points = points;
                console.log(points);
                return points;
            },
            checkForBadgesWin: function(action, receipt) {}
        };
    }
]).factory('Receipts', ['$window', 'Profile', 'Receipt',
    function($window, Profile, Receipt) {
        var receipts = JSON.parse($window.localStorage.receipts || '[]');
        return {
            all: function() {
                return receipts;
            },
            byMonth: function(year) {
                var months = {};
                var i, id;
                for (i = 1; i <= 12; i++) {
                    months[i] = [];
                }
                for (i = 0; i < receipts.length; i++) {
                    id = new Date(receipts[i].transaction_date);
                    if (id.getFullYear() === year) {
                        months[id.getMonth()].push(receipt[i]);
                    }
                }
                return months;
            },
            byCategory: function() {
                return {};
            },
            totalPerCategory: function() {
                return {};
            },
            totalPerMonth: function(year) {
                return {};
            },
            add: function(receipt) {
                var receiptAPI = new Receipt();
                receiptAPI.transaction_date = receipt.transaction_date;
                receiptAPI.total_amount = receipt.total_amount;
                receiptAPI.total_vat = receipt.total_vat;
                receiptAPI.user_hash = "1";
                receiptAPI.longitude = receipt.longitude;
                receiptAPI.latitude = receipt.latitude;
                receiptAPI.rid = receipt.rid;
                receiptAPI.business = receipt.business;
                // receiptAPI.$save(function(data) {
                receipt.id = receipt.rid;
                receipts.push(receipt);
                Profile.addPoints('', receipt.total_vat);
                $window.localStorage.receipts = JSON.stringify(receipts);
                // }, function(error) {
                //         receipts.push(receipt);
                //         $window.localStorage.points = error;
                //         Profile.addPoints('', receipt.total_vat);
                //         $window.localStorage.receipts = JSON.stringify(receipts);
                // });
            },
            get: function(chatId) {
                for (var i = 0; i < receipts.length; i++) {
                    if (receipts[i].id === parseInt(chatId)) {
                        return receipts[i];
                    }
                }
                return null;
            }
        };
    }
]);