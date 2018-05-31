/**
 * thiscontact handler
 * @type {Element}
 */

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


var thisManageContactButt = document.getElementById("ManageContactButt");
var thisSendSMSMessageButt = document.getElementById("SendSMSMessageButt");
var thisSendEmailMessageButt = document.getElementById("SendEmailMessageButt");

thisManageContactButt.addEventListener("click", function () {
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
                var vstrCell = document.getElementById('strCell').value;
                var dataString = '&vstrChoice=' + vstrChoice + '&vstrCell=' + vstrCell + '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;

                $.ajax({
                    type: "post",
                    url: "/admin/contacts/" + vstrCell,
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#ContactsINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("Please login to access your contact manager")
        }
    })
});


thisSendSMSMessageButt.addEventListener("click", function () {

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
                var vstrCell = document.getElementById('strCell').value;
                var dataString = '&vstrChoice=' + vstrChoice + '&vstrCell=' + vstrCell  + '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "post",
                    url: "/admin/contacts/" + vstrCell,
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#ContactsINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("Please login to start sending SMS Messages")
        }
    })
});


thisSendEmailMessageButt.addEventListener("click", function () {
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


                var vstrChoice = 6;
                var vstrCell = document.getElementById('strCell').value;
                var dataString = '&vstrChoice=' + vstrChoice + '&vstrCell=' + vstrCell + '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "post",
                    url: "/admin/contacts/" + vstrCell,
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#ContactsINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("Please login to start sending Email Messages")
        }
    })
});