"use strict";
/*Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Christoph Kocheise
Matrikelnummer: 267341
Datum: 05.11.22
Quellen: Dennis Grützmacher
*/
var A04_ShoppingHelper;
(function (A04_ShoppingHelper) {
    A04_ShoppingHelper.shoppingList = {
        Liste: [
            {
                product: "Schupfnudeln",
                quantity: 2,
                comment: "Für Krautnudeln",
                inCart: false,
                bought: false,
                lastPurchase: "04.11.2022"
            },
            {
                product: "Klopapier",
                quantity: 3,
                comment: "Falls der Lockdown kommt.",
                inCart: false,
                bought: false,
                lastPurchase: "04.11.2022"
            },
            {
                product: "Waffeln",
                quantity: 1,
                comment: "Lecker",
                inCart: false,
                bought: false,
                lastPurchase: "02.11.2022"
            }
        ]
    };
})(A04_ShoppingHelper || (A04_ShoppingHelper = {}));
//# sourceMappingURL=Data.js.map