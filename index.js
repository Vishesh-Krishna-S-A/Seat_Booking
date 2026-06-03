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
// default
const movieDefault = document.createElement("option");
movieDefault.value = "";
movieDefault.textContent = "--Please choose an option--";
movieName.textContent = "N/A";
moviePrice.textContent = "$ 0";
const today = new Date();
movieDate.textContent = today.toLocaleDateString("en-US", {
	day: "2-digit",
	month: "long",
	year: "numeric",
});

movies.append(movieDefault);
// movies 1 to 3
moviesList.forEach((movie) => {
	const option = document.createElement("option");
	option.value = movie.movieName;
	option.textContent = movie.movieName;
	// event listener for each movie
	movies.addEventListener("change", (e) => {
		if (e.target.value === movie.movieName) {
			movieName.textContent = movie.movieName;
			moviePrice.textContent = `$ ${movie.price}`;
		}
		
	});
	movies.appendChild(option);
});
