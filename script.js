const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteButton = document.querySelector("button");
soundButton = document.querySelector(".sound");
copyButton = document.querySelector(".copy");
twitterButton = document.querySelector(".twitter");

//Random quote generator function
function randomQuote(){
    quoteButton.classList.add("loading");
    quoteButton.innerText = "New quote loading...";
    //Fetches random quotes from API
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteButton.innerText = "NEW QUOTE";
        quoteButton.classList.remove("loading");
    });
}

soundButton.addEventListener("click", ()=>{
        let utterance = new SpeechSynthesisUtterance('${quoteText.innerText} by ${authorName.innerText}');
        speechSynthesis.speak(utterance);
});

copyButton.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twittterButton.addEventListener("click", ()=>{
    let tweetUrl = 'https://twitter.com/intent/tweet?url=${quoteText.innerText}';
    window.open(tweetUrl, "_blank");
});

quoteButton.addEventListener("click", randomQuote);
