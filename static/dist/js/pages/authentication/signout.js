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

var thisLogOutButton = document.getElementById("LogOutButton");
thisLogOutButton.addEventListener("click", signOut);
  function signOut()
  {
        firebase.auth().signOut().then(function() {
          console.log('Signed Out');
          alert("Successfully signed out");
          thisLogOutButton.disabled = true;
        }, function(error) {
          console.error('Sign Out Error', error);
        });
  }