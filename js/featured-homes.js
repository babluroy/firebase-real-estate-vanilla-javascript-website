var card_listings = new Promise(function(resolve, reject) {
    var database = firebase.database();
    var properties = database.ref("Properties");

    properties.limitToLast(3).once("value", (snapshot) => {
        if (snapshot.exists()) {

            //Hide spinner
            $('#loader').hide();

            var content = "";
            content += '<div class="row">';
            snapshot.forEach((childSnapshot) => {
                var val = childSnapshot.val();
                var childKey = childSnapshot.key;
                content += '<div class="col-lg-4">';
                content += '<div class="box" data-aos="fade-up" data-aos-delay="200"' + " " + "id=" + childKey + " " + "data-id=" + childKey + '>'
                content += '<div class="text-container">'
                content += "<img src=" + val.image1 + " " + 'class="img-fluid" alt="">'
                content += '<div class="image-texts">$ ' + val.price_per_night + '/ Night</div>'
                content += '</div>'
                content += '<h3>' + val.property_name + '</h3>'
                content += '<p><i class="fa fa-map-marker" aria-hidden="true"></i> ' + val.property_location + '</p>'
                content += '<p><i class="fa fa-bed" aria-hidden="true"></i> ' + val.bedrooms + ' Bedrooms &nbsp;&nbsp;&nbsp;<i class="fa fa-shower" aria-hidden="true"></i> ' + val.bathrooms + ' Baths &nbsp;&nbsp;&nbsp; <i class="fa fa-users" aria-hidden="true"></i> ' + val.accommodation + ' Guests'
                content += '</p>'
                content += '</div>'
                content += '</div>'

                resolve();


            })
        } else {

            //Hide spinner
            $('#loader').hide();

        };
        $("#featured").append(content);
    });
});


card_listings.then(function() {
    var database = firebase.database();
    var ref = database.ref("Properties");
    ref.limitToLast(3).once("value", (snapshot) => {
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