  // Initialize Firebase
try{
var config =
{
    apiKey: "AIzaSyAoPIbmB6jRvf429itB-RzjusXrUW5pDQ0",
    authDomain: "sa-careers.firebaseapp.com",
    databaseURL: "https://sa-careers.firebaseio.com",
    projectId: "sa-careers",
    storageBucket: "sa-careers.appspot.com",
    messagingSenderId: "956819145918"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}else {
}

}catch (err){

}


var thisOrganizationDetailsButt = document.getElementById('OrganizationDetailsButt');
var thisManageUsersButt = document.getElementById('ManageUsersButt');
var thisAccountButt = document.getElementById("AccountButt");
var thisAPIDetailsButt = document.getElementById("APIDetailsButt");
var thisManageCreditsButt = document.getElementById("ManageCreditsButt");

thisOrganizationDetailsButt.addEventListener("click", function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.getIdToken().then(function (accessToken) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var providerData = user.providerData;
                var struid = user.uid;

                var vstrChoice = 0;
                var dataString = '&vstrChoice=' + vstrChoice +
                '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "get",
                    url: "/admin/org",
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#SMSAdminINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("Please login to create an account")
        }
    })
});

thisManageUsersButt.addEventListener("click",function() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.getIdToken().then(function (accessToken) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var providerData = user.providerData;
                var struid = user.uid;

                var vstrChoice = 0;
                var dataString = '&vstrChoice=' + vstrChoice +
                    '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "get",
                    url: "/admin/users",
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#SMSAdminINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("You have to login to manage your users")
        }
    })
});

thisAccountButt.addEventListener("click", function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.getIdToken().then(function (accessToken) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var providerData = user.providerData;
                var struid = user.uid;

                var vstrChoice = 4;
                var dataString = '&vstrChoice=' + vstrChoice +
                    '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "get",
                    url: "/admin/sms/groups",
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#SMSAdminINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("Please login to open your account")
        }
    })
});

thisAPIDetailsButt.addEventListener("click", function() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.getIdToken().then(function (accessToken) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var providerData = user.providerData;
                var struid = user.uid;

                var vstrChoice = 0;
                var dataString = '&vstrChoice=' + vstrChoice + '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "get",
                    url: "/accounts/api",
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#SMSAdminINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("Please login to access your API")
        }
    })
});

thisManageCreditsButt.addEventListener("click", function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.getIdToken().then(function (accessToken) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var providerData = user.providerData;
                var struid = user.uid;


                var vstrChoice = 0;
                var dataString = '&vstrChoice=' + vstrChoice  + '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "get",
                    url: "/accounts/credits",
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#SMSAdminINFDIV').html(html)
                    }
                });

            })
        }else{
            alert("Please login to Manage your credits")
        }
    })
});
function LoadAccountInformation() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.getIdToken().then(function (accessToken) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var providerData = user.providerData;
                var struid = user.uid;

                var vstrChoice = 0;
                var dataString = '&vstrChoice=' + vstrChoice + '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "post",
                    url: "/account",
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#AccountINFDIV').html(html)
                    }
                });
            })
        }
    })
}




