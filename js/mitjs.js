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

function mwlz(dt, enhed)
{
    if (enhed === "min") {
        return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
    }

    if (enhed === "sek") {
        return (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
    }

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
    const date = new Date();
    var jsLinjer;

    if (js.trim() === '') {
        jsLinjer = 0;
    } else {
        jsLinjer = js.split(/\r*\n/).length;
    }

    //console.log(date.getHours() + ":" + mwlz(date) + ":" + date.getSeconds());

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
        scripttxt += '\n';
        scripttxt += js;
        scripttxt += '\n';
        scripttxt += '} catch(err) { ';
        scripttxt += 'fejl=true;';
        scripttxt += 'var div = document.getElementById("problemomraade");';
        scripttxt += 'div.innerHTML += "<p>"+err+"</p>"; }';
        scripttxt += 'finally {';
        scripttxt += 'if (!fejl) {';
        scripttxt += 'var div = document.getElementById("documentwrite");';
        scripttxt += 'div.innerHTML += "<span>' + jsLinjer + ' kodelinje(r) udført med succes! (' + date.getHours() + ":" + mwlz(date,"min") + ":" + mwlz(date,"sek") + ')</span>";';
        scripttxt += '}}';
        myscript.textContent = scripttxt;
        iFrameBody.appendChild(myscript);

    });
}

document.addEventListener('click', function (event) {
    var omraadeliste = ["outputomraade", "konsolomraade"];
    const frameObj = document.getElementById("redigeringsomraade");
    // const eksempel = 'const medarbejdere = {<br>"Ib": 30000,<br>"Jens": 25000,<br>"Malene": 37000,<br>"Gitte": 23000<br>};<br><br>function loensum() {<br>let sum=0;<br>for (let maanedsloen of Object.values(medarbejdere)) {<br>	sum+=maanedsloen;<br>}<br>return sum;<br>}<br><br>function antalmedarb() {<br>	return Object.keys(medarbejdere).length;<br>}<br><br>function navneliste() {<br>let liste="";<br>for (let navn of Object.keys(medarbejdere)) {<br>	liste+=navn+" ";<br>}<br>return liste;<br>}<br><br>console.log("Information fra personaleafdelingen");<br>console.log("-----------------------------------");<br>console.log("Der er "+antalmedarb() +" medarbejdere, som i alt får ");<br>console.log("kr "+loensum()+" om måneden.");<br>console.log("Navneliste: "+navneliste());<br>';

    const eksempel = 'const medarbejdere = {\n"Ib": 30000,\n"Jens": 25000,\n"Malene": 37000,\n"Gitte": 23000\n};\n\nfunction loensum() {\nlet sum=0;\nfor (let maanedsloen of Object.values(medarbejdere)) {\n	sum+=maanedsloen;\n}\nreturn sum;\n}\n\nfunction antalmedarb() {\n	return Object.keys(medarbejdere).length;\n}\n\nfunction navneliste() {\nlet liste="";\nfor (let navn of Object.keys(medarbejdere)) {\n	liste+=navn+" ";\n}\nreturn liste;\n}\n\nconsole.log("Information fra personaleafdelingen");\nconsole.log("-----------------------------------");\nconsole.log("Der er "+antalmedarb() +" medarbejdere, som i alt får ");\nconsole.log("kr "+loensum()+" om måneden.");\nconsole.log("Navneliste: "+navneliste());\n';

    if (event.target.classList.contains('execJs')) {
        //const frameContent = frameObj.contentWindow.document.body.textContent;
        const frameContent = document.getElementById("redigeringsomraade").value;
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
            //const iFrameBody = frameObj.contentWindow.document.body;
            //iFrameBody.innerHTML = eksempel;
            document.getElementById("redigeringsomraade").value = eksempel;

        }
    }

}, false);

window.addEventListener("load", function (event) {
    //redigeringsomraade.document.designMode = "On";
    //document.getElementById("redigeringsomraade").contentDocument.body.style.fontFamily = "Lucida Console, Monaco, monospace";
    //document.getElementById("redigeringsomraade").contentDocument.body.style.fontSize = "small";
    document.getElementById("redigeringsomraade").style.fontFamily = "Lucida Console, Monaco, monospace";
    document.getElementById("redigeringsomraade").style.fontSize = "small";
    redigeringsomraade.focus();
});