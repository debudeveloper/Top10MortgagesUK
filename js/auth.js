(function ($, window) {
    'use strict';
    if (typeof (Storage) !== "undefined") {        
        if (sessionStorage.tTMortAuth) {
            $('.login_Sec').hide();
        } else {
            $('.login_Sec').show();
        }
    } else {
        $('.login_Sec').show();
    }
    $("#loginForm").submit(function (e) {        
        var email = $('#loginEmail').val() || '';
        var pwd = $('#loginPassword').val() || '';
        if (email === 'info@tt-m.co.uk' && pwd === 'info@tt') {
            sessionStorage.setItem("tTMortAuth", { email: email, password: pwd });
            $('.login_Sec').hide();
        }
        return false;
    });
    
})(jQuery, window);
