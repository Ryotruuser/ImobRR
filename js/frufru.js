const emptyHeart = document.getElementById("emptyHeart");
const fullHeart = document.getElementById("fullHeart");

like = () => {
    emptyHeart.style.display = "none";    
    fullHeart.style.display = "inline";
}

dislike = () => {
    emptyHeart.style.display = "inline";    
    fullHeart.style.display = "none";
} 
