namespace A01_Poem {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Dumbledore", "Snape"];
    let predicates: string[] = ["dances", "cries", "laughs", "talks", "performs"];
    let objects: string[] = ["with Hagrid.", "in Hogsmeade.", "in the great hall.", "with the headless Nick.", "against the dark arts."];
    // console.log(subjects);
    // console.log(predicates);
    // console.log(objects);

    for (let index: number = subjects.length; index >= 1; index--) {
        // console.log(index);
        let versAusgabe: string = getVerse(subjects, predicates, objects);
        console.log(versAusgabe);
    }
    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        
        // console.log("Hallo ich bin die Funktion");

        let randomNumber1: number = Math.floor(Math.random() * _subjects.length);
        let randomNumber2: number = Math.floor(Math.random() * _predicates.length);
        let randomNumber3: number = Math.floor(Math.random() * _objects.length);
        // console.log(randomNumber);
        let randomSubject: string[] = _subjects.splice(randomNumber1, 1);
        let randomPredicate: string[] = _predicates.splice(randomNumber2, 1);
        let randomObject: string[] = _objects.splice(randomNumber3, 1);
        let vers: string = randomSubject[0] + " " + randomPredicate[0] + " " + randomObject[0];
        //Durch Splice wurde ein Wort aus dem Array Herausgeschnitten, dadurch wird dieses Wort aus dem Array herausgenommen.
        return vers;
    }

}

