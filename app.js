

 function speak () {
    let text = document.querySelector("#input").value;
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
 }