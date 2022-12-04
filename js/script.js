resetButton();

function resetButton() {
    document.querySelector("#emotionsTextData").innerHTML = "";

    for (let i in textData) {
        let node = document.createElement("p");
        node.innerText = textData[i].Text;

        if (textData[i].Emotion == "sadness") {
            node.classList.add("sadness-text");
        }
        else if (textData[i].Emotion == "anger") {
            node.classList.add("anger-text");
        }
        else if (textData[i].Emotion == "fear") {
            node.classList.add("fear-text");
        }
        else if (textData[i].Emotion == "surprise") {
            node.classList.add("surprise-text");
        }
        else if (textData[i].Emotion == "love") {
            node.classList.add("love-text");
        }
        else if (textData[i].Emotion == "happy") {
            node.classList.add("happy-text");
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

new Kursor({
  type: 1 /* 1 | 2 | 3 | 4 | 5 */
})

