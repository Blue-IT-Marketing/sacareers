/**
 * thisord event handler
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

var thisUpdateAccountButt = document.getElementById("UpdateAccountButt");
var thisUpdateSMSAccountButt = document.getElementById("UpdateSMSAccountButt");
thisUpdateAccountButt.addEventListener("click", function () {
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
                var vstrOrganizationName = document.getElementById('strOrganizationName').value;
                var vstrDescription = document.getElementById('strDescription').value;
                var vstrRegistration = document.getElementById('strRegistration').value;
                var vstrCell = document.getElementById('strCell').value;
                var vstrTel = document.getElementById('strTel').value;
                var vstrEmail = document.getElementById('strEmail').value;
                var vstrWebsite = document.getElementById('strWebsite').value;
                var vstrRegisteringLink = document.getElementById('strRegisteringLink').value;
                var vstrVerificationCode = document.getElementById('strVerificationCode').value;
                var vstrVerified = document.getElementById('strVerified').value;
                var vstrSuspended = document.getElementById('strSuspended').value;
                var vstrOrganizationID = document.getElementById('strOrganizationID').value;
                var dataString = '&vstrChoice=' + vstrChoice + '&vstrOrganizationID=' + vstrOrganizationID + '&vstrOrganizationName=' + vstrOrganizationName +
                    '&vstrDescription=' + vstrDescription + '&vstrRegistration=' + vstrRegistration + '&vstrCell=' + vstrCell + '&vstrTel=' + vstrTel +
                    '&vstrEmail=' + vstrEmail + '&vstrWebsite=' + vstrWebsite + '&vstrRegisteringLink=' + vstrRegisteringLink + '&vstrVerificationCode=' + vstrVerificationCode +
                    '&vstrVerificationCode=' + vstrVerificationCode + '&vstrVerified=' + vstrVerified + '&vstrSuspended=' + vstrSuspended +
                    '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "post",
                    url: "/thisorg/" + vstrOrganizationID,
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#UpdateAccountINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("Please login to update your account details")
        }
    })
});

thisUpdateSMSAccountButt.addEventListener("click", function () {
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

                var vstrChoice = 1;
                var vstrCreditAmount = document.getElementById('strCreditAmount').value;
                alert("Credit Amount : " + vstrCreditAmount);
                var vstrCostPerSMS = document.getElementById('strCostPerSMS').value;
                var vstrTotalSMS = document.getElementById('strTotalSMS').value;
                var vstrDateCredited = document.getElementById('strDateCredited').value;
                var vstrTimeCredited = document.getElementById('strTimeCredited').value;
                var vstrUsePortal = document.getElementById('strUsePortal').value;
                var vstrDepositReference = document.getElementById('strDepositReference').value;
                var vstrOrganizationID = document.getElementById('strOrganizationID').value;
                var dataString = '&vstrChoice=' + vstrChoice + '&vstrOrganizationID=' + vstrOrganizationID + '&vstrCreditAmount=' + vstrCreditAmount +
                    '&vstrCostPerSMS=' + vstrCostPerSMS + '&vstrTotalSMS=' + vstrTotalSMS + '&vstrDateCredited=' + vstrDateCredited +
                    '&vstrTimeCredited=' + vstrTimeCredited + '&vstrUsePortal=' + vstrUsePortal + '&vstrDepositReference=' + vstrDepositReference +
                    '&vstrUserID=' + struid + '&vstrEmail=' + email + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "post",
                    url: "/thisorg/" + vstrOrganizationID,
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#SMSAccountINFDIV').html(html)
                    }
                });
            })
        }else{
            alert("Please login before you update your SMS Account")
        }
    })
});