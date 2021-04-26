var database = firebase.database();

let property = new Promise(function (resolve, reject) {
  var properties = database.ref("Properties");
  properties.once("value", (snapshot) => {
    //Hide spinner
    $("#loader").hide();

    var content = "";

    const queryString = window.location.search;

    var childkey_value_url = queryString.substring(1);
    // console.log(childkey_value_url)

    //changed ref to clicked data-id
    var newClickFirebaseRef = properties.child(childkey_value_url);
    //appended the clickend data-id value
    newClickFirebaseRef.once("value", function (snapshot) {
      var val = snapshot.val();

      //images
      var image1 = val.image1;
      var image2 = val.image2;
      var image3 = val.image3;
      var image4 = val.image4;
      var image5 = val.image5;

      document.getElementById("get_uid").value = val.uid;
      document.getElementById("childkey").value = childkey_value_url;

      content += '<div id="slider-property-lg">';
      content +=
        '<div id="slider-property" class="carousel slide" data-ride="carousel">';
      content += '<ul class="carousel-indicators">';
      content +=
        '<li data-target="#demo" data-slide-to="0" class="active"></li>';
      content += '<li data-target="#demo" data-slide-to="1"></li>';
      content += '<li data-target="#demo" data-slide-to="2"></li>';
      content += "</ul>";
      content += '<div class="carousel-inner no-padding">';
      content += '<div class="carousel-item active">';
      content += '<div class="col-lg-4 col-sm-12 col-md-4">';
      content += "<img src=" + image1 + ">";
      content += "</div>";
      content += '<div class="col-lg-4 col-sm-12 col-md-4">';
      content += "<img src=" + image2 + ">";
      content += "</div>";
      content += '<div class="col-lg-4 col-sm-12 col-md-4">';
      content += "<img src=" + image3 + ">";
      content += "</div>";
      content += "</div>";
      content += ' <div class="carousel-item">';
      content += '<div class="col-lg-4 col-sm-12 col-md-4">';
      content += "<img src=" + image4 + ">";
      content += "</div>";
      content += '<div class="col-lg-4 col-sm-12 col-md-4">';
      content += "<img src=" + image5 + ">";
      content += "</div>";
      content += '<div class="col-lg-4 col-sm-12 col-md-4">';
      content += "<img src=" + image1 + ">";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content +=
        '<a class="carousel-control-prev" href="#slider-property" data-slide="prev">';
      content += '<span class="carousel-control-prev-icon"></span>';
      content += "</a>";
      content +=
        '<a class="carousel-control-next" href="#slider-property" data-slide="next">';
      content += '<span class="carousel-control-next-icon"></span>';
      content += " </a>";
      content += "</div>";
      content += " </div>";
      //

      content += '<div id="slider-property-sm">';
      content +=
        '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">';
      content += '<ol class="carousel-indicators">';
      content +=
        '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>';
      content +=
        '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>';
      content +=
        '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>';
      content += "</ol>";
      content += '<div class="carousel-inner">';
      content += '<div class="carousel-item active">';
      content +=
        '<img class="d-block w-100"' + "src=" + image1 + " " + 'alt = "..."' + ">";
      content += "</div>";
      content += '<div class="carousel-item">';
      content +=
      '<img class="d-block w-100"' + "src=" + image2 + " " + 'alt = "..."' + ">";
      content += "</div>";
      content += '<div class="carousel-item">';
      content +=
      '<img class="d-block w-100"' + "src=" + image3 + " " + 'alt = "..."' + ">";
      content += "</div>";
      content += '<div class="carousel-item">';
      content +=
      '<img class="d-block w-100"' + "src=" + image4 + " " + 'alt = "..."' + ">";
      content += "</div>";
      content += '<div class="carousel-item">';
      content +=
      '<img class="d-block w-100"' + "src=" + image5 + " " + 'alt = "..."' + ">";
      content += "</div>";
      content += '<div class="carousel-item">';
      content +=
      '<img class="d-block w-100"' + "src=" + image5 + " " + 'alt = "..."' + ">";
      content += "</div>";
      content += "</div>";
      content +=
        '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">';
      content +=
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
      content += '<span class="sr-only">Previous</span>';
      content += "</a>";
      content +=
        '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">';
      content +=
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
      content += '<span class="sr-only">Next</span>';
      content += "</a>";
      content += "</div>";
      content += "</div>";

      content += '<div class="container mt-4">';
      content += '<div class="row">';
      content += '<div class="col-lg-8 col-sm-12 col-md-8">';
      content += '<div class="card cards-property-info">';
      content += '<div class="card-body">';
      content +=
        "<h4>" +
        val.property_name +
        " " +
        "<span id='profile-img'></span>" +
        "</h4>";
      content +=
        '<p class="lead"><i class="fa fa-map-marker" aria-hidden="true"></i> ' +
        val.property_location +
        '&nbsp;&nbsp;<i class="fa fa-user" aria-hidden="true"></i>&nbsp;' +
        val.accommodation +
        '&nbsp;&nbsp;<i class="fa fa-home" aria-hidden="true"></i>&nbsp;' +
        val.property_category +
        "</p>";
      content += '<hr class="my-4">';
      content += '<div class="row">';
      content += '<div class="col-lg-3 col-md-3 col-sm-6 my-2">';
      content += '<div class="card">';
      content += '<div class="test">';
      content += '<div class="card-body card-1">';
      content += '<h5 class="card-title text-center">';
      content +=
        '<font size="20px"><i class="fa fa-home" aria-hidden="true"></i></font>';
      content += "</h5>";
      content += '<h6 class="card-subtitle mb-2  text-center">Type</h6>';
      content +=
        '<p class="card-text text-center">' + val.property_category + "</p>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += '<div class="col-lg-3 col-md-3 col-sm-6 my-2">';
      content += '<div class="card">';
      content += '<div class="card-body card-2">';
      content += '<h5 class="card-title text-center">';
      content +=
        '<font size="20px"><i class="fa fa-user" aria-hidden="true"></i></font>';
      content += "</h5>";
      content +=
        '<h6 class="card-subtitle mb-2  text-center">Accomodation</h6>';
      content +=
        '<p class="card-text text-center">' +
        val.accommodation +
        " " +
        "Guests";
      ("</p>");
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += '<div class="col-lg-3 col-md-3 col-sm-6 my-2">';
      content += '<div class="card">';
      content += '<div class="card-body card-3">';
      content += '<h5 class="card-title text-center">';
      content +=
        '<font size="20px"><i class="fa fa-bed" aria-hidden="true"></i></font>';
      content += "</h5>";
      content += '<h6 class="card-subtitle mb-2  text-center">Bedrooms</h6>';
      content += '<p class="card-text text-center">' + val.bedrooms + "</p>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += '<div class="col-lg-3 col-md-3 col-sm-6 my-2">';
      content += '<div class="card">';
      content += '<div class="card-body card-4">';
      content += '<h5 class="card-title text-center">';
      content +=
        '<font size="20px"><i class="fa fa-shower" aria-hidden="true"></i></font>';
      content += "</h5>";
      content += '<h6 class="card-subtitle mb-2  text-center">Bathrooms</h6>';
      content += '<p class="card-text text-center">' + val.bathrooms + "</p>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += '<div class="about-the-property container mt-2">';
      content += "<h4>About this listing</h4>";
      content += '<p class="text-justify">' + val.about + "</p>";
      content += "</div>";

      content += '<div class="prices container mt-2">';
      content += "<h4>Prices</h4>";
      content += '<div class="row mt-4">';
      content += '<div class="col-md-6 col-sm-6 col-lg-6">';
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Nightly: $' +
        val.price_per_night +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Weekends (Sat & Sun): $' +
        val.weekend_price +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Monthly (30d+): $' +
        val.monthly_price +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Yearly (365d+): $' +
        val.yearly_price +
        "</p>";
      content += " </div>";
      content += '<div class="col-md-6 col-sm-6 col-lg-6">';
      // content += '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Allow Additional Guests: Yes</p>'
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Minimum Number Of Days: 1</p>';
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Maximum Number Of Days: 60</p>';
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += '<div class="features container mt-2">';
      content += "<h4>Amenities</h4>";
      content += '<div class="row mt-4">';
      content += '<div class="col-md-4 col-sm-6 col-lg-4">';
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Living Room: ' +
        val.living_room +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Internet: ' +
        val.internet +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Security: ' +
        val.gated_security +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Air conditioner: ' +
        val.air_conditioner +
        "</p>";

      content += "</div>";
      content += '<div class="col-md-4 col-sm-6 col-lg-4">';
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> TV: ' +
        val.tv +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> TV Cable: ' +
        val.tv_cable +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Generator: ' +
        val.generator +
        "</p>";
      content +=
        '  <p><i class="fa fa-angle-right" aria-hidden="true"></i> Laundry: ' +
        val.laundry +
        "</p>";
      content += "</div>";
      content += '<div class="col-md-4 col-sm-6 col-lg-4">';
      content +=
        ' <p><i class="fa fa-angle-right" aria-hidden="true"></i> WiFi: ' +
        val.wifi +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Gym: ' +
        val.gym +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Reception: ' +
        val.reception +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Parking space: ' +
        val.parking_space +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Water Supply: ' +
        val.water_supply +
        "</p>";

      content += "</div>";
      content += "</div>";
      content += "</div>";

      content += '<div class="property-map mt-5 my-5">';
      content +=
        '<div style="width: 100%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=' +
        val.property_location +
        '&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>';
      content += "</div>";
      content += "</div>";

      content += '<div class="terms container mt-2">';
      content += "<h4>Terms & rules</h4>";
      content += '<div class="row mt-4">';
      content += '<div class="col-md-6 col-sm-6 col-lg-6">';
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Smoking allowed: ' +
        val.smoking +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Pets allowed: ' +
        val.pets +
        "</p>";
      content += "</div>";
      content += '<div class="col-md-6 col-sm-6 col-lg-6">';
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Party allowed: ' +
        val.party +
        "</p>";
      content +=
        '<p><i class="fa fa-angle-right" aria-hidden="true"></i> Children allowed: ' +
        val.children_allowed +
        "</p>";
      content += "</div>";
      content += "</div>";
      content += '<h4 class="mt-3">Additional rules information</h4>';
      content += '<p class="text-justify">' + val.additional_rules + "</p>";
      //Add Reviews
      content += "<hr>";
      content += '<div id="add_reviews" class="my-4">';
      content += "<b>" + "Post Reviews" + "</b>";
      content += "<form id='review-form'>";
      content += '<div class="row my-2">';
      content += '<div class="col-md-8 col-lg-8 col-sm-12 mt-2">';
      content +=
        '<input type="text" class="form-control" id="review" aria-describedby="review">';
      content += "</div>";
      content += '<div class="col-md-2 col-lg-2 col-sm-12 mt-2">';
      content += '<select id="star" class="form-control">';
      content += "<option value='5' selected>5 star</option>";
      content += "<option value='4'>4 star</option>";
      content += "<option value='3'>3 star</option>";
      content += "<option value='2'>2 star</option>";
      content += "<option value='1'>1 star</option>";
      content += "</select>";
      content += "</div>";
      content += '<div class="col-md-2 col-lg-2 col-sm-12 mt-2">';
      content +=
        "<buttton type='submit' id='review-form-btn' class='btn btn-success add_review'>Post</button>";
      content += "</form>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      //Reviews
      content += '<div id="reviews" class="my-4">';
      content += "</div>";
      //
      content += "</div>";
      content += "</div>";
      //host profile
      content += '<div id="user-profile">';
      //
      content += "</div>";
      content += "</div>";

      //Booking form
      content += '<div class="col-sm-12 col-lg-4 col-md-4">';
      content += '<div class="position-fixed-property">';
      content += '<div class="card mt-2">';
      content += '<div class="card-header">';
      content +=
        '<h4 class="text-center">' +
        "$" +
        val.price_per_night +
        " /Night" +
        "</h4>";
      content += "</div>";
      content += '<div class="card-body">';
      content += "<form id='booking-form'>";
      content += '<input type="hidden" id="property_title" class="form-control"' + ' ' + "value=" +  val.property_name + '>';
      content += '<input type="hidden" id="property_price" class="form-control"' + ' ' + "value=" +  val.price_per_night + '>';
      content += '<input type="hidden" id="property_thumb" class="form-control"' + ' ' + "value=" +  image1 + '>';
      content += '<div class="row">';
      content += '<div class="col-md-6 col-lg-6 mt-2">';
      content += '<label for="arrival">Arrival Date</label>';
      content +=
        '<input type="date" class="form-control" id="arrival" required>';
      content += "</div>";
      content += '<div class="col-md-6 col-lg-6 mt-2">';
      content += '<label for="depart">Depart Date</label>';
      content += '<input type="date" id="depart" class="form-control">';
      content += "</div>";
      content += '<div class="col-md-12 col-lg-12 mt-4">';
      content +=
        '<input type="number" id="guests" class="form-control" placeholder="Number of Guests" required>';
      content += "</div>";
      content += "</div>";
      content +=
        '<center><button type="submit" class="btn btn-primary mt-4 mx-2 booking_btn">Book now</button></center>';
      content += "</form>";
      content += "<hr>";
      content +=
        '<center>' + "<a href=tenants-profiles.html?"+ val.property_location  + '>' +'<button class="btn btn-warning btn-block">'+ 'Find Roommates in '+ val.property_location  +'</button></a></center>';
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += "</div>";

      $("#property").append(content);
      resolve();
    });
  });
  //
});

//Scroll Booking form
property.then(function () {
  window.onscroll = function () {
    myFunction();
  };

  var header = document.querySelector(".position-fixed-property");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});

//Profile section
property.then(function () {
  var profile = database.ref("profile-you");

  var get_uid = document.getElementById("get_uid").value;

  profile
    .orderByChild("uid")
    .equalTo(get_uid)
    .once("value", (snapshot) => {
      var content = "";
      var content2 = "";
      snapshot.forEach((childSnapshot) => {
        var val = childSnapshot.val();
        var childKey = childSnapshot.key;
        var profile_pic = val.profile_pic_url;

        content += '<div class="card mt-4">';
        content += '<div class="card-body">';
        content += '<div class="row">';
        content += '<div class="col-md-3 col-sm-3 col-lg-3">';
        content +=
          "<img src=" + profile_pic + " " + 'class="img-fluid property-profile-pic"' + ">";
        content += "</div>";
        content += '<div class="col-md-9 col-sm-9 col-lg-9 mt-2">';
        content += '<h4 class="card-title">';
        content += "Hosted by <b> " + val.name + "</b></h4>";
        content +=
          '<p class="card-text"><i class="fa fa-map-marker"></i> ' +
          val.place +
          "</p>";
        content +=
          "<a href=user-profile.html?" +
          childKey +
          ">" +
          '<button class="btn btn-primary text-center" id="host-profile-childkey"' +
          "data-id=" +
          childKey +
          ">" +
          "View Profile </button>";
        content += "</div>";
        content += "</div>";
        content += "</div>";
        content += "</div>";
        //Profile pic at the top
        content2 +=
          '<img class="profile-pic-card-header img-fluid" src=' +
          profile_pic +
          ">";
      });
      $("#user-profile").append(content);
      $("#profile-img").append(content2);
    });
});

//Add Review Submissions
property.then(() => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var uid = user.uid;
      var displayName = user.displayName;

      document
        .getElementById("review-form-btn")
        .addEventListener("click", submitForm);

      function submitForm(e) {
        e.preventDefault();
        var review = document.querySelector("#review").value;
        var star = document.querySelector("#star").value;
        var childkey = document.getElementById("childkey").value;

        writeUserData(review, star, childkey);
      }

      function writeUserData(review, star, childkey) {
        firebase.database().ref("Property-Reviews").push({
          review: review,
          star: star,
          childkey: childkey,
          name: displayName,
          uid: uid,
        });
        // window.location.href = "index.html";
        document.getElementById("review-form").reset();
      }
    }
  });
});

//Reviews
property.then(function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var current_user = user.uid;
      var page_uid = document.getElementById("get_uid").value;
      var database = firebase.database();
      var ref = database.ref("Property-Reviews");
      ref.on("value", (snapshot) => {
        var content = "";
        snapshot.forEach((childSnapshot) => {
          var val = childSnapshot.val();
          var childKey = childSnapshot.key;
            
          //Property & review identification
          var property_child_key = document.getElementById("childkey").value;
         
          var db_childkey = val.childkey;
        
          if (property_child_key == db_childkey) {
            var star = val.star;
            var uid = val.uid;

            //Star counts
            if (star == "5") {
              var starCount =
                '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';
            } else if (star == "4") {
              var starCount =
                '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';
            } else if (star == "3") {
              var starCount =
                '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';
            } else if (star == "2") {
              var starCount =
                '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';
            } else if (star == "1") {
              starCount == '<i class="fa fa-star" aria-hidden="true"></i>';
            }
            content += '<h4 class="card-title">' + "Reviews:" + "</h4>";
            content += "<hr>";
            content += '<h5 class="card-title">' + val.name + "</h5>";
            content += starCount;

            content += '<p class="card-text">' + val.review + "</p>";

            //Disable Review form if the user has already reviewed it
            var hide_section = document.getElementById("add_reviews");

            if (uid == current_user) {
              hide_section.style.display = "none";
            }
          }
        });
        $("#reviews").append(content);
      });
    }
  });
});

//booking form submission
property.then(()=> {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var current_user_uid = user.uid;
      var host_uid = document.getElementById("get_uid").value;

      //Disable book in own property
      if(current_user_uid == host_uid){
      document.querySelector(".booking_btn").disabled = true;
      document.querySelector(".booking_btn").innerHTML = "You can't book your own property";
      }

      var database = firebase.database();

      var bookings_db = database.ref("Bookings");

      document.getElementById("booking-form").addEventListener("submit", submitForm);

      function submitForm(e) {
        e.preventDefault();

        var property_title = document.querySelector("#property_title").value;
        var property_price_per_night = document.querySelector("#property_price").value;
        var arrival_date = document.querySelector("#arrival").value;
        var departure_date = document.querySelector("#depart").value;
        var guests = document.querySelector("#guests").value;
        var property_thumbnail = document.querySelector("#property_thumb").value;

        writeUserData(property_title,property_price_per_night,arrival_date,departure_date,guests,property_thumbnail);
      }
      function writeUserData(property_title,property_price_per_night,arrival_date,departure_date,guests,property_thumbnail) {
        firebase.database().ref(bookings_db).push({
          property_title: property_title,
          property_price_per_night: property_price_per_night,
          arrival_date:arrival_date,
          departure_date:departure_date,
          guests: guests,
          property_thumbnail: property_thumbnail,
          tenant_uid: current_user_uid,
          host_uid: host_uid,
        });
        window.location.href = "successful-booking.html"
      }
    }
  });
})