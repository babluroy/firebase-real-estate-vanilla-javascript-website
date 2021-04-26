let chat_cards = new Promise(function (resolve, reject) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var current_user_uid = user.uid;
      var database = firebase.database();
      var messages = database.ref("messages");

      messages.on("value", (snapshot) => {
        var content = "";
        snapshot.forEach((childSnapshot) => {
          var val = childSnapshot.val();
          var childKey = childSnapshot.key;

          var childKey_first_part = childKey.substring(0, 28);

          var childKey_second_part = childKey.substring(28, 56);

          //   document.getElementById("first_key").value = childKey_first_part
          //   document.getElementById("second_key").value = childKey_second_part

          if (
            current_user_uid == childKey_first_part ||
            current_user_uid == childKey_second_part
          ) {
            var key_array = [childKey];
            var key = childKey
            document.getElementById("key").value = key;
            // console.log(key)
            key_array.forEach(()=>{
              console.log("Hey")
              // var authName = user.displayName;
              // messages = database.ref("messages/" + key);
              
            })
          }
        });
        $("#chat_cards").append(content);
        resolve();
      });
      // })
    }
  });
});



//read
// chat_cards.then(() => {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       var authName = user.displayName;

//       var database = firebase.database();

//       var node = document.getElementById("key").value;

//       var messages_main = database.ref("messages/" + node);

//       messages_main
//         .on("value", (snapshot) => {
//           var content = "";
//           content += '<ul class="list-group">';
//           snapshot.forEach((childSnapshot) => {
//             var val = childSnapshot.val();
//             var childKey = childSnapshot.key;

//             var name = val.name;

//             if (name == authName) {
//               name = "You";
//             }

//             //   var name = val.name; content += ''

//             content +=
//               '<li class="list-group-item"' +
//               "id=modal" +
//               childKey +
//               " " +
//               'data-toggle="modal"' +
//               "data-target=#" +
//               childKey +
//               '><i class="fa fa-user" aria-hidden="true"></i> ' +
//               name;
//             content += "<p><b> " + val.message + "</b></p>";
//             content += "</li>";

//             //modal
//             content +=
//               '<div class="modal fade"' +
//               "id=" +
//               childKey +
//               " " +
//               'tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">';
//             content += '<div class="modal-dialog">';
//             content += '<div class="modal-content">';
//             content += '<div class="modal-header">';
//             content +=
//               '<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>';
//             content +=
//               '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
//             content += '<span aria-hidden="true">&times;</span>';
//             content += "</button>";
//             content += "</div>";
//             content += '<div class="modal-body">';
//             content += val.message;
//             content += "</div>";
//             content += '<div class="modal-footer">';
//             content +=
//               '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
//             content +=
//               '<button type="button" class="btn btn-primary">Save changes</button>';
//             content += "</div>";
//             content += "</div>";
//             content += "</div>";
//             content += "</div>";
//             //end of modal
//           });
//           $("#chat_cards").append(content);
//         });
//     }
//   });
// });




