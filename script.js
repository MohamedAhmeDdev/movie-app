document.getElementById("icon").addEventListener("click", () =>
{
    document.getElementById("ul-list").classList.toggle("show");
})

let movies = [
    {
        name: "The Contractor",
        image: "https://img.6movies.net/xxrz/250x400/194/84/4d/844dd76041517ca993f0980e419d9fde/844dd76041517ca993f0980e419d9fde.jpg",
        date : 2022 ,
        link: "https://www3.6movies.net/movie/free-the-contractor-hd-77998",
        
    },
    {
        name: "The Batman",
        image: "https://img.6movies.net/xxrz/250x400/194/21/2d/212d2d95b9d515504a4de227d49a769f/212d2d95b9d515504a4de227d49a769f.jpg",
        date : 2022 ,
        link: "https://www3.6movies.net/movie/free-the-batman-hd-16076",
    }, 
    {
        name: "Sonic the Hedgehog 2",
        image: "https://img.6movies.net/xxrz/250x400/194/07/ee/07ee1d0becc43df040a6c8e500c8f249/07ee1d0becc43df040a6c8e500c8f249.jpg",
        date : 2022 ,
        link: "https://www3.6movies.net/movie/free-sonic-the-hedgehog-2-hd-78778",
        
    }, 
    {
        name: "Spider-Man: No Way Home",
        image: "https://img.6movies.net/xxrz/250x400/194/44/54/4454b905c18670de60b09fd624fccd0c/4454b905c18670de60b09fd624fccd0c.jpg",
        date : 2021 ,
        link: "https://www3.6movies.net/movie/free-spider-man-no-way-home-hd-71326",
        
    },
    {
       name: "Agent Game",
        image: "https://img.6movies.net/xxrz/250x400/194/b7/bb/b7bbb079e33c2420d274841ae8cd0975/b7bbb079e33c2420d274841ae8cd0975.jpg",
        date : 2021 ,
        link: "https://www3.6movies.net/movie/free-agent-game-hd-79009",
    },
    {
        name: "Jurassic Island",
        image: "https://img.6movies.net/xxrz/250x400/194/44/34/4434cd8d3573227d442a3b1a9a1419b3/4434cd8d3573227d442a3b1a9a1419b3.jpg",
        date : 2021 ,
        link: "https://www3.6movies.net/movie/free-jurassic-island-hd-78838",
    },
    {
        name: "Koati",
        image: "https://img.6movies.net/xxrz/250x400/194/d8/9a/d89a3f80978e86183c8463b742ea391b/d89a3f80978e86183c8463b742ea391b.jpg",
        date : 2021 ,
        link: "https://www3.6movies.net/movie/free-koati-hd-78931",
    },
    {
        name: "The Blacklist",
        image: "https://img.6movies.net/xxrz/250x400/194/03/69/0369332135546537eb6eead8c454ac73/0369332135546537eb6eead8c454ac73.jpg",
        date : 2015 ,
        link: "https://www3.6movies.net/tv/free-the-blacklist-hd-39519",
    },
    {
        name: "Magnum P.I.",
        image: "https://img.6movies.net/xxrz/250x400/194/80/0f/800f5e0ade0f1a0b442c632dac2bfdec/800f5e0ade0f1a0b442c632dac2bfdec.jpg",
        date : 2020 ,
        link: "https://www3.6movies.net/tv/free-magnum-pi-hd-38358",
    },
    {
        name: "Big Sky",
        image: "https://img.6movies.net/xxrz/250x400/194/ed/63/ed632238a9e1c60de3f5ce2b3e8cd9ab/ed632238a9e1c60de3f5ce2b3e8cd9ab.jpg",
        date : 2021 ,
        link: "https://www3.6movies.net/tv/free-big-sky-hd-65118",
    },
    {
        name: "The Wonder Years",
        image: "https://img.6movies.net/xxrz/250x400/194/f7/ce/f7cea8bedc1bd0e2342635d7d5332c46/f7cea8bedc1bd0e2342635d7d5332c46.jpg",
        date : 2021 ,
        link: "https://www3.6movies.net/tv/free-the-wonder-years-hd-72382",
    },
];


function CreateMovieCard(movies){
    return `
        <div class="card" style="width: 300px">
            <img src="${movies.image}" 
            class="card-img-top" style="height:300px" alt="...">

            <div class="card-body" style="height:100px">
                <h5 class="card-title">${movies.name}</h5>

            <p>${movies.date}</p>
            
            <a href="${movies.link}" class="btn btn-secondary btn-lg disabled button"
            tabindex="-1" role="button" aria-disabled="true">Watch</a>
            </div>
        </div>
    `
}

function moviecard(card){
    let divcard = movies.map((div) => CreateMovieCard(div)).join(" ")
    document.getElementById("card").innerHTML = divcard;
}
moviecard(card);


