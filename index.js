// scripts.js

const movies = [
    {
        titlePT: "SE NÃO FOSSE VOCÊ",
        titleEN: "REGRETTING YOU",
        date: "2025-11-16",
        rating: 4,
        poster: "https://br.web.img3.acsta.net/img/f2/33/f233d41de9a2a00eee2ec2f72d8dfcc7.jpg",
        comment: ""
      },
    {
        titlePT: "O TELEFONE PRETO 2",
        titleEN: "THE BLACK PHONE 2",
        date: "2025-10-20",
        rating: 4,
        poster: "https://ingresso-a.akamaihd.net/prd/img/movie/o-telefone-preto-2/0d0fbad5-6f2e-44dc-a4a8-c9bd2477d6bb.webp",
        comment: ""
      },
    {
        titlePT: "MALÊS",
        titleEN: "MALÊS",
        date: "2025-10-05",
        rating: 4,
        poster: "https://static3.moviehub.com.br/fotos/filmes/poster/16159_medio.jpg",
        comment: ""
      },    {
        titlePT: "UMA BATALHA APÓS A OUTRA",
        titleEN: "ONE BATTLE AFTER ANOTHER",
        date: "2025-09-27",
        rating: 4,
        poster: "https://ingresso-a.akamaihd.net/prd/img/movie/uma-batalha-apos-a-outra/12e96cac-d31d-47ff-b20a-985ecb2ddbfb.webp",
        comment: ""
      },
    {
        titlePT: "A LONGA MARCHA: CAMINHE OU MORRA 🇹🇭",
        titleEN: "THE LONG WALK 🇹🇭",
        date: "2025-09-14",
        rating: 5,
        poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/01/The_Long_Walk_%28filme%29.webp/250px-The_Long_Walk_%28filme%29.webp.png",
        comment: ""
      },
    {
        titlePT: "OS MATERIALISTAS 🇹🇭",
        titleEN: "THE MATERIALISTS 🇹🇭",
        date: "2025-09-10",
        rating: 4,
        poster: "https://m.media-amazon.com/images/S/pv-target-images/09f3e9f15731ead43fa22b845a662daa6cdb1c22b97505e75e7ecbba2480e7a5.jpg",
        comment: ""
      },
    {
        titlePT: "A HORA DO MAL",
        titleEN: "WEAPONS",
        date: "2025-08-11",
        rating: 3,
        poster: "https://pad.mymovies.it/filmclub/2024/05/101/locandina.jpg",
        comment: ""
      },
    {
        titlePT: "QUARTETO FANTASTICO: PRIMEIROS PASSOS",
        titleEN: "FANTASTIC FOUR: FIRST STEPS",
        date: "2025-07-23",
        rating: 5,
        poster: "https://lumiere-a.akamaihd.net/v1/images/au_movies_marvel_fantasticfourfirststeps_official_poste_daf083fc.jpeg",
        comment: ""
      },
    {
        titlePT: "SUPERMAN",
        titleEN: "SUPERMAN",
        date: "2025-07-10",
        rating: 5,
        poster: "https://upload.wikimedia.org/wikipedia/pt/3/32/Superman_%282025_film%29_poster.jpg",
        comment: ""
      },
    {
        titlePT: "COMO TREINAR O SEU DRAGÃO",
        titleEN: "HOW TO TRAIN YOUR DRAGON",
        date: "2025-06-15",
        rating: 5,
        poster: "https://theposterdb.com/api/assets/572864/view",
        comment: ""
      },
    {
      titlePT: "BAILARINA",
      titleEN: "BALLERINA",
      date: "2025-06-12",
      rating: 4,
      poster: "https://theposterdb.com/api/assets/598799/view",
      comment: ""
    },
    {
        titlePT: "LILO & STITCH",
        titleEN: "LILO & STITCH",
        date: "2025-06-06",
        rating: 5,
        poster: "https://images.theposterdb.com/prod/public/images/posters/optimized/movies/1493518/516Eo7HZjEpfWYt0UFJQb1wgYlPD0xIGcjh5GO2e.webp",
        comment: ""
      },
    {
        titlePT: "KARATÊ KID: LENDAS",
        titleEN: "KARATE KID: LEGENDS",
        date: "2025-05-08",
        rating: 4,
        poster: "https://image.tmdb.org/t/p/original/c90Lt7OQGsOmhv6x4JoFdoHzw5l.jpg",
        comment: ""
      },
    {
        titlePT: "THUNDERBOLTS*",
        titleEN: "THUNDERBOLTS*",
        date: "2025-05-01",
        rating: 4,
        poster: "https://image.tmdb.org/t/p/original/hBH50Mkcrc4m8x73CovLmY7vBx1.jpg",
        comment: ""
      },
    {
        titlePT: "ENTRE NÓS, O AMOR",
        titleEN: "BETWEEN US, LOVE",
        date: "2025-04-24",
        rating: 5,
        poster: "https://ingresso-a.akamaihd.net/prd/img/movie/entre-nos-o-amor/23dcc02b-e82e-4467-9de0-6fd19ddc4653.webp",
        comment: ""
      },
    {
        titlePT: "OPERAÇÃO VINGANÇA",
        titleEN: "OPERATION: REVENGE",
        date: "2025-04-13",
        rating: 3,
        poster: "https://m.media-amazon.com/images/M/MV5BNWFhMGZiMzUtNmJkOS00YzA2LTg1ZDMtMDFmMjI1YjY2OTNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        comment: ""
      },
    {
        titlePT: "UM FILME MINECRAFT",
        titleEN: "MINECRAFT: THE MOVIE",
        date: "2025-04-10",
        rating: 5,
        poster: "https://ingresso-a.akamaihd.net/prd/img/movie/um-filme-minecraft/6a574e9c-040b-4612-ae44-785318a27193.webp",
        comment: ""
      },
    {
        titlePT: "BRANCA DE NEVE",
        titleEN: "SNOW WHITE",
        date: "2025-03-30",
        rating: 3,
        poster: "https://image.tmdb.org/t/p/original/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
        comment: ""
      },
    
    {
        titlePT: "VITÓRIA",
        titleEN: "VICTORY",
        date: "2025-03-26",
        rating: 5,
        poster: "https://m.media-amazon.com/images/M/MV5BOTZiNTBlZjctODg5OC00NWZlLTg3MzktZDUwYjYxYjg4MWExXkEyXkFqcGc@._V1_.jpg",
        comment: ""
      },
    {
        titlePT: "MICKEY 17",
        titleEN: "MICKEY 17",
        date: "2025-03-06",
        rating: 4,
        poster: "https://image.tmdb.org/t/p/original/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
        comment: ""
      },
    {
        titlePT: "AINDA ESTOU AQUI",
        titleEN: "STILL HERE",
        date: "2025-03-03",
        rating: 5,
        poster: "https://upload.wikimedia.org/wikipedia/pt/5/57/Ainda_Estou_Aqui_2024_poster.jpg",
        comment: ""
      },
    {
        titlePT: "FLOW",
        titleEN: "FLOW",
        date: "2025-03-02",
        rating: 5,
        poster: "https://media.fstatic.com/9xsK-zBJ5Rem6LvPW9AZVxtExUQ=/322x478/smart/filters:format(webp)/media/movies/covers/2025/02/oofrrNRcXmciUJPK9Qka8tZk8ay.jpg",
        comment: "Watched it three times. It felt like seeing Charlotte there."
      },
      {
        titlePT: "FLOW",
        titleEN: "FLOW",
        date: "2025-02-27",
        rating: 5,
        poster: "https://media.fstatic.com/9xsK-zBJ5Rem6LvPW9AZVxtExUQ=/322x478/smart/filters:format(webp)/media/movies/covers/2025/02/oofrrNRcXmciUJPK9Qka8tZk8ay.jpg",
        comment: ""
      },
      {
        titlePT: "FLOW",
        titleEN: "FLOW",
        date: "2025-02-23",
        rating: 5,
        poster: "https://media.fstatic.com/9xsK-zBJ5Rem6LvPW9AZVxtExUQ=/322x478/smart/filters:format(webp)/media/movies/covers/2025/02/oofrrNRcXmciUJPK9Qka8tZk8ay.jpg",
        comment: ""
      },
    {
      titlePT: "CONCLAVE",
      titleEN: "CONCLAVE",
      date: "2025-02-16",
      rating: 4,
      poster: "https://feira.tangerina.news/wp-content/uploads/2025/01/poster-conclave-Focus-Features.jpg",
      comment: ""
    },
    {
        titlePT: "CAPITÃO AMÉRICA - ADMIRÁVEL MUNDO NOVO",
        titleEN: "CAPTAIN AMERICA - BRAVE NEW WORLD",
        date: "2025-02-13",
        rating: 3,
        poster: "https://image.tmdb.org/t/p/original/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
        comment: ""
      },
    {
      titlePT: "ACOMPANHANTE PERFEITA",
      titleEN: "PERFECT COMPANION",
      date: "2025-02-09",
      rating: 2,
      poster: "https://m.media-amazon.com/images/M/MV5BODgwNDZkZjctYWU5Zi00MzdhLWJlMDctYTI3ZTQxMzRhZDUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      comment: ""
    },
    {
      titlePT: "SONIC 3: O FILME",
      titleEN: "SONIC 3: THE MOVIE",
      date: "2025-01-12",
      rating: 3,
      poster: "https://imusic.dk/image-proxy/5056453207867/scaled",
      comment: ""
    },
    {
      titlePT: "MUFASA: O REI LEÃO",
      titleEN: "MUFASA: THE LION KING",
      date: "2025-01-05",
      rating: 4,
      poster: "https://image.tmdb.org/t/p/original/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
      comment: ""
    }
  ];
  
  
  let currentLanguage = "EN";
  
  function updateCounter() {
    const counter = document.getElementById("counter");
    counter.textContent = `🎬 Movies watched: ${movies.length}`;
  }
  
  function renderMovies() {
    const container = document.getElementById("movie-list");
    container.innerHTML = "";
  
    const sortedMovies = movies.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    sortedMovies.forEach((movie, index) => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.id = `movie-${index}`;
  
      const title = currentLanguage === "PT" ? movie.titlePT : movie.titleEN;
  
      card.innerHTML = `
        <img src="${movie.poster}" alt="${title}" class="poster" />
        <div class="details">
          <h3 class="title">${title}</h3>
          <p><strong>Date:</strong> ${new Date(movie.date).toLocaleDateString()}</p>
          <p><strongRating:</strong> ${movie.rating} ⭐</p>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  function switchLanguage(newLanguage) {
    currentLanguage = newLanguage;
    renderMovies();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    updateCounter();
    renderMovies();

    fetch("https://script.google.com/macros/s/AKfycbwZin0nW70T9n8m6dr2HCEX2sbO-rT2XmoYJ0X-ByKMFBQW6cBiRVh71CqfdCbAdQ/exec");

  });
  
