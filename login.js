  // Set the configuration for your app
  // TODO: Replace with your project's config object
  (function() {
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_bTOzY0vp7AjQRtdtc_nPfLSlERdWd1Q",
    authDomain: "cse-vssut.firebaseapp.com",
    databaseURL: "https://cse-vssut.firebaseio.com",
    projectId: "cse-vssut",
    storageBucket: "cse-vssut.appspot.com",
    messagingSenderId: "2621498768"
  };
  firebase.initializeApp(config); 

  }());

  // Get a reference to the database service

  /*var signin=document.getElementById("signin");
var signinRef=firebase.database().ref().child("signin");
signinRef.on('value',function(datasnapshot){
  signin.innerText=datasnapshot.val();
});*/



firebase.auth().onAuthStateChanged(function (user) {
  // body...

  if (user){
      $("#loginid").hide();
    $("#loginpage1").hide();
   // var email = user.email;
    //email.innerText=datasnapshot.val();
    $("#username").show();
     document.getElementById('userid').innerHTML = user.email;
     $("#loginpage2").show();
     $("#gbtn").hide();
     

  }
  else{
    // alert("not login");
      $("#loginid").show();
     $("#loginpage1").show();
     // $("#username").hide();
      $("#loginpage2").hide();
      $("#gbtn").show();
      $("#fbbtn").show();
      $("#loginid1").show();

  }
   //gbtn.user=user;
  //console.log('user',user);
});

/*  login process  */

$("#btn-login").click(
  function(){
    var email=$("#login-email").val();
    var password=$("#login-password").val();
    
    if(email !="" && password !=""){

      $("#loginProgress").show();
      $("#btn-login").hide();

     const promise= firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  $("#loginError").show().text(error.message);
   $("#loginProgress").hide();
      $("#btn-login").show();
     // promise.then(function(){alert("Signed In")})
});
    }
    else{
    alert("please fill up");}
  }
  );

// google login
/*function signIn(){
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});*/



/*  logout process  */
$("#signout").click(
  function(){

    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
  alert(error.message);
});

  });


/* sign up process */ 



btnsignup.addEventListener('click', e=> {

  const email=loginemail.value;
  const password=loginpassword.value;
  const promise =firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
    $("#loginError1").show().text(error.message);
  });
 // promise.then(function(){alert("registred")})
});

/*$("#gbtn").click( 
  function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider)
  .catch(function(error){
    console.log('google sign in error',error);
  });
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
});*/

 (function callGoogleSignIn(){
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
               // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
               // The signed-in user info.
               var user = result.user;
               // ...
         }).catch(function(error) {
             // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               // The email of the user's account used.
               var email = error.email;
               // The firebase.auth.AuthCredential type that was used.
               var credential = error.credential;
            // ...
         });
      }());
