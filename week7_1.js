console.log('Script loaded');



function fetchJsonData(url){
        
    const promise = new Promise((resolve, reject) =>{
    const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            const jsonData = (JSON.parse(xhr.responseText));
            resolve(jsonData);
        });
        
        xhr.open('GET',url);
        xhr.send();
    });
    return promise;
}

const moviesURL = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

fetchJsonData(moviesURL).then(moviesData => {
        
        moviesData.map(movie => {
        
        if(movie.rating >= 8.5){
             movie['Tag:'] = 'Execellent';
        }else if(movie.rating >= 8 && movie.rating< 8.5){
             movie['Tag:'] = 'v.good';
        }else {
             movie['Tag:'] = 'good';}
        
        })

    

console.log(moviesData);
    

    
    const menu = document.querySelector('#menu');
    const renderMovies = document.createElement('button');
    menu.appendChild(renderMovies);
    renderMovies.textContent ='All Movies';
    const goodMovieRatingDiv = document.querySelector('ul');
    
    
    const excellentMovies = document.createElement('button');
    menu.appendChild(excellentMovies);
    excellentMovies.textContent ='Excellent Movies';

    const vgoodMovies = document.createElement('button');
    menu.appendChild(vgoodMovies);
    vgoodMovies.textContent ='Very Good Movies';
    
    const goodMovies = document.createElement('button');
    menu.appendChild(goodMovies);
    goodMovies.textContent ='Good Movies';
    
        
//---------------------------------------------------------------------------------------------------    
    renderMovies.addEventListener('click', () => {
        
                goodMovieRatingDiv.innerHTML = "";
                
                moviesData.map(x =>{
                const li = document.createElement('li');
                goodMovieRatingDiv.appendChild(li);
                li.innerHTML = x.title;
               
                });
                
            });
//---------------------------------------------------------------------------------------------------    
    
    // it is showing movies on given rating base
    
    excellentMovies.addEventListener('click', () => {
             
        goodMovieRatingDiv.innerHTML = "";  
        getMovieRang(moviesData, 8.5, 15);
        
    
    });
    
    vgoodMovies.addEventListener('click', () => {
             
        goodMovieRatingDiv.innerHTML = ""; 
        getMovieRang(moviesData, 8, 8.5);
    
    });
    
    goodMovies.addEventListener('click', () => {
             
        goodMovieRatingDiv.innerHTML = "";
        getMovieRang(moviesData, 1, 8);
        
        
    });
    
    
//---------------------------------------------------------------------------------------------------       
    
    
    //Search Movies
//---------------------------------------------------------------------------------------------------          
    

const searchMovies = document.forms['search-movies'].querySelector('input');

searchMovies.addEventListener('keyup',function(e){
    
    const term = e.target.value.toLowerCase();
    
    const searchArea = document.querySelector('#goodMovieRating ul');
    const getMovies = searchArea.getElementsByTagName('li');
    
    Array.from(getMovies).forEach(function(movieName){
        
//        const movieTitle = movieName.firstElementChild.textContent;
        const movieTitle = movieName.textContent;
        
        if(movieTitle.toLowerCase().indexOf(term) !== -1){
            movieName.style.display = 'block';
        }else {
            movieName.style.display = 'none';
        }
        
        
    });
    
});
   
}).catch(error => {console.log('Error',errorr);});;




function getMovieRang(moviesData, firstRange, lastRange){
    
    const goodMovieRatingDiv = document.querySelector('ul');
    return moviesData.filter(x => x.rating >= firstRange &&  x.rating < lastRange ).map(x => {
                const li = document.createElement('li');
                goodMovieRatingDiv.appendChild(li);
                li.innerHTML = x.title;
                        
          });
    
    }



/*
function ratingMovies(moviesData){

    moviesData.map(movies => {
        
        if(movies.rating >= 8.5){
             movies['Tag:'] = 'Execellent';
        }else if(movies.rating >= 8 && movies.rating< 8.5){
             movies['Tag:'] = 'v.good';
        }else {
             movies['Tag:'] = 'good';}
        }
        );
        return( moviesData);
        
}*/



        
    
    
    











