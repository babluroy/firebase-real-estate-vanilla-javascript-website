//Pricing calculation

var per_night_price = document.getElementById("price_per_night")
var weekend_price = document.getElementById("weekend_price")
var monthly_price = document.getElementById("monthly_price")
var yearly_price = document.getElementById("yearly_price")

//pricing 
per_night_price.addEventListener("keyup", () => {
    var per_night_price_value = document.getElementById("price_per_night").value

    weekend_price.value = per_night_price_value * 2

    monthly_price.value = per_night_price_value * 30

    yearly_price.value = per_night_price_value * 365
})


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //hide uploading message buttons
        document.getElementById("text").style.display = "none";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("text5").style.display = "none";

       
            
               
                

                var uid = user.uid;


                //file 1 compressed
                $("#file_1").change(function() {
                    // console.log("working")

                    document.getElementById("text").style.display = "block";
                    //uploading text
                    document.getElementById("text").innerHTML =
                        "<center>Uploading the image...</span>Please wait...</center>";

                    const file = document.querySelector("#file_1").files[0];

                    const reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = function(event) {
                        const imgElement = document.createElement("img");
                        imgElement.src = event.target.result;
                        // document.querySelector("#input").src = event.target.result;

                        imgElement.onload = function(e) {
                            const canvas = document.createElement("canvas");
                            const MAX_WIDTH = 800;

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
                                    $(".toast-div").show()
                                    //show toast
                                    $(document).ready(function(){
                                        $('#toast_one').toast('show');
                                        });
                                      //
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
                                    const image1 = document.querySelector("#image1");
                                    image1.value = url;
                                });

                        };
                    };
                })

                //file 2 compressed
                $("#file_2").change(function() {
                    // console.log("working")

                    document.getElementById("text2").style.display = "block";
                    //uploading text
                    document.getElementById("text2").innerHTML =
                        "<center>Uploading the 2nd image...</span>Please wait...</center>";

                    const file = document.querySelector("#file_2").files[0];

                    const reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = function(event) {
                        const imgElement = document.createElement("img");
                        imgElement.src = event.target.result;
                        // document.querySelector("#input").src = event.target.result;

                        imgElement.onload = function(e) {
                            const canvas = document.createElement("canvas");
                            const MAX_WIDTH = 800;

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
                                    $(".toast-div").show()
                                    //show toast
                                    $(document).ready(function(){
                                        $('#toast_two').toast('show');
                                        });
                                      //
                                    //Hide uploading message after finishing the upload
                                    document.getElementById("text2").style.display = "none";
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
                                    const image2 = document.querySelector("#image2");
                                    image2.value = url;
                                });

                        };
                    };
                })


                //file 3 compressed
                $("#file_3").change(function() {
                    // console.log("working")

                    document.getElementById("text3").style.display = "block";
                    //uploading text
                    document.getElementById("text3").innerHTML =
                        "<center>Uploading the 3rd image...</span>Please wait...</center>";

                    const file = document.querySelector("#file_3").files[0];

                    const reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = function(event) {
                        const imgElement = document.createElement("img");
                        imgElement.src = event.target.result;
                        // document.querySelector("#input").src = event.target.result;

                        imgElement.onload = function(e) {
                            const canvas = document.createElement("canvas");
                            const MAX_WIDTH = 800;

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
                                    $(".toast-div").show()
                                    $(document).ready(function(){
                                        $('#toast_three').toast('show');
                                        });
                                    //Hide uploading message after finishing the upload
                                    document.getElementById("text3").style.display = "none";
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
                                    const image3 = document.querySelector("#image3");
                                    image3.value = url;
                                });

                        };
                    };
                })



                //file 4 compressed
                $("#file_4").change(function() {
                    // console.log("working")

                    document.getElementById("text4").style.display = "block";
                    //uploading text
                    document.getElementById("text4").innerHTML =
                        "<center>Uploading the 4th image...</span>Please wait...</center>";

                    const file = document.querySelector("#file_4").files[0];

                    const reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = function(event) {
                        const imgElement = document.createElement("img");
                        imgElement.src = event.target.result;
                        // document.querySelector("#input").src = event.target.result;

                        imgElement.onload = function(e) {
                            const canvas = document.createElement("canvas");
                            const MAX_WIDTH = 800;

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
                                    $(".toast-div").show()
                                    $(document).ready(function(){
                                        $('#toast_four').toast('show');
                                        });
                                    //Hide uploading message after finishing the upload
                                    document.getElementById("text4").style.display = "none";
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
                                    const image4 = document.querySelector("#image4");
                                    image4.value = url;
                                });

                        };
                    };
                })





                //file 5 compressed
                $("#file_5").change(function() {
                    // console.log("working")

                    document.getElementById("text5").style.display = "block";
                    //uploading text
                    document.getElementById("text5").innerHTML =
                        "<center>Uploading the 5th image...</span>Please wait...</center>";

                    const file = document.querySelector("#file_5").files[0];

                    const reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = function(event) {
                        const imgElement = document.createElement("img");
                        imgElement.src = event.target.result;
                        // document.querySelector("#input").src = event.target.result;

                        imgElement.onload = function(e) {
                            const canvas = document.createElement("canvas");
                            const MAX_WIDTH = 800;

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
                                     $(".toast-div").show()
                                    $(document).ready(function(){
                                        $('#toast_five').toast('show');
                                        });
                                    //Hide uploading message after finishing the upload
                                    document.getElementById("text5").style.display = "none";
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
                                    const image5 = document.querySelector("#image5");
                                    image5.value = url;
                                });

                        };
                    };
                })






                var today_cal = new Date()
                document.getElementById("today_field").value = today_cal

                var database = firebase.database();
                document
                    .getElementById("propery-upload-form")
                    .addEventListener("submit", submitForm);

                function submitForm(e) {
                    e.preventDefault();


                    var living_room = document.querySelector("#living_room").value;
                    var internet = document.querySelector("#internet").value;
                    var tv = document.querySelector("#tv").value;
                    var tv_cable = document.querySelector("#tv_cable").value;
                    var generator = document.querySelector("#generator").value;
                    var laundry = document.querySelector("#laundry").value;
                    var wifi = document.querySelector("#wifi").value;
                    var gym = document.querySelector("#gym").value;
                    var reception = document.querySelector("#reception").value;
                    var parking_space = document.querySelector("#parking_space").value;
                    var air_conditioner = document.querySelector("#air_conditioner").value;
                    var gated_security = document.querySelector("#gated_security").value;
                    var water_supply = document.querySelector("#water_supply").value;

                    var property_name = document.querySelector("#property_name").value;
                    var property_location = document.querySelector("#property_location").value;
                    var price_per_night = document.querySelector("#price_per_night").value;
                    var weekend_price = document.getElementById("weekend_price").value
                    var monthly_price = document.getElementById("monthly_price").value
                    var yearly_price = document.getElementById("yearly_price").value
                    var property_category = document.querySelector("#property_category").value;
                    var accommodation = document.querySelector("#accommodation").value;
                    var bedrooms = document.querySelector("#bedrooms").value;
                    var bathrooms = document.querySelector("#bathrooms").value;
                    var about = document.querySelector("#about").value;

                    var image1 = document.querySelector("#image1").value;
                    var image2 = document.querySelector("#image2").value;
                    var image3 = document.querySelector("#image3").value;
                    var image4 = document.querySelector("#image4").value;
                    var image5 = document.querySelector("#image5").value;

                    var smoking = document.querySelector("#smoking").value;
                    var pets = document.querySelector("#pets").value;
                    var party = document.querySelector("#party").value;
                    var children_allowed = document.querySelector("#children_allowed").value;
                    var additional_rules = document.querySelector("#additional_rules").value;
                    var today = document.getElementById("today_field").value;





                    writeUserData(
                        living_room,
                        internet,
                        tv,
                        tv_cable,
                        generator,
                        laundry,
                        wifi,
                        gym,
                        reception,
                        parking_space,
                        air_conditioner,
                        gated_security,
                        water_supply,
                        property_name,
                        property_location,
                        price_per_night,
                        weekend_price,
                        monthly_price,
                        yearly_price,
                        property_category,
                        accommodation,
                        bedrooms,
                        bathrooms,
                        about,
                        image1,
                        image2,
                        image3,
                        image4,
                        image5,
                        smoking,
                        pets,
                        party,
                        children_allowed,
                        additional_rules,
                        today
                    );
                }

                function writeUserData(
                    living_room,
                    internet,
                    tv,
                    tv_cable,
                    generator,
                    laundry,
                    wifi,
                    gym,
                    reception,
                    parking_space,
                    air_conditioner,
                    gated_security,
                    water_supply,
                    property_name,
                    property_location,
                    price_per_night,
                    weekend_price,
                    monthly_price,
                    yearly_price,
                    property_category,
                    accommodation,
                    bedrooms,
                    bathrooms,
                    about,
                    image1,
                    image2,
                    image3,
                    image4,
                    image5,
                    smoking,
                    pets,
                    party,
                    children_allowed,
                    additional_rules,
                    today) {
                    firebase.database().ref("Properties").push({
                        living_room: living_room,
                        internet: internet,
                        tv: tv,
                        tv_cable: tv_cable,
                        generator: generator,
                        laundry: laundry,
                        wifi: wifi,
                        gym: gym,
                        reception: reception,
                        parking_space: parking_space,
                        air_conditioner: air_conditioner,
                        gated_security: gated_security,
                        water_supply: water_supply,
                        property_name: property_name,
                        property_location: property_location,
                        price_per_night: price_per_night,
                        weekend_price: weekend_price,
                        monthly_price: monthly_price,
                        yearly_price: yearly_price,
                        property_category: property_category,
                        accommodation: accommodation,
                        bedrooms: bedrooms,
                        bathrooms: bathrooms,
                        about: about,
                        image1: image1,
                        image2: image2,
                        image3: image3,
                        image4: image4,
                        image5: image5,
                        smoking: smoking,
                        pets: pets,
                        party: party,
                        children_allowed: children_allowed,
                        additional_rules: additional_rules,
                        uid: uid,
                        today: today
                    });

                    window.location.href = "successful-upload.html";

                }
           
    }
});


//upload button file name text 1
$('#file_1').bind('change', function() {
    var filename = $("#file_1").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');

    } else {
        // $(".file-upload").addClass('active');
        $(".file-name-1").text(filename.replace("C:\\fakepath\\", ""));

    }
});

//upload button file name text 2
$('#file_2').bind('change', function() {
    var filename = $("#file_2").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');

    } else {
        // $(".file-upload").addClass('active');
        $(".file-name-2").text(filename.replace("C:\\fakepath\\", ""));

    }
});

//upload button file name text 3
$('#file_3').bind('change', function() {
    var filename = $("#file_3").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');

    } else {
        // $(".file-upload").addClass('active');
        $(".file-name-3").text(filename.replace("C:\\fakepath\\", ""));

    }
});

//upload button file name text 4
$('#file_4').bind('change', function() {
    var filename = $("#file_4").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');

    } else {
        // $(".file-upload").addClass('active');
        $(".file-name-4").text(filename.replace("C:\\fakepath\\", ""));

    }
});

//upload button file name text 5
$('#file_5').bind('change', function() {
    var filename = $("#file_5").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');

    } else {
        // $(".file-upload").addClass('active');
        $(".file-name-5").text(filename.replace("C:\\fakepath\\", ""));

    }
});