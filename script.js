let inputtedTopics = ["บทวิเคราะห์ราคา", "ข่าวในประเทศ 🇹🇭", "ราคา KUB", "ข่าว Bitcoin", "ข่าว Ethereum", "ข่าวเทคโนโลยี", "ข่าวสหรัฐฯ 🇺🇸", "ข่าว AI", "ข่าว DeFi", "ข่าว NFT", "บทวิเคราะห์ราคา", "ข่าวในประเทศ 🇹🇭", "ราคา KUB", "ข่าว Bitcoin", "ข่าว Ethereum", "เทคโนโลยี", "ข่าวสหรัฐฯ 🇺🇸", "AI", "ข่าว DeFi", "ข่าว NFT"];

function addBoxStyle(topicBox) {
    const textWidth = topicBox.textContent.length * 7 + 35;
    topicBox.style.width = textWidth + "px";
    topicBox.style.height = "39px";
    topicBox.style.background = "white";
    topicBox.style.textAlign = "center";
    topicBox.style.paddingTop = "2px";
    topicBox.style.borderRadius = "0.45em";
    topicBox.style.transition = "opacity 1s";
}

function addBox(topicBox) {
    const topic = document.querySelector("#poll-body");
    topicBox.setAttribute("onclick", "boxClicked(this.value);");
    topic.appendChild(topicBox);
}

function pollProcess() {
    for (i = 0 ; i < inputtedTopics.length ; i++) {
        let topicBox = document.createElement("button");
        topicBox.textContent = inputtedTopics[i];
        topicBox.value = inputtedTopics[i];
        addBoxStyle(topicBox);
        addBox(topicBox);
    }
}
pollProcess();

function boxClicked(value) {

    const pollBox = document.querySelector(".poll");
 
    function removeBox() {
        console.log(value);

        const pollStyle = window.getComputedStyle(document.querySelector(".poll"));
        const pollHeight = parseFloat(pollStyle.height);
        
        const pollBody = document.querySelector("#poll-body");
        const pollHead = document.querySelector("#poll-head");

        pollBody.disabled = 0;
        pollBody.style.opacity = 0;

        pollHead.disabled = 0;
        pollHead.style.opacity = 0;

        pollHead.addEventListener("transitionend", function() {
          pollBody.remove();
          pollHead.remove();
          showThanksText();
        }, {once: true});

    function showThanksText() {

        const poll = document.querySelector(".poll");

        poll.style.display = "flex";
        poll.style.justifyContent = "center";
        poll.style.alignItems = "center";


        let thanksText = document.createElement("p");
        thanksText.innerHTML = `ขอบคุณ! เราจะนำเสนอ <b>${value}</b> ให้มากขึ้น`;
        thanksText.style.fontSize = "1.9em";
        thanksText.style.transition = "opacity 1.5s";
        thanksText.style.opacity = "0";

        
        poll.appendChild(thanksText);
        
        void thanksText.offsetWidth;
        thanksText.style.opacity = "1";
      }

        pollBox.style.height = pollHeight + "px";
    }

    removeBox();
}