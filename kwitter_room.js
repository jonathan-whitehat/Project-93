  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBaduaOxgHgI9jMMrjbJBr6MSCAPdu2kIk",
      authDomain: "twitter-24808.firebaseapp.com",
      projectId: "twitter-24808",
      storageBucket: "twitter-24808.appspot.com",
      messagingSenderId: "463331046351",
      appId: "1:463331046351:web:4482eddbf221929d4058ba"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{     
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding_room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("RoomName- " + room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Start code
      getData();
      function redirectToRoomName(name) 
      {
      console.log(name); 
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      }
      //End code
      });});}


