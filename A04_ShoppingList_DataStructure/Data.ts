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
}