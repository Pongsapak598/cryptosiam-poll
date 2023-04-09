let inputtedTopics = ["บทวิเคราะห์ราคา", "ข่าวในประเทศ 🇹🇭", "ราคา KUB", "ข่าว Bitcoin", "ข่าว Ethereum", "เทคโนโลยี", "ข่าวสหรัฐฯ 🇺🇸", "AI", "ข่าว DeFi", "ข่าว NFT", "บทวิเคราะห์ราคา", "ข่าวในประเทศ 🇹🇭", "ราคา KUB", "ข่าว Bitcoin", "ข่าว Ethereum", "เทคโนโลยี", "ข่าวสหรัฐฯ 🇺🇸", "AI", "ข่าว DeFi", "ข่าว NFT"];

function addStyle(topicBlock) {
    const textWidth = topicBlock.textContent.length * 7 + 35;
    topicBlock.style.width = textWidth + "px";
    topicBlock.style.height = "39px";
    topicBlock.style.background = "white";
    topicBlock.style.textAlign = "center";
    topicBlock.style.paddingTop = "2px";
    topicBlock.style.borderRadius = "0.45em";
}

function addBox(topicBlock) {
    const selectedTopic = document.querySelector("#poll-body");
    selectedTopic.appendChild(topicBlock);
}

function pollProcess() {
    for (i = 0 ; i < inputtedTopics.length ; i++) {
        let topicBlock = document.createElement("button");
        topicBlock.textContent = inputtedTopics[i];
        addStyle(topicBlock);
        addBox(topicBlock);
    }
}
pollProcess();
    
function removeBox() {

}

/*

const pollBody = document.getElementById('poll-body');

pollBody.addEventListener('click', function(event) {
  const box = event.target;
  box.style.display = 'none';
});

*/