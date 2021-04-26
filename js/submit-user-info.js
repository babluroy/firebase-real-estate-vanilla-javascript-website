firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var uid = user.uid;
        var database = firebase.database();
        document
            .getElementById("user-info-form")
            .addEventListener("submit", submitForm);

        function submitForm(e) {
            e.preventDefault();
            var name = document.querySelector("#name").value;
            var phone = document.querySelector("#phone").value;
            var email = document.querySelector("#email").value;
            var dob = document.querySelector("#dob").value;


            writeUserData(name, phone, email, dob);
        }

        function writeUserData(name, phone, email, dob) {
            firebase.database().ref("user-info").push({
                name: name,
                phone: phone,
                email: email,
                dob: dob,
                uid: uid,
            });
            window.location.href = "index.html";
        }
    }
});