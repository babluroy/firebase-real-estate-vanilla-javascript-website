let profile = new Promise(function (resolve, reject) {
  var database = firebase.database();
  var profile = database.ref("profile-you");
  profile.on("value", (snapshot) => {
    //Hide spinner
    $("#loader").hide();
    $(".listing-heading").show();
    $(".review-heading").show();

    var content = "";

    const queryString = window.location.search;

    var childkey_value_url = queryString.substring(1);
    // console.log(childkey_value_url)

    //changed ref to clicked data-id
    var newClickFirebaseRef = profile.child(childkey_value_url);
    //appended the clickend data-id value
    newClickFirebaseRef.once("value", function (snapshot) {
      var val = snapshot.val();

      //   var name = val.name;
      //   console.log(name);

      content += '<div class="container">';
      content += '<div class="card">';
      content += ' <div class="card-header">';
      content += '<div class="row no-gutters">';
      content += '<div class="col-lg-3 col-md-3 col-sm-12">';
      content +=
        "<img src=" +
        val.profile_pic_url +
        " " +
        'class="img-fluid img-profile">';
      content += "</div>";

      content += '<div class="col-lg-6 col-md-6 col-sm-12  mt-2">';
      content +=
        '<p style="display: inline;" class="public-profile-name">' +
        "&nbsp;Hi, I'm " +
        " " +
        val.name +
        "</p>";
      content +=
        '<p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' +
        val.place +
        "</p>";
      // content +=
      //   '<p><button class="btn btn-danger text-center send_main_button" data-toggle="modal"' +
      //   " " +
      //   "data-target=#modal" +
      //   childkey_value_url +
      //   ">&nbsp;Send a Message</button>";
      //modal
      content +=
        '<div class="modal fade"' +
        " " +
        "id=modal" +
        childkey_value_url +
        " " +
        'tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">';
      content += '<div class="modal-dialog modal-dialog-scrollable">';
      content += '<div class="modal-content">';
      content += '<div class="modal-header">';
      content += '<h5 class="modal-title" id="exampleModalLabel">Chats</h5>';
      content +=
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
      content += '<span aria-hidden="true">&times;</span>';
      content += "</button>";
      content += "</div>";
      content += '<div class="modal-body">';
      content += "<div id='all_messages'>";
      content += "</div>";
      content += "</div>";
      content += "<hr>";
      content += '<div class="container">';
      // content +=
      //   '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
      content += '<form id="chat" class="form-inline">';
      content += '<div class="form-group mx-sm-3 mb-2">';
      content += '<label for="message" class="sr-only">Password</label>';
      content +=
        '<input type="text" class="form-control" id="message" placeholder="Message">';

      content +=
        '<button type="submit" class="btn btn-primary mb-2 mt-2">Send</button>';
      content += "</div>";
      content += "</form>";

      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      //end of modal

      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += '<div class="card-body">';
      content += val.bio;
      content += "</div>";
      content += "</div>";
      content += "</div>";
      content += "</div>";
      //Listing + Review

      document.getElementById("get_uid").value = val.uid;

      $("#user-profile").append(content);
      resolve();
    });
  });
  //
});

//Reviews
profile.then(() => {
  var uid = document.getElementById("get_uid").value;
  var database = firebase.database();
  var reviews = database.ref("Property-Reviews");
  reviews
    .orderByChild("uid")
    .equalTo(uid)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        var content = "";
        snapshot.forEach((childSnapshot) => {
          var val = childSnapshot.val();
          var childKey = childSnapshot.key;

          content += '<div class="container">';
          content += '<div class="card mt-2">';
          content += '<div class="card-body">';
          content += '<h5 class="card-title">' + val.name + "</h5>";

          var star = val.star;

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
          content += starCount;

          content += '<p class="card-text">' + val.review + "</p>";
          content += "</div>";
          content += "</div>";
          content += "</div>";
        });
      } else {
        document.getElementById("reviews").innerHTML =
          "<h4 class='text-center mt-4'>No Reviews</h4>";
      }
      $("#reviews").append(content);
    });
});

//Listings
profile.then(() => {
  var uid = document.getElementById("get_uid").value;
  var database = firebase.database();
  var profile_Listings = database.ref("Properties");
  profile_Listings
    .orderByChild("uid")
    .equalTo(uid)
    .once("value", (snapshot) => {
      var content = "";
      snapshot.forEach((childSnapshot) => {
        var val = childSnapshot.val();
        var childKey = childSnapshot.key;
        content += '<div class="container">';
        content += '<div class="card mb-3">';
        content += '<div class="row no-gutters">';
        content += '<div class="col-md-6">';
        content +=
          "<img src=" +
          val.image1 +
          " " +
          'class="card-img my-listing-img" alt="...">';
        content += "</div>";
        content += '<div class="col-md-4">';
        content += '<div class="card-body">';
        content += '<h5 class="card-title">' + val.property_name + "</h5>";
        content += '<p class="card-text">' + val.about + "</p>";
        content += "</div>";
        content += "</div>";
        content += "</div>";
        content += "</div>";
        content += "</div>";
      });
      $("#listings").append(content);
    });
});

//Send messages
profile.then(() => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var current_user_uid = user.uid;
      var name = user.displayName
      var host_uid = document.getElementById("get_uid").value;

      if (current_user_uid > host_uid) {
        var chat_key = current_user_uid + host_uid;

        // console.log(chat_key)
      } else if (current_user_uid < host_uid) {
        var chat_key = host_uid + current_user_uid;

        // console.log(chat_key)
      }

      var database = firebase.database();

      var messages = database.ref("messages/" + chat_key);

      document.getElementById("chat").addEventListener("submit", submitForm);

      function submitForm(e) {
        e.preventDefault();

        var message = document.querySelector("#message").value;

        writeUserData(message);
      }
      function writeUserData(message) {
        firebase.database().ref(messages).push({
          message: message,
          name: name,
          read: false
        });
        //cleat input field
        document.getElementById("chat").reset();
      }
    }
  });
});

//Read messages
profile.then(() => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var current_user_uid = user.uid;
      var host_uid = document.getElementById("get_uid").value;

      // document.querySelector(".send_main_button").addEventListener("click", ()=>{


      if (current_user_uid > host_uid) {
        var chat_key = current_user_uid + host_uid;

        // console.log(chat_key)
      } else if (current_user_uid < host_uid) {
        var chat_key = host_uid + current_user_uid;

        // console.log(chat_key)
      }

      var database = firebase.database();

      var read_chats = database.ref("messages/" + chat_key);

      
      read_chats.on("value", (snapshot) => {
        var content = "";
        snapshot.forEach((childSnapshot) => {
          var val = childSnapshot.val();
          var childKey = childSnapshot.key;

          // var test = val.message
          // console.log(test)
          

          content += '<div class="card mt-3 chat_threads">';
          content += '<div class="card-body">';
          content += val.message;
          content += "</div>";
          content += "</div>";
        });
        $("#all_messages").append(content);        
      });
    // })
    }
  });
});
