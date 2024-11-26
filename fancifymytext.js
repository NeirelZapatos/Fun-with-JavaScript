function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function changeFanciness() {
    const textInput = document.getElementById("textInput");
    const fancyShmancy = document.getElementById("fancyShmancy");
    
    if (fancyShmancy.checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

function mooifyText() {
    const textInput = document.getElementById("textInput");
    
    const sentences = textInput.value.split(/\.\s*/);
    
    const mooifiedSentences = sentences.map(sentence => {
        if (sentence.trim() === "") return sentence;
        
        const uppercasedSentence = sentence.toUpperCase();
        
        const words = uppercasedSentence.split(" ");
        
        if (words.length > 0) {
            words[words.length - 1] += "-MOO";
        }
        
        return words.join(" ");
    });
    
    textInput.value = mooifiedSentences.join(". ");
}