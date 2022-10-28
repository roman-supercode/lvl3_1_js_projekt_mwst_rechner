// Mehrwertsteuerrechner
let beiAbzug1 = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
let beiAbzug2 = "Nettobetrag";

let beiAufschlag1 = "Nettobetrag(Preis ohne Mehrwertsteuer) in Euro";
let beiAufschlag2 = "Bruttobetrag (Endpreis)";

const Rechner = () => {
    // Input = Betrageingabe 
    const input = document.getElementById("betragEingabe").valueAsNumber;
    console.log(input);
    // Netto zu Brutto .checked
    const firstCheck = document.getElementById("mwstAufschlagen").checked;
    // Brutto zu Netto .checked
    const secondCheck = document.getElementById("mwstAbziehen").checked;
    // 19% und check
    const mwst19 = Number(document.getElementById("19P").value);
    const mwst19Checked = document.getElementById("19P").checked;
    // 7% und check
    const mwst7 = Number(document.getElementById("7P").value);
    const mwst7Checked = document.getElementById("7P").checked;

    // validation for empty input field
    if (document.getElementById("betragEingabe").value === "") {
        return alert("Gib doch bitte eine Zahl ein");
    }


    if (firstCheck === true && mwst19Checked === true) {
        // Netto zu Brutto
        document.querySelector(".changeThat").innerHTML = beiAufschlag1;
        document.getElementById("changeThis").innerHTML = beiAufschlag2;

        // Berechnung und Ausgabe Mehrwertsteuerbetrag
        const outputMWST = input * mwst19 / 100;
        document.getElementById("mwstBetrag").innerHTML = Math.round(outputMWST * 100) / 100;
        //Berechnung und Ausgabe Bruttobetrag
        const outputBetrag = input + outputMWST;
        return document.getElementById("bruttoBetrag").innerHTML = Math.round(outputBetrag * 100) / 100;

    } else if (firstCheck === true && mwst7Checked === true) {
        // Netto zu Brutto
        document.querySelector(".changeThat").innerHTML = beiAufschlag1;
        document.getElementById("changeThis").innerHTML = beiAufschlag2;

        // Berechnung und Ausgabe Mehrwertsteuerbetrag
        const outputMWST = input * mwst7 / 100;
        document.getElementById("mwstBetrag").innerHTML = Math.round(outputMWST * 100) / 100;
        //Berechnung und Ausgabe Bruttobetrag
        const outputBetrag = input + outputMWST;
        return document.getElementById("bruttoBetrag").innerHTML = Math.round(outputBetrag * 100) / 100;

    } else if (secondCheck === true && mwst19Checked === true) {
        // Brutto zu Netto
        document.querySelector(".changeThat").innerHTML = beiAbzug1;
        document.getElementById("changeThis").innerHTML = beiAbzug2;

        // Berechnung und Ausgabe Mehrwertsteuerbetrag
        const outputMWST = input * mwst19 / 119;
        document.getElementById("mwstBetrag").innerHTML = Math.round(outputMWST * 100) / 100;
        //Berechnung und Ausgabe Nettobetrag
        const outputBetrag = input - outputMWST;
        return document.getElementById("bruttoBetrag").innerHTML = Math.round(outputBetrag * 100) / 100;

    } else if (secondCheck === true && mwst7Checked === true) {
        // Brutto zu Netto
        document.querySelector(".changeThat").innerHTML = beiAbzug1;
        document.getElementById("changeThis").innerHTML = beiAbzug2;

        // Berechnung und Ausgabe Mehrwertsteuerbetrag
        const outputMWST = input * mwst7 / 107;
        document.getElementById("mwstBetrag").innerHTML = Math.round(outputMWST * 100) / 100;
        //Berechnung und Ausgabe Nettobetrag
        const outputBetrag = input - outputMWST;
        return document.getElementById("bruttoBetrag").innerHTML = Math.round(outputBetrag * 100) / 100;

    } else {
        document.getElementById("warnung").innerHTML = "Bitte Auswahl treffen!";
    }

};


