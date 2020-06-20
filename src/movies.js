//1st iteration 
var directorNames = movies.map(function(movie) {
    return movie.director});
    console.log(directorNames);
  
  //2nd iteration
  function howManyMovies(movies) {
      let movieSpielbergDrama = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes ("Drama"));
      return movieSpielbergDrama;
  }
  howManyMovies(movies);
  
  
  //3th iteration
  
  const moviesRate= movies.map(movie => movie.rate);
  const totalRate=moviesRate.reduce((acc, currVal) => acc+currVal);
  const averageRates=totalRate/moviesRate.length;
  console.log(averageRates.toFixed(2));
  
  
  //4th iteration
  const dramaMovies=movies.filter(movie=> movie.genre.includes('Drama'))
  .map(movie=>movie.rate);
  const dramaMoviesRate=dramaMovies.reduce((acc, currVal) => acc + currVal);
  console.log(dramaMoviesRate);
  const averageDramaRates=dramaMoviesRate/dramaMovies.length;
  console.log(averageDramaRates.toFixed(2));
  
  //iteration 5
  const orderByYear=movies.slice().sort(function(a,b) { 
    
   if(a.year < b.year) return -1;
   if(a.year > b.year ) return 1;
   if(a.title<b.title) return -1;
   if(a.title>b.title) return 1;
  
  });
  
  console.log( orderByYear);
  

