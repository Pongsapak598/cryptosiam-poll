let inputtedTopics = ["บทวิเคราะห์ราคา", "ข่าวในประเทศ 🇹🇭", "ราคา KUB", "ข่าว Bitcoin", "ข่าว Ethereum", "เทคโนโลยี", "ข่าวสหรัฐฯ 🇺🇸", "AI", "ข่าว DeFi", "ข่าว NFT", "บทวิเคราะห์ราคา", "ข่าวในประเทศ 🇹🇭", "ราคา KUB", "ข่าว Bitcoin", "ข่าว Ethereum", "เทคโนโลยี", "ข่าวสหรัฐฯ 🇺🇸", "AI", "ข่าว DeFi", "ข่าว NFT"];

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
    const selectedTopic = document.querySelector("#poll-body");
    topicBox.setAttribute("onclick", "removeBox()");
    selectedTopic.appendChild(topicBox);
}


function pollProcess() {
    for (i = 0 ; i < inputtedTopics.length ; i++) {
        let topicBox = document.createElement("button");
        topicBox.textContent = inputtedTopics[i];
        addBoxStyle(topicBox);
        addBox(topicBox);
    }
}
pollProcess();

function removeBox() {

    const pollStyle = window.getComputedStyle(document.querySelector(".poll"));
    const pollHeight = parseFloat(pollStyle.height);
    
    const pollBox = document.querySelector(".poll");
    const pollBody = document.querySelector("#poll-body");
    const pollHead = document.querySelector("#poll-head");

    pollBody.disabled = 0;
    pollBody.style.opacity = 0;

    pollHead.disabled = 0;
    pollHead.style.opacity = 0;

    pollHead.addEventListener("transitionend", function() {
      pollBody.remove();
      pollHead.remove();
    }, {once: true});

    pollBox.style.height = pollHeight + "px";

}