const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const movieSelect = document.getElementById('movie');
const buttonSave = document.querySelector('.button-save');


alert("succefully validated");

function passval() {
  var selecttext = document.getElementById("movie").value;
  localStorage.setItem("ddvalue", selecttext);
  return true;
}

populateUI();
let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
}

// get data from localstorage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  // ticketPrice = +e.target.value;
  // if (e.target.value >= 1 && e.target.value <= 5) {
  //   setMovieData(e.target.selectedIndex, e.target.value);
  //   updateSelectedCount();
  // }
  var seatData = localStorage.getItem(e.target.selectedIndex);
  if(seatData == null) return;
  var count = 0;
  document.querySelectorAll(".seat").forEach(
    seat => {
      if(seatData[count] == '1') seat.classList.add('selected'); 
      else seat.classList.remove('selected');
      count ++;
    }
  );
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

buttonSave.addEventListener('click', (e) => {
  var seatsData = "";
  document.querySelectorAll(".seat").forEach(
    seat => {
      if(seat.classList.contains('selected')) seatsData += '1';
      else seatsData += '0';
    }
  );
  console.log(movieSelect.selectedIndex);
  localStorage.setItem(movieSelect.selectedIndex, seatsData)
});


populateUI();








