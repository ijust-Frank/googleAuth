var config = {
    apiKey: "AIzaSyCX1sgdAQ0Xit_0Bc0toqTQh9Rz2SCBayc",
    authDomain: "test-9bb2d.firebaseapp.com",
    databaseURL: "https://test-9bb2d.firebaseio.com",
    projectId: "test-9bb2d",
    storageBucket: "test-9bb2d.appspot.com",
    messagingSenderId: "418448696670",
    appId: "1:418448696670:web:10324fac74772b63aa5bcf"
  };
  // Initialize Firebase
  firebase.initializeApp(config);



  const auth = firebase.auth();

const signUpgoogle = $("#google-sign-in")

  googleSignIn = () => {
      base_provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(base_provider).then(function (result) {
          console.log(result)
          console.log("We made it happen")
      }).catch(function(err){
          console.log(err)
          console.log("sorry try again")
      })
  }

  signUpgoogle.on("click", function() {
      googleSignIn()
  })