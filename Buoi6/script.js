let listFilm = [
    {
        id : 1,
        name : "Mưa đỏ",
        typeof : "Phim chiếu rạp",
        banner : "",
        trailer : " "
    },
    {
        id : 2 , 
        name : "Conan",
        type : "Phim Hoạt Hình",
        banner : "",
        trailer : "",
    }
];

let bannerElement = document.getElementsByClassName("banner")[0];
function viewTrailer(){
    let trailerElement =document.getElementsByClassName("banner")[0];
    bannerElement.style.display = "none";
    trailerElement.style.display = "block"; 
}
function chooseFilm(filmId){
    let selectedFilm = listFilm.find(film => film.id === filmId );
    bannerElement.style.backgroundImage = "url"+"('"selectedFilm.banner + "')";
    filmNationElement.innerText =selectedFilm.nation ;
}