"use strict";

function derErDialog(js) {

    if (js.search(/alert/gi) > -1) {
        return true;
    } else if (js.search(/confirm/gi) > -1) {
        return true;
    } else if (js.search(/prompt/gi) > -1) {
        return true;
    }

    return false;
}

function erstatConsoleLog(js) {
    const consolelog = /console.log\(/gi;
    const slutres = js.replace(consolelog, "documentwrite.insertAdjacentText('beforeend',");
    return slutres;
}

function erstatWrite(js) {
    const writeln = /document.writeln\(/gi;
    const write = /document.write\(/gi;

    const res = js.replace(writeln, "documentwrite.insertAdjacentText('beforeend',");
    const slutres = res.replace(write, "documentwrite.insertAdjacentText('beforeend',");
    return slutres;
}

function fjernIndhold() {
    const iFrameProblem = window.frames["outputomraade"].document.getElementById("problemomraade");
    iFrameProblem.innerHTML = "";

    const iFrameResultat = window.frames["outputomraade"].document.getElementById("documentwrite");
    iFrameResultat.innerHTML = "";

    const iFrameKonsol = window.frames["konsolomraade"].document.getElementById("konsol");
    iFrameKonsol.innerHTML = "";

    const iFrameKonsolDocW = window.frames["konsolomraade"].document.getElementById("documentwrite");
    iFrameKonsolDocW.innerHTML = "";
}

function injectJs(js, omraadeliste) {
    //const omraadeliste = ["outputomraade", "konsolomraade"];

    omraadeliste.forEach(function (omraade) {

        // ---slet eksisterende script div---
        const iFrame = document.getElementById(omraade);
        const innerDoc = iFrame.contentDocument || iFrame.contentWindow.document;
        const element = innerDoc.getElementById("scriptomraade");
        element.parentNode.removeChild(element);
        // slet eksisterende script div slut

        const iFrameBody = iFrame.contentWindow.document.body;
        const myscript = document.createElement('script');
        myscript.setAttribute("id", "scriptomraade");
        var scripttxt = 'var fejl = false;';
        scripttxt += 'try {';
        scripttxt += js;
        scripttxt += '} catch(err) { ';
        scripttxt += 'fejl=true;';
        scripttxt += 'var div = document.getElementById("problemomraade");';
        scripttxt += 'div.innerHTML += "<p>"+err+"</p>"; }';
        scripttxt += 'finally {';
        scripttxt += 'if (!fejl) {';
        scripttxt += 'var div = document.getElementById("documentwrite");';
        scripttxt += 'div.innerHTML += "<span>Instruktioner udført med succes!</span>";';
        scripttxt += '}}';
        myscript.textContent = scripttxt;
        iFrameBody.appendChild(myscript);

    });
}

document.addEventListener('click', function (event) {
    var omraadeliste = ["outputomraade", "konsolomraade"];
    const frameObj = document.getElementById("redigeringsomraade");
    const eksempel = 'var a=5;<br>console.log(a);';

    if (event.target.classList.contains('execJs')) {
        const frameContent = frameObj.contentWindow.document.body.textContent;
        fjernIndhold();

        if (derErDialog(frameContent)) {
            const iFrameKonsol = window.frames["konsolomraade"].document.getElementById("konsol");
            iFrameKonsol.innerHTML = "Når du bruger JavaScript dialogbokse i dit script (alert, confirm eller prompt), er konsolvinduet IKKE aktivt.";
            omraadeliste = ["outputomraade"];
            injectJs(erstatWrite(erstatConsoleLog(frameContent)), omraadeliste);
        } else {
            injectJs(erstatWrite(frameContent), omraadeliste);
        }
    }

    if (event.target.classList.contains('rydkonsol')) {
        window.frames['konsolomraade'].location.replace("konsol.html");
    }

    if (event.target.classList.contains('rydresultat')) {
        window.frames['outputomraade'].location.replace("output.html");
    }

    if (event.target.classList.contains('hentEksempel')) {
        const ok = confirm("Overskriv eksisterende JavaScript ?");
        if (ok) {
            const iFrameBody = frameObj.contentWindow.document.body;
            iFrameBody.innerHTML = eksempel;
        }
    }

}, false);

window.addEventListener("load", function (event) {
    redigeringsomraade.document.designMode = "On";
    document.getElementById("redigeringsomraade").contentDocument.body.style.fontFamily = "Lucida Console, Monaco, monospace";
    redigeringsomraade.focus();
});