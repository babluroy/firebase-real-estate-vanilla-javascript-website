var card_listings = new Promise(function(resolve, reject) {
    var database = firebase.database();
    var properties = database.ref("Properties");

    const queryString = window.location.search;

    var childkey_value_url = queryString.substring(1);
    console.log(childkey_value_url)

    properties.orderByChild("property_location").equalTo(childkey_value_url).once("value", (snapshot) => {
        if (snapshot.exists()) {

            //Hide spinner
            $('#loader').hide();


            var content = "";
            content += '<div class="container">';
            content += '<div class="row">';
            snapshot.forEach((childSnapshot) => {
                var val = childSnapshot.val();
                var childKey = childSnapshot.key;

                // content +=
                //     "<button" +
                //     " " +
                //     "class=" +
                //     "btn-cls" +
                //     " " +
                //     "id=" +
                //     childKey +
                //     " " +
                //     "data-id=" +
                //     childKey +
                //     ">" +
                //     val.name +
                //     "</button>";


                content += '<div class="col-12 col-md-4 col-lg-4 col-sm-12">';
                content += '<div class="card my-2">';
                content += '<div id=' + childKey + "slides" + " " + 'class="carousel slide" data-ride="carousel">';
                content += '<div class="carousel-inner">';
                content += '<div class="carousel-item active">';
                content += '<img src=' + val.image1 + " " + 'class="d-block w-100 img-listing">';
                content += '</div>';
                content += '<div class="carousel-item">';
                content += '<img src=' + val.image2 + " " + 'class="d-block w-100 img-listing">';
                content += '</div>';
                content += '<div class="carousel-item">';
                content += '<img src=' + val.image3 + " " + 'class="d-block w-100 img-listing">';
                content += '</div>';
                content += '</div>';
                content += '<a class="carousel-control-prev"' + " " + "href=#" + childKey + "slides" + " " + 'role="button" data-slide="prev">';
                content += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
                content += '<span class="sr-only">Previous</span>';
                content += '</a>';
                content += '<a class="carousel-control-next"' + " " + "href=#" + childKey + "slides" + " " + 'role="button" data-slide="next">';
                content += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
                content += '<span class="sr-only">Next</span>';
                content += '</div>';
                content += '</a>';
                content += '<div class="card-body"' + " " + "data-id=" + childKey + " " + "id=" + childKey + '>';
                content += '<h5 class="card-title md-1">' + val.property_name + '</h5>';
                content += '<p class="text-muted"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;' + val.property_location + '&nbsp;&nbsp;<i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;' + val.property_category + '</p>';
                content += '<div class="card-text">';
                content += '<p class="h4">$' + val.price_per_night + '/Night</p>';
                content += '<i class="fa fa-bed" aria-hidden="true"></i>&nbsp;&nbsp' + val.bedrooms + '&nbsp;&nbsp;<i class="fa fa-shower" aria-hidden="true"></i>&nbsp;&nbsp;' + val.bathrooms + '&nbsp;&nbsp;<i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;' + val.accommodation;
                content += '</div>';
                content += '</div>';
                content += '</div>';
                content += '</div>';

                resolve();


            })
        } else {
            //Hide spinner
            $('#loader').hide();
            document.getElementById("listings").innerHTML = "<h2 class='text-center mt-4'>No homes are available</h2>"
        };
        $("#listings").append(content);
    });
});



card_listings.then(function() {
    var database = firebase.database();
    var ref = database.ref("Properties");
    ref.orderByChild("property_category").equalTo("Personal").once("value", (snapshot) => {
        // var content = "";
        snapshot.forEach((childSnapshot) => {
            var val = childSnapshot.val();
            var childKey = childSnapshot.key;

            document.getElementById(childKey).addEventListener("click", function() {
                //retrive data-id
                var childkey_value = $(this).data("id");

                window.location.href = `property.html?${childkey_value}`

            });

        });
    });
});