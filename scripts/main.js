let connection = true;
if(connection){
    alert("You've been connected to my page!");
}

function points(score, interval){
    let result = (score * 50) + (interval / 2);
    return result;
};

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/newAndroid.png"){
        myImage.setAttribute("src", "images/githubLogo.jpg");
    }else{
        myImage.setAttribute("src", "images/androidPhoto.png");
    }
};