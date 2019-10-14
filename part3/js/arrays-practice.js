//STEP 1
var favMovies = ["The Arrival", "Predestination", "Forest Gump", "The Dark Knight", "The Silence of the Lambs"];
window.console.log("Second movie in the array: " + favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
window.console.log("First movie in the array: " + movies[0]);

//STEP 3
movies = new Array(5);
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
movies.splice(2, 0, "2001: A Space Odyssey");
window.console.log("Array Length is " + movies.length);

//STEP 4
movies = [];
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
delete movies[0];
window.console.log("Modified Array: " + movies);

//STEP 5
movies = [];
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
movies[5] = "2001: A Space Odyssey";
movies[6] = "The Usual Suspects";

for(var i=0; i<  movies.length; i++){
    window.console.log("Movies array in a for loop: " +movies[i]);
}

//STEP 6
movies = [];
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
movies[5] = "2001: A Space Odyssey";
movies[6] = "The Usual Suspects";

for (var i in movies ) {
    window.console.log("Movies array in a for-in loop: " +movies[i]);
}

//STEP 7
movies = [];
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
movies[5] = "2001: A Space Odyssey";
movies[6] = "The Usual Suspects";

for (var i in movies.sort() ) {
    console.log("Movies array in a for-in loop(sorted order): " + movies[i]);
}

//STEP 8
movies = [];
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
movies[5] = "2001: A Space Odyssey";
movies[6] = "The Usual Suspects";

var leastFavMovies = [];
leastFavMovies[0] = "The Twilight Saga";
leastFavMovies[1] = "The Last Airbender";
leastFavMovies[2] = "Dragon Ball Evolution";

var s = "";
s += "Movies I like:" +"\n\n";
for(var i=0; i<movies.length; i++){
    s += movies[i]+ "\n";
}
s += ("..." +"\n\n" );
s += "Movies I regret watching:" +"\n\n";
for(var i=0; i<leastFavMovies.length; ++i){
    s +=  leastFavMovies[i] + "\n";
}
s += "..."

window.console.log(s);


//STEP 9
movies = [];
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
movies[5] = "2001: A Space Odyssey";
movies[6] = "The Usual Suspects";

var leastFavMovies = [];
leastFavMovies[0] = "The Twilight Saga";
leastFavMovies[1] = "The Last Airbender";
leastFavMovies[2] = "Dragon Ball Evolution";

movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log("Comcatenated movies list (reverse ordered) "+movies)

//STEP 10
movies = [];
movies[0] = "The Arrival";
movies[1] = "Predestination";
movies[2] = "Forest Gump";
movies[3] = "The Dark Knight";
movies[4] = "The Silence of the Lambs";
movies[5] = "2001: A Space Odyssey";
movies[6] = "The Usual Suspects";

var leastFavMovies = [];
leastFavMovies[0] = "The Twilight Saga";
leastFavMovies[1] = "The Last Airbender";
leastFavMovies[2] = "Dragon Ball Evolution";

movies = movies.concat(leastFavMovies);

window.console.log(movies.slice(-1)[0]);