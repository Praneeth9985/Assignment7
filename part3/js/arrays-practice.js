//STEP 1
var favs = ["Pulp Fiction", "Interstellar", "Finding Nemo", "JFK", "The Lobster"];
console.log("STEP1: Second fav movie is " + favs[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
console.log("STEP2: First fav movie is " + movies[0]);

//STEP 3
movies = new Array(5);
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
console.log("STEP3: First fav movie is " + movies[0]);
movies.splice(2, 0, "12 Angry Men");
console.log("STEP3: Array Length is " + movies.length);
console.log("STEP3: Array is " + movies);

//STEP 4
movies = [];
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
movies.shift();
console.log("STEP4: Array is " + movies);

//STEP 5
movies = [];
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
movies[5] = "12 Angry Men";
movies[6] = "The Big Lebowski";

for(var i=0; i<movies.length; ++i){
    console.log("STEP5: movies[" + i + "]: " + movies[i]);
}

//STEP 6
movies = [];
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
movies[5] = "12 Angry Men";
movies[6] = "The Big Lebowski";

for (var i in movies ) {
    console.log("STEP6: movies[" + i + "]: " + movies[i]);
}

//STEP 7
movies = [];
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
movies[5] = "12 Angry Men";
movies[6] = "The Big Lebowski";

for (var i in movies.sort() ) {
    console.log("STEP7: movies-sorted[" + i + "]: " + movies[i]);
}

//STEP 8
movies = [];
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
movies[5] = "12 Angry Men";
movies[6] = "The Big Lebowski";

var leastFavMovies = [];
leastFavMovies[0] = "Ant Man";
leastFavMovies[1] = "Army Cooking";
leastFavMovies[2] = "Fashion";

var s = 'Movies I like:';
s += '\n';
for(var i=0; i<movies.length; ++i){
    s += '\n' + movies[i];
}
console.log(s);

s = "Movies I regret watching:";
s += '\n';
for(var i=0; i<leastFavMovies.length; ++i){
    s += '\n' + leastFavMovies[i];
}
console.log(s);


//STEP 9
movies = [];
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
movies[5] = "12 Angry Men";
movies[6] = "The Big Lebowski";

var leastFavMovies = [];
leastFavMovies[0] = "Ant Man";
leastFavMovies[1] = "Army Cooking";
leastFavMovies[2] = "Fashion";

movies = movies.concat(leastFavMovies);

s = "Reverse Sorted Concat:";
s += '\n';
for (var i in movies.sort().reverse() ) {
    s += '\n' + movies[i];
}
console.log(s);

//STEP 10
movies = [];
movies[0] = "Pulp Fiction";
movies[1] = "Interstellar";
movies[2] = "Finding Nemo";
movies[3] = "JFK";
movies[4] = "The Lobster";
movies[5] = "12 Angry Men";
movies[6] = "The Big Lebowski";

var leastFavMovies = [];
leastFavMovies[0] = "Ant Man";
leastFavMovies[1] = "Army Cooking";
leastFavMovies[2] = "Fashion";

movies = movies.concat(leastFavMovies);

console.log(movies.slice(-1)[0]);