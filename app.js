var optionStatus = false;

function toggleOptions() {
  if(optionStatus == false) {
    document.querySelector(".options").style.display = "block";
    optionStatus = true;
  } else if (optionStatus) {
    document.querySelector(".options").style.display = "none";
    optionStatus = false;
  }
}

var musicVolume = "0.5";
var soundVolume = "0.5";

(function(){
  try {
    if(localStorage.getItem("musicVolume") != null) {
      musicVolume = localStorage.getItem("musicVolume");
      soundVolume = localStorage.getItem("soundVolume");

      document.querySelector("#musicVolume").value = musicVolume;
      document.querySelector("#soundVolume").value = soundVolume;
    }
  } catch (error) {
    console.error("Can't find savedSound", error);
  }
})();

function setVolume(id) {
  if(id == "musicVolume") {
    musicVolume = document.querySelector("#musicVolume").value;
  }
  else if (id == "soundVolume") {
    soundVolume = document.querySelector("#soundVolume").value;
  }
}

function defaultOptions() {
  document.querySelector("#musicVolume").value = "0.5";
  document.querySelector("#soundVolume").value = "0.5";
}

function saveOptions() {
  localStorage.setItem("musicVolume", musicVolume);
  localStorage.setItem("soundVolume", soundVolume);
  console.log("Options Saved!");
}

function startGame() {
  window.location.href = window.origin + "/space-invaders/play";
}

document.querySelector("#name").addEventListener("input", function() {
  var name = document.querySelector("#name").value;
  sessionStorage.setItem("name", name);
})

var keyCodes = {
  "w": 119,
  "s": 115,
  "a": 97,
  "d": 100
}

var ship_iterator = 1;
var shipColor = "blue";
var shipModel = "./assets/art/PNG/playerShip1_" + shipColor + ".png";

function setShipColor(col) {
  console.log(col);
  shipColor = col;
  sessionStorage.setItem("shipColor", shipColor);

  document.querySelector("#ship").setAttribute("src", "./assets/art/PNG/playerShip1_" + shipColor + ".png");
}

document.body.addEventListener("keypress", function (event) {
  console.log(event.keyCode);
  if(document.querySelector("#name") !== document.activeElement) {
    shipColorList = ["blue", "green", "orange", "red"];

    shipList = [
      "./assets/art/PNG/playerShip1_" + shipColor + ".png",
      "./assets/art/PNG/playerShip2_" + shipColor + ".png",
      "./assets/art/PNG/playerShip3_" + shipColor + ".png"
    ];

    document.querySelector("#ship").setAttribute("src", shipList[ship_iterator]);

    if(event.keyCode == keyCodes.d) {
      shipModel = shipList[ship_iterator];
      sessionStorage.setItem("shipModel", shipModel);

      if(ship_iterator < shipList.length - 1) {
        ship_iterator++;
      }

    }

    if(event.keyCode == keyCodes.a) {
      shipModel = shipList[ship_iterator];
      sessionStorage.setItem("shipModel", shipModel);
      if(ship_iterator > 0) {
        ship_iterator--;
      }

    }
  }

});
