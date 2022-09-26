var startBtn = document.querySelector('#startButton');

function gameBegin() {
    var body = document.body;
    
    var gameEl = document.createElement("div");

    var listQ = document.createElement("ol");

    var questOne = document.createElement("li");
    var questTwo = document.createElement("li");
    var questThree = document.createElement("li");
    var questFour = document.createElement("li");

    body.appendChild(gameEl);

    gameEl.appendChild(listQ);

    listQ.appendChild(questOne);
    listQ.appendChild(questTwo);
    listQ.appendChild(questThree);
    listQ.appendChild(questFour);
    questOne.textContent = "question one";
    questTwo.textContent = "question two";
    questThree.textContent = "question two";
    questFour.textContent = "question four";
};

startBtn.addEventListener('click', gameBegin());
