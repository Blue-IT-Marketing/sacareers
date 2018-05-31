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

//CreateTicketINFDIV
var thisCreateTicketButt = document.getElementById("CreateTicketButt");
thisCreateTicketButt.addEventListener("click", function () {
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


                var vstrChoice = 3;
                var vstrNames = document.getElementById('strNames').value;
                var vstrSurname = document.getElementById('strSurname').value;
                var vstrCell = document.getElementById('strCell').value;
                var vstrEmail = document.getElementById('strEmail').value;
                var vstrSubject = document.getElementById('strSubject').value;
                var vstrBody = document.getElementById('strBody').value;

                var vstrTicketPreference = document.getElementById('strTicketPreference').value;
                var vstrDepartment = document.getElementById('strDepartment').value;
                var dataString = '&vstrChoice=' + vstrChoice + '&vstrSubject=' + vstrSubject + '&vstrBody=' + vstrBody +
                    '&vstrTicketPreference=' + vstrTicketPreference + '&vstrDepartment=' + vstrDepartment + '&vstrNames=' + vstrNames +
                    '&vstrSurname=' + vstrSurname + '&vstrCell=' + vstrCell + '&vstrEmail=' + email + '&vstrUserID=' + struid + '&vstrAccessToken=' + accessToken;
                $.ajax({
                    type: "post",
                    url: "/contact",
                    data: dataString,
                    cache: false,
                    success: function (html) {
                        $('#CreateTicketINFDIV').html(html)
                    }
                });
            })
        }
    })
});
