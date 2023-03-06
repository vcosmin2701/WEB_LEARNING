function points(score, interval){
    let result = (score * 50) + (interval / 2);
    return result;
}

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/androidPhoto.png"){
        myImage.setAttribute("src", "images/githubLogo.jpg");
    }else{
        myImage.setAttribute("src", "images/androidPhoto.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Have a good day, ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Still have a great day, ${storedName}`;
}

myButton.onclick = function() {
    setUserName();
}



