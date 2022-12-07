resetButton();

let labelBox = document.querySelector('.text-hover');
const onMouseMove = (e) => {
    labelBox.style.left = e.pageX + 2 + 'px';
    labelBox.style.top = e.pageY + 2 + 'px';
}
document.addEventListener('mousemove', onMouseMove);

function resetButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";

    for (let i in textData) {
        let node = document.createElement("p");
        node.innerText = textData[i].Text;

        if (textData[i].Emotion == "sadness") {
            node.classList.add("sadness-text");
            node.onmouseout = function () { 
            document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
            document.querySelector(".text-hover").style.visibility = "visible";
            document.querySelector(".semantic-label").innerText = "Sadness 😓";
            }
        }
        else if (textData[i].Emotion == "anger") {
            node.classList.add("anger-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Anger 😠";
                }
        }
        else if (textData[i].Emotion == "fear") {
            node.classList.add("fear-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Fear 😨";
                }
        }
        else if (textData[i].Emotion == "surprise") {
            node.classList.add("surprise-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Surprise 😮";
                }
        }
        else if (textData[i].Emotion == "love") {
            node.classList.add("love-text");
            node.onmouseout = function () { 
                document.querySelector(".text-hover").style.visibility = "hidden"; };
            node.onmouseover = function () { 
                document.querySelector(".text-hover").style.visibility = "visible";
                document.querySelector(".semantic-label").innerText = "Love 🥰";
                }
        }
        else if (textData[i].Emotion == "happy") {
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


function sadnessButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    for (let i in textData) {
        if (textData[i].Emotion == "sadness") {
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function sadnessButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    for (let i in textData) {
        if (textData[i].Emotion == "sadness") {
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function angerButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    for (let i in textData) {
        if (textData[i].Emotion == "anger") {
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function fearButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    for (let i in textData) {
        if (textData[i].Emotion == "fear") {
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function surpriseButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    for (let i in textData) {
        if (textData[i].Emotion == "surprise") {
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function loveButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    for (let i in textData) {
        if (textData[i].Emotion == "love") {
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

function happyButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";
    for (let i in textData) {
        if (textData[i].Emotion == "happy") {
            let node = document.createElement("p");
            node.innerText = textData[i].Text;
            document.querySelector("#emotionsTextData").appendChild(node);
        }
    }
}

// new Kursor({
//   type: 1 /* 1 | 2 | 3 | 4 | 5 */
// })

