var config = {
    apiKey: "AIzaSyAVGmdHI_OOWwfU9pwh_wSdkq6AHUpQmM8",
    authDomain: "train-60af8.firebaseapp.com",
    databaseURL: "https://train-60af8.firebaseio.com",
    projectId: "train-60af8",
    storageBucket: "train-60af8.appspot.com",
    messagingSenderId: "1065719042163"
  };
  firebase.initializeApp(config);

  var train = firebase.database().ref();


$("#submit").on('click', function(e){

  var name = $('#name').val().trim();
  var destination = $('#destination').val().trim();
  var firstTime = $('#firstTime').val().trim();
  var frequency = $('#frequency').val().trim();


  var newTrain = {
    name: name,
    destination: destination,
    firstTime: firstTime,
    frequency: frequency
  }

  train.push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTime);
  console.log(newTrain.frequency);


  $('#name').val("");
  $('#destination').val("");
  $('#firstTime').val("");
  $('#frequency').val("");
  
  return false;
}); 

train.on("child_added", function(childSnapshot){

  var name = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var firstTime = childSnapshot.val().firstTime;
  var frequency = childSnapshot.val().frequency;

  console.log(name);
  console.log(destination);
  console.log(firstTime);
  console.log(frequency);

  var firstTrain = moment(firstTime);

  var currentTime = moment();

  $('.table').append("<tr><td>"+ name +"</td><td>"+ destination +"</td><td>"+ firstTime +"</td><td>"+ frequency +"</td><td>##</td></tr>");
})



