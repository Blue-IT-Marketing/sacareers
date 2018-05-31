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
  var uiConfig = {
	signInSuccessUrl: 'https://sasms.site',
	signInOptions: [
	  // Leave the lines as is for the providers you want to offer your users.
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
	],
	// Terms of service url.
	tosUrl: 'https://sa-sms.appspot.com'
  };
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);