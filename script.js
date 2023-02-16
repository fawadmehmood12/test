async function getNumberOfMovies(substr) {
    //   const response = await fetch(`https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}`);
    //    const movies = await response.json();
    //    return movies.total;

    const xhr = new XMLHttpRequest();
xhr.open("GET", `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}`);
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const movies =  xhr.response;
       console.log(movies.total);
  } 
};

    
}

console.log(getNumberOfMovies("maze")) ; 
