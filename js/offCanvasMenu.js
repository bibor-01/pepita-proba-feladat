function myFunction() {
    console.log("hello")
    var menu = document.getElementById("sidebar");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}