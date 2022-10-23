/*Aufgabe: L02_EventInspector
Name: Christoph Kocheise
Matrikelnummer: 267341
Datum: 23.10.22
Quellen: Dennis Grützmacher
*/
namespace A02_EventInspector {

let xPosition: number;
let yPosition: number;
let div0: HTMLDivElement = <HTMLDivElement> document.querySelector(".div0");
let div1: HTMLDivElement = <HTMLDivElement> document.querySelector(".div1");
// <HTMLDivElement> ist für Fehleranzeige, Wenn div Element null sein kann, man sich aber sicher ist, dass es existiert
let button1: HTMLButtonElement = <HTMLButtonElement> document.querySelector("button1");
let infoBox: HTMLSpanElement = <HTMLSpanElement> document.querySelector("span1");
window.addEventListener("load", handleLoad); 


function handleLoad (): void{
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    div0.addEventListener("click", logInfo);
    div0.addEventListener("keyup", logInfo);
    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    button1.addEventListener("click", triggerCustomEvent);
    document.addEventListener("customEvent", catchCustomEvent);
}

function setInfoBox(_event: MouseEvent): void
{
    xPosition = _event.x;
    yPosition = _event.y;
    infoBox.innerHTML = "  x Position: " + xPosition + " px <br>   y Position: " + yPosition + " px <br>   Target: " + _event.target;
    infoBox.style.left = _event.pageX + 10 + "px";
    infoBox.style.top = _event.pageY + 10 + "px";
}

function logInfo(_event: Event): void
{
    console.log("Current Target:" + _event.currentTarget);
    console.log("Target: " + _event.target);
    console.log("Event-Phase: " + _event.eventPhase);
    console.log("Event-Type: " + _event.type);
    console.log(_event);
}

function triggerCustomEvent(_event: Event): void
{
    let newCustomEvent:CustomEvent = new CustomEvent("customEvent", {bubbles: true});
    button1.dispatchEvent(newCustomEvent);
}

function catchCustomEvent(_event: CustomEvent): void 
{
    console.log("CustomEvent durch Klick auf Button ausgelöst, von Document abgefangen.");
    console.log("Current Target:" + _event.currentTarget);
    console.log("Target: " + _event.target);
    console.log("Event-Phase: " + _event.eventPhase);
    console.log("Event-Type: " + _event.type);
    console.log(_event);
}
}