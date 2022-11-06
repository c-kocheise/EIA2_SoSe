/*Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Christoph Kocheise
Matrikelnummer: 267341
Datum: 05.11.22
Quellen: Dennis Grützmacher
*/

namespace A04_ShoppingHelper
{
    interface ShoppingItem
    {
        product: string;
        quantity: number;
        comment: string;
        inCart: boolean;
        bought: boolean;
        lastPurchase: string;
    }
    export interface ShoppingList
    {
        [name: string]: ShoppingItem[];
    }
    export let shoppingList: ShoppingList = 
    {
        Liste: 
        [
            {
                product: "Hundefutter",
                quantity: 2,
                comment: "Weichfutter für den Wuffel.",
                inCart: false,
                bought: false,
                lastPurchase: "05.11.2022"
            },
            {
                product: "Salat",
                quantity: 1,
                comment: "Feld- oder Eisebergsalat.",
                inCart: false,
                bought: false,
                lastPurchase: "02.11.2022"
            },
            {
                product: "Popcorn",
                quantity: 4,
                comment: "2 x salzig, 2 x süß, für den Filmabend",
                inCart: false,
                bought: false,
                lastPurchase: "01.11.2022"
            }
        ]
    };
}