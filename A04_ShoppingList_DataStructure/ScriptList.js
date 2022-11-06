"use strict";
/*Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Christoph Kocheise
Matrikelnummer: 267341
Datum: 05.11.22
Quellen: Dennis Grützmacher
*/
var A04_ShoppingHelper;
(function (A04_ShoppingHelper) {
    let newItemPanel = document.getElementById("new_item_panel");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.getElementById("add_newItem").addEventListener("click", showNewItemArea);
        document.getElementById("Add_newItem_button").addEventListener("click", addNewItem);
        A04_ShoppingHelper.generateContent(A04_ShoppingHelper.shoppingList);
    }
    function showNewItemArea() {
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    function addNewItem() {
        let newFormInput = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        console.log(newInputData.get("product"));
        console.log(newInputData.get("quantity"));
        console.log(newInputData.get("comment"));
        if (newInputData.get("product") == "" || newInputData.get("quantity") < 1) {
            return;
        }
        A04_ShoppingHelper.destroyContent(A04_ShoppingHelper.shoppingList);
        let currentDate = new Date();
        let correctDate = currentDate.getDate() + "." + currentDate.getMonth() + "." + currentDate.getFullYear();
        let newItem = {
            product: String(newInputData.get("product")),
            quantity: parseInt(newInputData.get("quantity")),
            comment: String(newInputData.get("comment")),
            inCart: false,
            bought: false,
            lastPurchase: correctDate
        };
        A04_ShoppingHelper.shoppingList.Liste.push(newItem);
        A04_ShoppingHelper.generateContent(A04_ShoppingHelper.shoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
})(A04_ShoppingHelper || (A04_ShoppingHelper = {}));
//# sourceMappingURL=ScriptList.js.map