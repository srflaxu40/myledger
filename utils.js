var jwtObj = require('jsonwebtoken');

exports.parseCookies = function(request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}


exports.verifyJwt = function(jwt) {
   result = jwtObj.verify(jwt, process.env.JWT_SECRET_KEY);
   if ( !result) {
     return false;
   } else {
     return true;
   }
}

