const frameObj = document.getElementById("redigeringsomraade");

function erstatWrite(js) {
    var pattern = /document.writeln\(/gi;
    var res = js.replace(pattern, "documentwrite.insertAdjacentText('beforeend',");
    pattern = /document.write\(/gi;
    var slutres = res.replace(pattern, "documentwrite.insertAdjacentText('beforeend',");
    return slutres;
}

function fjernIndhold() {
    var iFrameProblem = window.frames["outputomraade"].document.getElementById("problemomraade");
    iFrameProblem.innerHTML = "";

    var iFrameResultat = window.frames["outputomraade"].document.getElementById("documentwrite");
    iFrameResultat.innerHTML = "";

    var iFrameKonsol = window.frames["konsolomraade"].document.getElementById("konsol");
    iFrameKonsol.innerHTML = "";

    var iFrameKonsolDocW = window.frames["konsolomraade"].document.getElementById("documentwrite");
    iFrameKonsolDocW.innerHTML = "";
}

function injectJs(js) {
    const omraadeliste = ["outputomraade", "konsolomraade"];

    omraadeliste.forEach(function (omraade) {

        // ---slet eksisterende script div---
        var iFrame = document.getElementById(omraade);
        var innerDoc = iFrame.contentDocument || iFrame.contentWindow.document;
        var element = innerDoc.getElementById("scriptomraade");
        element.parentNode.removeChild(element);
        // slet eksisterende script div slut

        var iFrameBody = iFrame.contentWindow.document.body;
        var myscript = document.createElement('script');
        myscript.setAttribute("id", "scriptomraade");
        var scripttxt = 'try {';
        scripttxt += js;
        scripttxt += '} catch(err) { ';
        scripttxt += 'var div = document.getElementById("problemomraade");';
        scripttxt += 'div.innerHTML += "<br>"+err; }';
        myscript.textContent = scripttxt;
        iFrameBody.appendChild(myscript);
        
    });
}


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('execJs')) {
        var frameContent = frameObj.contentWindow.document.body.textContent;
        fjernIndhold();
        injectJs(erstatWrite(frameContent));
    }

    if (event.target.classList.contains('rydkonsol')) {
        window.frames['konsolomraade'].location.replace("konsol.html");
    }

    if (event.target.classList.contains('rydresultat')) {
        window.frames['outputomraade'].location.replace("output.html");
    }

}, false);

window.addEventListener("load", function (event) {
    redigeringsomraade.document.designMode = "On";
    document.getElementById("redigeringsomraade").contentDocument.body.style.fontFamily = "Lucida Console, Monaco, monospace";
    redigeringsomraade.focus();
});


