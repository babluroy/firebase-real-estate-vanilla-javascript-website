let myOrders = new Promise(function (resolve, reject) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var uid = user.uid;
        var database = firebase.database();
        var myOrders = database.ref("Bookings");
  
        myOrders
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

                var my_uid = val.host_uid;

                if (uid == my_uid) {
                    
                content += '<div class="container">';
                content += '<div class="card mb-3">';
                content += '<div class="row no-gutters">';
                content += '<div class="col-md-4">';
                content +=
                  "<img src=" +
                  val.property_thumbnail +
                  " " +
                  'class="card-img my-booking-img" alt="...">';
                content += "</div>";
                content += '<div class="col-md-6">';
                content += '<div class="card-body">';
                content += '<h5 class="card-title">' + val.property_title + "</h5>";
                content +=
                  '<p class="card-text">' +
                  "$" +
                  " " +
                  val.property_price_per_night +
                  "" +
                  "/Night" +
                  "</p>";

                  content +=
                  '<p><i class="fa fa-calendar-check-o" aria-hidden="true"></i>&nbsp;' + 'Arrival Date: ' +
                  val.arrival_date +
                  "</p>";
                  content +=
                  '<p><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;' + "Departure Date: " +
                  val.departure_date +
                  "</p>";
                // content +=
                //   '<p class="card-text">' +
                //   "<button class='btn btn-warning px-3'" + " " + "data-id=" + childKey + " "+ 'data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"'+">" +
                //   "Edit" +
                //   "</button>"
                content += "</div>";
                content += "</div>";
                content += "</div>";
                content += "</div>";
                content += "</div>";
                    
                } 
              });
            } else {
              $("#loader").hide();
              document.getElementById("none_message_orders").innerHTML =
              "<h2 class='text-center mt-4'>You don't have any bookings yet.</h2>";
            }
            $("#booking_orders").append(content);
          });
  
        resolve();
      }
    });
    //
  });
  

 //My bookings
  let myBookings = new Promise(function (resolve, reject) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var uid = user.uid;
        var database = firebase.database();
        var myBookings = database.ref("Bookings");
  
        myBookings
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

                var my_uid = val.host_uid;
                var tenant_uid = val.tenant_uid;

                if (tenant_uid == uid) {
                    
                content += '<div class="container">';
                content += '<div class="card mb-3">';
                content += '<div class="row no-gutters">';
                content += '<div class="col-md-4">';
                content +=
                  "<img src=" +
                  val.property_thumbnail +
                  " " +
                  'class="card-img my-booking-img" alt="...">';
                content += "</div>";
                content += '<div class="col-md-6">';
                content += '<div class="card-body">';
                content += '<h5 class="card-title">' + val.property_title + "</h5>";
                content +=
                  '<p class="card-text">' +
                  "$" +
                  " " +
                  val.property_price_per_night +
                  "" +
                  "/Night" +
                  "</p>";

                  content +=
                  '<p><i class="fa fa-calendar-check-o" aria-hidden="true"></i>&nbsp;' + 'Arrival Date: ' +
                  val.arrival_date +
                  "</p>";
                  content +=
                  '<p><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;' + "Departure Date: " +
                  val.departure_date +
                  "</p>";
                content += "</div>";
                content += "</div>";
                content += "</div>";
                content += "</div>";
                content += "</div>";
                    
                } 
              });
            } else {
              $("#loader").hide();
              document.getElementById("none_message").innerHTML =
                "<h2 class='text-center mt-4'>You haven't booked any properties</h2>";
            }
            $("#my_bookings").append(content);
          });
  
        resolve();
      }
    });
    //
  });
  
 