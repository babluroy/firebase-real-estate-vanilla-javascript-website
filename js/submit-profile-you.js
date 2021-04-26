firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //hide uploading message buttons
        document.getElementById("text").style.display = "none";

        var uid = user.uid;

        //file 1 compressed
        $("#inputGroupFile01").change(function() {
            // console.log("working")
            $(".custom-file-label").hide()
            $("#info").hide()
            document.getElementById("text").style.display = "block";
            //uploading text
            document.getElementById("text").innerHTML =
                "<center>Uploading the image...</span>Please wait...</center>";

            const file = document.querySelector("#inputGroupFile01").files[0];

            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = function(event) {
                const imgElement = document.createElement("img");
                imgElement.src = event.target.result;
                // document.querySelector("#input").src = event.target.result;

                imgElement.onload = function(e) {
                    const canvas = document.createElement("canvas");
                    const MAX_WIDTH = 500;

                    const scaleSize = MAX_WIDTH / e.target.width;
                    canvas.width = MAX_WIDTH;
                    canvas.height = e.target.height * scaleSize;

                    const ctx = canvas.getContext("2d");

                    ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

                    const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
                    // console.log(srcEncoded)

                    // send srcEncoded to the server
                    // document.querySelector("#output").src = srcEncoded;

                    const ref = firebase.storage().ref(uid);
                    const name = new Date() + "-" + srcEncoded.name;
                    const metadata = {
                        contentType: srcEncoded.type,
                    };
                    const task = ref.child(name).putString(srcEncoded, 'data_url');

                    task
                        .then((snapshot) => snapshot.ref.getDownloadURL())
                        .then((url) => {
                            console.log(url);
                            $("#toast_one").show()
                            $(document).ready(function(){
                                $('#toast_one').toast('show');
                                });
                            //Hide uploading message after finishing the upload
                            document.getElementById("text").style.display = "none";
                            //Show Post button after uploading the picture
                            // $(document).ready(function () {
                            //   $("#container").append(
                            //     $(document.createElement("button")).prop({
                            //       type: "submit",
                            //       class: "btn btn-warning btn-lg btn-block addValue",
                            //       innerHTML: "Post",
                            //     })
                            //   );
                            // });
                            const image1 = document.querySelector("#profile-pic-url");
                            image1.value = url;
                            document.getElementById("show-profile-image").src = url;
                        });

                };
            };
        })



        var database = firebase.database();
        document
            .getElementById("profile-you")
            .addEventListener("submit", submitForm);

        function submitForm(e) {
            e.preventDefault();


            var profile_pic_url = document.querySelector("#profile-pic-url").value;
            var bio = document.querySelector("#bio").value;
            var name = document.querySelector("#name").value;
            var place = document.querySelector("#place").value;

            writeUserData(profile_pic_url, bio, name, place);
        }

        function writeUserData(profile_pic_url, bio, name, place) {
            firebase.database().ref("profile-you").push({
                profile_pic_url,
                bio,
                name,
                place,
                uid: uid

            });

            window.location.href = "property upload.html";
        }

    }
});