function  checkZipcode() {
    let zipInp = document.getElementById('zip-inp');
    let zip = Number(zipInp.value);
    if (zip > 99999 || zip < 10000) {
        alert("Zip code must be 5 digit number.");
    }
    else if (zip > 20000) {
        alert("We've got your area covered!");
        return true;
    } else {
        alert("Sorry, we haven't expanded to that area yet.");
        return false;
    }	
}
let zipBtn = document.getElementById('zip-btn');
zipBtn.addEventListener("click", checkZipcode);