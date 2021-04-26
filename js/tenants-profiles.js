var my_place = new Promise(function (resolve, reject) {
  const queryString = window.location.search;

  var childkey_value_url = queryString.substring(1);

  console.log(childkey_value_url);

  document.querySelector(".my-place").value = childkey_value_url;

  resolve();
});

my_place.then(() => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var match_place = document.querySelector(".my-place").value;
      var database = firebase.database();
      var tenants = database.ref("profile-tenants");

      tenants
        .orderByChild("place")
        .equalTo(match_place)
        .once("value", (snapshot) => {
          if (snapshot.exists()) {
            $("#loader").hide();
            var content = "";
            content += '<div class="container">';
            content += '<div class="row">';
            snapshot.forEach((childSnapshot) => {
              var val = childSnapshot.val();
              var childKey = childSnapshot.key;

              content +=
                '<div class="col-12 col-md-4 col-lg-4 col-sm-12' +
                " " +
                val.uid +
                '">';
              content += '<div class="card mt-2">';
              content +=
                "<img src=" +
                val.profile_pic_url +
                " " +
                'class="card-img-top" alt="...">';

              content += '<div class="card-body">';
              content += '<div class="card-title">';
              content += "<b>" + val.name + "</b>";
              content += "</div>";
              content +=
                '<p class="card-text">' +
                "I'm Searching home in " +
                val.place +
                ".</p>";
              content += '<p class="card-text">' + val.bio + "</p>";
              // content +=
              //   '<button class="btn btn-primary text-center">Send a Message</button>';
              content += "</div>";
              content += "</div>";
              content += "</div>";
            });
          } else {
            $("#loader").hide();
            document.getElementById("tenant-profiles").innerHTML =
              "<h2 class='text-center mt-4'>No  Matches</h2>";
          }
          $("#tenant-profiles").append(content);
        });
    }
  });
});
