const moviesList = [
	{ movieName: "Devil May Cry", price: 15 },
	{ movieName: "Kill Blue", price: 10 },
	{ movieName: "Attack on Titan", price: 25 },
];

// * adding movies to the dropdown list
const movies = document.querySelector("#selectMovie");
const movieName = document.querySelector("#movieName");
const moviePrice = document.querySelector("#moviePrice");
const movieDate = document.querySelector(".date");
let totalPrice = document.querySelector("#totalPrice");
// default - movie 1
const movieDefault = document.createElement("option");
movieDefault.value = "Devil May Cry";
movieDefault.textContent = "Devil May Cry";
movieName.textContent = "Devil May Cry";
moviePrice.textContent = `$ ${moviesList[0].price}`;
const today = new Date();
movieDate.textContent = today.toLocaleDateString("en-US", {
	day: "2-digit",
	month: "long",
	year: "numeric",
});
movies.append(movieDefault);
// movies 2 and 3
moviesList.slice(1).forEach((movie) => {
	const option = document.createElement("option");
	option.value = movie.movieName;
	option.textContent = movie.movieName;
	movies.appendChild(option);
});
// event listener for each movie
movies.addEventListener("change", (chosenMovie) => {
	const selectedMovie = moviesList.find((movie) => chosenMovie.target.value === movie.movieName);
	if (selectedMovie) {
		movieName.textContent = selectedMovie.movieName;
		moviePrice.textContent = `$ ${selectedMovie.price}`;
	}
});
