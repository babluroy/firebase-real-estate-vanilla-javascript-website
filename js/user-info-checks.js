firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        var uid = user.uid

        var info_db = firebase.database().ref("user-info");

        info_db.orderByChild("uid").equalTo(uid).once("value", (snapshot) => {
            if (snapshot.exists()) {
                // console.log("Good to go")
            } else {
                window.location.href = "info.html"
            }
        })
    }
});