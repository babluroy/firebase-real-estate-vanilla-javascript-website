let myprofile = new Promise(function (resolve, reject) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var uid = user.uid;
      var database = firebase.database();
      var myProfile = database.ref("profile-you");

      myProfile
        .orderByChild("uid")
        .equalTo(uid)
        .on("value", (snapshot) => {
          if (snapshot.exists()) {
            $("#loader").hide();
            $(".heading-text").show();
            var content = "";
            // content += '<div class="container">';
            // content += '<div class="row">';
            snapshot.forEach((childSnapshot) => {
              var val = childSnapshot.val();
              var childKey = childSnapshot.key;

              content += '<div class="container">';
              content += '<div class="card">';
              content += ' <div class="card-header">';
              content += '<div class="row no-gutters">';
              content += '<div class="col-lg-2 col-md-2 col-sm-12">';
              content +=
                "<img src=" +
                val.profile_pic_url +
                " " +
                'class="img-fluid img-profile">';
              content += "</div>";

              content += '<div class="col-lg-6 col-md-6 col-sm-12  mt-2">';
              content +=
                '<p style="display: inline;" class="public-profile-name">' +
                " " +
                val.name +
                "</p>";
              content +=
                '<p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' +
                val.place +
                "</p>";
              //   content +=
              //     '<p><button class="btn btn-danger text-center">&nbsp;Send a Message</button>';

              content += "</div>";
              content += "</div>";
              content += "</div>";
              content += '<div class="card-body">';
              content += val.bio;
              content += "</div>";
              content += "</div>";
              content += "</div>";
              content += "</div>";
            });
          } else {
            $("#loader").hide();
            document.getElementById("tenant-profiles").innerHTML =
              "<h2 class='text-center mt-4'>You don't have Profile</h2>";
          }
          $("#my-profile").append(content);
        });

      resolve();
    }
  });
  //
});

//tenant profile
myprofile.then(()=>{
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var uid = user.uid;
      var database = firebase.database();
      var myProfile = database.ref("profile-tenants");

      myProfile
        .orderByChild("uid")
        .equalTo(uid)
        .on("value", (snapshot) => {
          if (snapshot.exists()) {
            $("#loader").hide();
            $(".heading-text").show();
            var content = "";
            // content += '<div class="container">';
            // content += '<div class="row">';
            snapshot.forEach((childSnapshot) => {
              var val = childSnapshot.val();
              var childKey = childSnapshot.key;

              content += '<div class="container">';
              content += '<div class="card">';
              content += ' <div class="card-header">';
              content += '<div class="row no-gutters">';
              content += '<div class="col-lg-2 col-md-2 col-sm-12">';
              content +=
                "<img src=" +
                val.profile_pic_url +
                " " +
                'class="img-fluid img-profile">';
              content += "</div>";

              content += '<div class="col-lg-6 col-md-6 col-sm-12  mt-2">';
              content +=
                '<p style="display: inline;" class="public-profile-name">' +
                " " +
                val.name +
                "</p>";
              content +=
                '<p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;' +
                val.place +
                "</p>";
              //   content +=
              //     '<p><button class="btn btn-danger text-center">&nbsp;Send a Message</button>';

              content += "</div>";
              content += "</div>";
              content += "</div>";
              // content += '<div class="card-body">';
              // content += val.bio;
              // content += "</div>";
              content += "</div>";
              content += "</div>";
              content += "</div>";
            });
          } else {
            $("#loader").hide();
            document.getElementById("tenant-profiles").innerHTML =
              "<h2 class='text-center mt-4'>You don't have Profile</h2>";
          }
          $("#my-profile").append(content);
        });
      }
    });
})


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let myListings = new Promise(function (resolve, reject) {
      var uid = user.uid;
      var database = firebase.database();
      var myProperties = database.ref("Properties");

      myProperties
        .orderByChild("uid")
        .equalTo(uid)
        .on("value", (snapshot) => {

          if (snapshot.exists()) {

          var content = "";
          snapshot.forEach((childSnapshot) => {
            var val = childSnapshot.val();
            var childKey = childSnapshot.key;
            content += '<div class="container">';
            content += '<div class="card mb-3">';
            content += '<div class="row no-gutters">';
            content += '<div class="col-md-4">';
            content +=
              "<img src=" +
              val.image1 +
              " " +
              'class="card-img my-listing-img" alt="...">';
            content += "</div>";
            content += '<div class="col-md-6">';
            content += '<div class="card-body">';
            content += '<h5 class="card-title">' + val.property_name + "</h5>";
            content += '<p class="card-text">' + val.about + "</p>";
            content +=
              '<p class="card-text">' +
              "$" +
              " " +
              val.price_per_night +
              "" +
              "/Night" +
              "</p>";
            content +=
              '<p class="card-text">' +
              "Accomodation: " +
              val.accommodation +
              "</p>";
            // content +=
            //   '<p class="card-text">' +
            //   "<button class='btn btn-warning px-3'" + " " + "data-id=" + childKey + " "+ 'data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"'+">" +
            //   "Edit" +
            //   "</button>";

            content +=
            '<button type="button" class="btn btn-danger" data-toggle="modal"' + "data-target=#modal" + childKey +'>';
            content += "Delete";
            content += "</button>";
            content +=
              '<div class="modal fade"'+ " " + "id=modal" + childKey + " " + 'tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">';
            content += '<div class="modal-dialog">';
            content += '<div class="modal-content">';
            content += '<div class="modal-header">';
            content +=
              '<h5 class="modal-title" id="exampleModalLabel">DevBud</h5>';
            content +=
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
            content += '<span aria-hidden="true">&times;</span>';
            content += "</button>";
            content += "</div>";

            content += '<div class="modal-body">';
            content += "Are you sure ?"
            content += "</div>";
            content += '<div class="modal-footer">';
            content +=
              '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>';
              content +=
              '<p class="card-text">' +
              "<button class='btn btn-danger mx-2'" +
              " " +
              "data-id=" +
              childKey +
              " " +
              "id=" +
              childKey +
              ">" +
              "Delete" +
              "</button></p>";
            content += "</div>";
            content += "</div>";
            content += "</div>";
            content += "</div>";

            content += "</div>";
            content += "</div>";
            content += "</div>";
            content += "</div>";
            content += "</div>";
          
          });
        }else{
           $("#loader").hide();
           $(".heading-text").hide();
        }
          $("#listings").append(content);
          resolve();
        });
    });

    //Reviews

    // myprofile.then(()=>{
    //     firebase.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //     var uid = user.uid
    //     var database = firebase.database();
    //     var reviews = database.ref("Property-Reviews");

    //     reviews
    //     .orderByChild("uid")
    //     .equalTo(uid)
    //     .once("value", (snapshot) => {
    //       if (snapshot.exists()) {
    //       var content = "";
    //       snapshot.forEach((childSnapshot) => {
    //         var val = childSnapshot.val();
    //         var childKey = childSnapshot.key;

    //         content += '<div class="container">';
    //         content += '<div class="card mt-2">';
    //         content += '<div class="card-body">';
    //         content += '<h5 class="card-title">'+val.name+'</h5>';

    //         var star = val.star;

    //             //Star counts
    //             if (star == "5") {
    //               var starCount =
    //                 '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';
    //             } else if (star == "4") {
    //               var starCount =
    //                 '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';
    //             } else if (star == "3") {
    //               var starCount =
    //                 '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';
    //             } else if (star == "2") {
    //               var starCount =
    //                 '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';
    //             } else if (star == "1") {
    //               starCount == '<i class="fa fa-star" aria-hidden="true"></i>';
    //             }
    //             content += starCount;

    //         content +=
    //           '<p class="card-text">'+val.review+'</p>';
    //         content += "</div>";
    //         content += "</div>";
    //         content += "</div>";

    //       })}else{
    //         document.getElementById("reviews").innerHTML = "<h4 class='text-center mt-4'>No Reviews</h4>"
    //       };
    //       $("#reviews").append(content);
    //     });

    //         }
    //     })
    // })

    //Delete Properties
    myListings.then(() => {
      var uid = user.uid;
      var database = firebase.database();
      var ref = database.ref("Properties");
      ref
        .orderByChild("uid")
        .equalTo(uid)
        .on("value", (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            var val = childSnapshot.val();
            var childKey = childSnapshot.key;

            var test = document.getElementById(childKey);
            console.log(test);

            document
              .getElementById(childKey)
              .addEventListener("click", function () {
                //retrive data-id
                var childkey_value = $(this).data("id");

                var clicked_property = ref.child(childkey_value);

                clicked_property.remove();

                //Refresh after delete
                location.reload();

              });
          });
        });
    });
  }
});
