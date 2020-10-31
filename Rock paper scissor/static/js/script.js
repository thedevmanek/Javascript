function game(choice) {
  var humanchoice, botchoice;
  humanchoice = choice.id;
  botchoice = numtochoice(randint());
  //console.log(humanchoice);
  //console.log(botchoice);
  result = decidewinner(humanchoice, botchoice);
  console.log(result);
  message = finalMessage(result);
  console.log(message);
  Frontendrps(humanchoice, botchoice, message);
  setTimeout(function () {
    location.reload();
  }, 2000);
}

function randint() {
  return Math.floor(Math.random() * 3);
}
function numtochoice(number) {
  return ["rock", "paper", "scissor"][number];
}
function decidewinner(yourchoice, compchoice) {
  var setrps = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    scissor: { scissor: 0.5, rock: 0, paper: 1 },
    paper: { scissor: 0, rock: 1, paper: 0.5 },
  };
  var yourscore = setrps[yourchoice][compchoice];
  var compscore = setrps[compchoice][yourchoice];
  return [yourscore, compscore];
}
function finalMessage([yourscore, compscore]) {
  if (yourscore == 0) {
    return { message: "You lost", color: "red" };
  } else if (yourscore == 0.5) {
    return { message: "You tied", color: "yellow" };
  } else {
    return { message: "You won", color: "green" };
  }
}

function Frontendrps(humanchoice, botchoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    scissor: document.getElementById("scissor").src,
    paper: document.getElementById("paper").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("scissor").remove();
  document.getElementById("paper").remove();

  var human = document.createElement("div");
  var message = document.createElement("div");
  var bot = document.createElement("div");
  console.log(humanchoice);
  human.innerHTML =
    "<img src='" +
    imagesDatabase[humanchoice] +
    "'height =150 width 150 box-shadow: 0px 10px 50px blue>";
  message.innerHTML =
    "<h1 style='color:" +
    message["color"] +
    "; font-size:60px; padding: 30px;'>" +
    finalMessage["message"] +
    "</h1>";
  bot.innerHTML =
    "<img src='" +
    imagesDatabase[botchoice] +
    "'height =150 width 150 box-shadow: 0px 10px 50px black>";
  document.getElementById("flex-box-rps").appendChild(human);
  document.getElementById("flex-box-rps").appendChild(message);
  document.getElementById("flex-box-rps").appendChild(bot);
}
