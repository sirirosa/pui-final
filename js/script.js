resetButton();

// hover popup
let labelBox = document.querySelector('.text-hover');
const onMouseMove = (e) => {
    labelBox.style.left = e.pageX + 2 + 'px';
    labelBox.style.top = e.pageY + 2 + 'px';
}

// makes hover appear when a user mouses over it 
document.addEventListener('mousemove', onMouseMove);

// refreshes page with data from json file
function resetButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";

    // limits to 20 texts and randomizes texts on refresh
    for (let i=0; i<20; i++) {
        let randomIndex = Math.floor(Math.random()*(textData.length+1));
        let i = textData[randomIndex];
        let node = document.createElement("p");
        node.innerText = i.Text;

        // adds label with correct emotion on hover

        if (i.Emotion == "sadness") {
            node.classList.add("sadness-text");
            node.onmouseout = function () { 
            document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
            document.querySelector(".text-hover").style.visibility = "visible";
            document.querySelector(".semantic-label").innerText = "Sadness 😓";
            }
        }

        else if (i.Emotion == "anger") {
            node.classList.add("anger-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Anger 😠";
                }
        }

        else if (i.Emotion == "fear") {
            node.classList.add("fear-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Fear 😨";
                }
        }

        else if (i.Emotion == "surprise") {
            node.classList.add("surprise-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Surprise 😮";
                }
        }

        else if (i.Emotion == "love") {
            node.classList.add("love-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Love 🥰";
                }
        }

        else if (i.Emotion == "happy") {
            node.classList.add("happy-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Happy 😀";
                }
        }

        document.querySelector("#emotionsTextData").appendChild(node);
    }
}


// filters texts by emotion (listed in json key)using buttons in top navbar 

function sadnessButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    let count = 0;
    for (let i in textData) {
        if (textData[i].Emotion == "sadness") {
            count++;
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function angerButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    let count = 0;
    for (let i in textData) {
        if (textData[i].Emotion == "anger") {
            count++;
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function fearButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    let count = 0;
    for (let i in textData) {
        if (textData[i].Emotion == "fear") {
            count++;
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function surpriseButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    let count = 0;
    for (let i in textData) {
        if (textData[i].Emotion == "surprise") {
            count++;
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function loveButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    let count = 0;
    for (let i in textData) {
        if (textData[i].Emotion == "love") {
            count++;
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function happyButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    let count = 0;
    for (let i in textData) {
        if (textData[i].Emotion == "happy") {
            count++;
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

