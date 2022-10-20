"use strict";
var A02_EventInspector;
(function (A02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let div0 = document.querySelector(".div0");
        let div1 = document.querySelector(".div1");
        // <HTMLDivElement> ist für Fehleranzeige, Wenn div Element null sein kann, man sich aber sicher ist, dass es existiert
        document.addEventListener("mousemove", setInfobox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
    }
    function setInfobox() {
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=InspectorTS.js.map