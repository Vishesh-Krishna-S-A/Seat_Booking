const moviesList = [
	{ movieName: "Devil May Cry", price: 150 },
	{ movieName: "Kill Blue", price: 100 },
	{ movieName: "Attack on Titan", price: 250 },
];

// * adding movies to the dropdown list
const movies = document.querySelector("#selectMovie");
const movieName = document.querySelector("#movieName");
const moviePrice = document.querySelector("#moviePrice");
const movieDate = document.querySelector(".date");
// default
const movieDefault = document.createElement("option");
movieDefault.value = "";
movieDefault.textContent = "--Please choose an option--";
movieName.textContent = "Please select a movie";
moviePrice.textContent = "$ 0";
movieDate.textContent = "N/A";
movies.append(movieDefault);
// movies 1 to 3
moviesList.forEach((movie) => {
	const option = document.createElement("option");
	option.value = movie.movieName;
	option.textContent = movie.movieName;
	// todo: add event listener to the dropdown list
	movies.appendChild(option);
});
