var quotes = {
    1: ["The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.", "Albert Einstein"],
    2: ["In the beginning there was nothing, which exploded.", "Terry Pratchett"],
    3: ["Photons have mass? I didn’t even know they were Catholic.", "Woody Allen"],
    4: ["Physics isn't the most important thing. Love is.", "Richard Feynman"],
    5: ["Not only is the Universe stranger than we think, it is stranger than we can think.", "Werner Heisenberg"]
};
var max = 5;
var min = 1;

function getQuote() {

    var number = Math.floor(Math.random() * (max - min + 1)) + min
    var quote = quotes[number][0];
    var speaker = quotes[number][1];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = speaker;
    document.getElementById("tweet").setAttribute("data-text", "text");
    //text
}
