function myFunction() {
    var lessText = document.getElementById("less");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myCertsBtn");
    if (lessText.style.display === "none") {
        lessText.style.display = "block";
        btnText.innerHTML = "View My Certificates &#9660;"; 
        moreText.style.display = "none";
    } else {
        lessText.style.display = "none";
        btnText.innerHTML = "Hide My Certificates &#9650;"; 
        moreText.style.display = "block";
    }
}