"use strict";
var ShoppingHelper;
(function (ShoppingHelper) {
    window.addEventListener("load", assignListeners);
    function assignListeners() {
        document.getElementById("add_newItem").addEventListener("click", addNewItem);
        for (let i = 1; i < 4; i++) {
            document.getElementById("button_status_item_" + i).addEventListener("click", switchStatusEntry);
            document.getElementById("trash_button_item_" + i).addEventListener("click", logDeleteEntry);
        }
    }
    function addNewItem() {
        console.log("Neues Item wird hinzugefügt.");
    }
    function logDeleteEntry() {
        console.log("Item wird aus er Liste gelöscht");
    }
    function switchStatusEntry() {
        console.log("Status des Items wird durchgewechselt von: Noch offen -> Im Wagen -> Eingekauft, wieder zu Noch Offen");
    }
})(ShoppingHelper || (ShoppingHelper = {}));
//# sourceMappingURL=ShoppingScript.js.map