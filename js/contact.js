//Unique Firebase Object
const firebaseConfig = {
  apiKey: "AIzaSyDPeovv2JkZ6ZHTrbqe3y7IsG8WzjkavqU",
  authDomain: "edteam14-database.firebaseapp.com",
  databaseURL: "https://edteam14-database-default-rtdb.firebaseio.com",
  projectId: "edteam14-database",
  storageBucket: "edteam14-database.appspot.com",
  messagingSenderId: "793422925515",
  appId: "1:793422925515:web:53e49339c847ef386a554e",
  measurementId: "G-Z9ZRXZ2DGG"
};
  
  //Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()
  
  //Variable to access database collection
  const db = firestore.collection("fomData")
  
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let company = document.getElementById('company').value
    let mess = document.getElementById('mess').value
  
    //Save Form Data To Firebase
    db.doc().set({
      fname: firstname,
      lname: lastname,
      company: company,
      email: email,
      mess: mess
    }).then( () => {
      console.log("Data saved")
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Success! Your form is submitted for staff to look at. We will be in touch.")
  })