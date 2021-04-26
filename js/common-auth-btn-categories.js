firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        //if user is signed-in redirect to this page
        // document.querySelector(".login-btn").style.display = "none";
        document.querySelector(".signup-btn-nav").style.display = "none";

    } else {
        document.querySelector(".logout-btn").style.display = "none"
    }
});

//logout function
function signout() {
    firebase
        .auth()
        .signOut()
        .then(function() {
            window.location.href = "index.html";
        })
        .catch(function(error) {
            // An error happened.
        });
}