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
   try {
     result = jwtObj.verify(jwt, process.env.JWT_SECRET_KEY);
   } catch(err) {
       console.log(err);
       return false;
   }
   return true;
}

exports.deleteAllCookies = function() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    return true;
}
