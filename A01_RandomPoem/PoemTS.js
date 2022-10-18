"use strict";
var A01_Poem;
(function (A01_Poem) {
    let subjects = ["Harry", "Hermine", "Ron", "Dumbledore", "Snape"];
    let predicates = ["dances", "cries", "laughs", "talks", "performs"];
    let objects = ["with Hagrid.", "in Hogsmeade.", "in the great hall.", "with the headless Nick.", "against the dark arts."];
    // console.log(subjects);
    // console.log(predicates);
    // console.log(objects);
    for (let index = subjects.length; index >= 1; index--) {
        // console.log(index);
        let versAusgabe = getVerse(subjects, predicates, objects);
        console.log(versAusgabe);
    }
    function getVerse(_subjects, _predicates, _objects) {
        // console.log("Hallo ich bin die Funktion");
        let randomNumber1 = Math.floor(Math.random() * _subjects.length);
        let randomNumber2 = Math.floor(Math.random() * _predicates.length);
        let randomNumber3 = Math.floor(Math.random() * _objects.length);
        // console.log(randomNumber);
        let randomSubject = _subjects.splice(randomNumber1, 1);
        let randomPredicate = _predicates.splice(randomNumber2, 1);
        let randomObject = _objects.splice(randomNumber3, 1);
        let vers = randomSubject[0] + " " + randomPredicate[0] + " " + randomObject[0];
        //Durch Splice wurde ein Wort aus dem Array Herausgeschnitten, dadurch wird dieses Wort aus dem Array herausgenommen.
        return vers;
    }
})(A01_Poem || (A01_Poem = {}));
//# sourceMappingURL=PoemTS.js.map