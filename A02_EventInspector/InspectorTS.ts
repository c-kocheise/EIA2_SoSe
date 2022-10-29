/*Aufgabe: L02_EventInspector
Name: Christoph Kocheise
Matrikelnummer: 267341
Datum: 
*/
namespace A02_EventInspector {
window.addEventListener("load", handleLoad);

function handleLoad (): void {
    let div0: HTMLDivElement = <HTMLDivElement> document.querySelector(".div0");
    let div1: HTMLDivElement = <HTMLDivElement> document.querySelector(".div1");
    // <HTMLDivElement> ist für Fehleranzeige, Wenn div Element null sein kann, man sich aber sicher ist, dass es existiert
    document.addEventListener("mousemove", setInfobox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    div0.addEventListener("click", logInfo);
    div0.addEventListener("keyup", logInfo);
    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
}

function setInfobox (): void {
}
function logInfo (): void {
}
}