var fans = document.querySelector(".fans");
fans.addEventListener("mouseover", function() {
fans.innerText = "123K";
});


var fish = document.querySelector(".fish");
fish.addEventListener("mouseover", function() {
    fish.innerText = "47K";
});

var pets = document.querySelector(".pets");
pets.addEventListener("mouseover", function() {
    pets.innerText = "20K";
});

var toggle = document.querySelector("#toggle");
toggle.addEventListener("click", function () {
    if (body.classList.contains("light")) {
        body.classList.remove("light")
        ball.classList.remove("move-right")
        h1.innerText = "Stealth Quincy"
    }
    else {
        body.classList.add("light")
        ball.classList.add("move-right")
        h1.innerText = "Party Quincy"
    }
});

var ball = document.querySelector(".ball");

var h1 = document.querySelector("h1");

var body = document.querySelector("body");