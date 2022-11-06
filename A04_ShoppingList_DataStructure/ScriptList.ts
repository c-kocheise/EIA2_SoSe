/*Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Christoph Kocheise
Matrikelnummer: 267341
Datum: 05.11.22
Quellen: Dennis Grützmacher
*/

namespace A04_ShoppingHelper
{
    
    let newItemPanel: HTMLElement = document.getElementById("new_item_panel");
    window.addEventListener("load", handleLoad);
    function handleLoad(): void
    {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem); 
        generateContent(shoppingList); 
    }
    function showNewItemArea(): void 
    {        
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    function addNewItem(): void
    {
        
        let newFormInput: HTMLElement = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        console.log(newInputData.get("product"));
        console.log(newInputData.get("quantity"));
        console.log(newInputData.get("comment"));
        if(newInputData.get("product") == "" || newInputData.get("quantity") < 1)
        {
            return;
        }
        destroyContent(shoppingList);
        let currentDate: Date = new Date();
        let correctDate: string = currentDate.getDate() + "." + currentDate.getMonth() + "." + currentDate.getFullYear();
        let newItem: ShoppingItem =
        {
            product: String(newInputData.get("product")),
            quantity: parseInt(newInputData.get("quantity")),
            comment: String(newInputData.get("comment")),
            inCart: false,
            bought: false,
            lastPurchase: correctDate
        };
        shoppingList.Liste.push(newItem);
        generateContent(shoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
}    