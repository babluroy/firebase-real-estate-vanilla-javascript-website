firebase.auth().onAuthStateChanged(function (user) {
    if (user) {    
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        var  phoneNumber = user.phoneNumber;

        document.getElementById("name").value = displayName;
        document.getElementById("phone").value = phoneNumber;
        document.getElementById("email").value = email;
        
    } else {
        // User is signed out.
        window.location.href = "Login.html";
    }
});