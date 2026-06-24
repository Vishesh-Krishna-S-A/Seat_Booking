const moviesList = [
	{ movieName: "Devil May Cry", price: 15 },
	{ movieName: "Kill Blue", price: 10 },
	{ movieName: "Attack on Titan", price: 25 },
];

// Movie Elements
const movieSelect = document.querySelector("#selectMovie");
const movieName = document.querySelector("#movieName");
const moviePrice = document.querySelector("#moviePrice");

// Seat Elements
const seats = document.querySelectorAll("#seatCont .seat");
const selectedSeatsHolder = document.querySelector("#selectedSeatsHolder");
const totalPrice = document.querySelector("#totalPrice");
const numberOfSeat = document.querySelector("#numberOfSeat");

// Buttons
const cancelBtn = document.querySelector("#cancelBtn");
const proceedBtn = document.querySelector("#proceedBtn");

// Store selected seats
let selectedSeats = [];

// Populate Movie Dropdown
moviesList.forEach((movie, index) => {
	const option = document.createElement("option");

	option.value = movie.movieName;
	option.textContent = movie.movieName;

	// Default to the first movie in the list
	if (index === 0) {
		option.selected = true;
		movieName.textContent = movie.movieName;
		moviePrice.textContent = `$ ${movie.price}`;
	}

	movieSelect.appendChild(option);
});

// Movie Change Event
movieSelect.addEventListener("change", (m) => {
	const selectedMovie = moviesList.find((movie) => movie.movieName === m.target.value);

	if (selectedMovie) {
		movieName.textContent = selectedMovie.movieName;
		moviePrice.textContent = `$ ${selectedMovie.price}`;
		updatePrice();
	}
});

// Update Total Price
function updatePrice() {
	const seatPrice = Number(moviePrice.textContent.replace("$", "").trim());

	const total = selectedSeats.length * seatPrice;

	numberOfSeat.textContent = selectedSeats.length;
	totalPrice.textContent = `$ ${total}`;
}

// Update Selected Seats UI
function updateSelectedSeatsHolder() {
	selectedSeatsHolder.innerHTML = "";

	if (selectedSeats.length === 0) {
		const span = document.createElement("span");
		span.classList.add("noSelected");
		span.textContent = "No Seat Selected";
		selectedSeatsHolder.appendChild(span);
		return;
	}

	const allRows = Array.from(document.querySelectorAll("#seatCont .row"));

	selectedSeats.forEach((seat) => {
		const row = seat.parentElement;

		// Row starts from 1
		const rowNumber = allRows.indexOf(row) + 1;

		// Column starts from A
		const columnIndex = Array.from(row.children).indexOf(seat);
		const columnLetter = String.fromCharCode(65 + columnIndex);

		// Example: A1...
		const seatLabel = `${columnLetter}${rowNumber}`;

		const div = document.createElement("div");
		div.classList.add("selectedSeat");
		div.textContent = seatLabel;

		selectedSeatsHolder.appendChild(div);
	});
}

// Seat Selection
seats.forEach((seat) => {
	if (!seat.classList.contains("occupied")) {
		seat.addEventListener("click", () => {
			if (seat.classList.contains("selected")) {
				seat.classList.remove("selected");

				selectedSeats = selectedSeats.filter((selectedSeat) => selectedSeat !== seat);
			} else {
				seat.classList.add("selected");
				selectedSeats.push(seat);
			}

			updatePrice();
			updateSelectedSeatsHolder();
		});
	}
});

// Cancel Button
cancelBtn.addEventListener("click", () => {
	selectedSeats.forEach((seat) => {
		seat.classList.remove("selected");
	});

	selectedSeats = [];

	updatePrice();
	updateSelectedSeatsHolder();
});

// Continue Button
proceedBtn.addEventListener("click", () => {
	if (selectedSeats.length === 0) {
		alert("Oops no seat Selected");
		return;
	}

	alert("Yayy! Your Seats have been booked");

	selectedSeats.forEach((seat) => {
		seat.classList.remove("selected");
		seat.classList.add("occupied");
	});

	selectedSeats = [];

	updatePrice();
	updateSelectedSeatsHolder();
});

// Revert to Initial State
updatePrice();
updateSelectedSeatsHolder();
