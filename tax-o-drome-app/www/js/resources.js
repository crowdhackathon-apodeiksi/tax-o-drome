angular.module('starter.resources', []).factory('Consumer', function($resource) {
    return $resource('http://188.166.108.177/api/consumer/:id/', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        save: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        remove: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }, {
        stripTrailingSlashes: false
    });
});

angular.module('starter.resources').factory('Receipt', function($resource) {
    return $resource('http://188.166.108.177/api/receipt/:id/', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        save: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        remove: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
});

angular.module('starter.resources').factory('Badge', function($resource) {
    return $resource('http://188.166.108.177/api/badge/:id/', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        save: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        remove: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }, {
        stripTrailingSlashes: false
    });
});

angular.module('starter.resources').factory('Category', function($resource) {
    return $resource('http://188.166.108.177/api/category/:id/', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        save: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        remove: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }, {
        stripTrailingSlashes: false
    });
});

angular.module('starter.resources').factory('Business', function($resource) {
    return $resource('http://188.166.108.177/api/business/:id/', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        save: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        remove: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }, {
        stripTrailingSlashes: false
    });
});