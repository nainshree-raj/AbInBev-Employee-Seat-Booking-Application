const firebaseConfig = {
    apiKey: "AIzaSyB6Przv3ISf8D8gExA3Qq2oJLlxeyPaCaE",
    authDomain: "employee-details-85522.firebaseapp.com",
    databaseURL: "https://employee-details-85522-default-rtdb.firebaseio.com",
    projectId: "employee-details-85522",
    storageBucket: "employee-details-85522.appspot.com",
    messagingSenderId: "788536420988",
    appId: "1:788536420988:web:3839ceded829be2edcf7f9"
  };
  
firebase.initializeApp(firebaseConfig);

// reference your database
const contactFormDB = firebase.database().ref("contactForm");
//console.log(contactFormDB);

var saveMessages = (emailid, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    emailid: emailid,
    password: password,
  });
};


// to check db for data 
function check(){
  contactFormDB.on('value', snapshot => {
    console.log(snapshot.value);
  }, error => {
    console.log(error);
  })
}

function saveData(e){
  
  e.preventDefault();

  var emailid = document.getElementById("form2Example11").value;
  var password = document.getElementById("form2Example22").value;

  console.log(emailid);
  console.log(password);
  contactFormDB.set("hello");

  saveMessages(emailid, password);

  var loader = document.querySelector(".loader");
  loader.style.display = "flex";
  setTimeout(() => {
      window.location.replace("/seatdemo.html")
  }, 4000);
  

}