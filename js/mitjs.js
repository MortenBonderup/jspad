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

function danErstatningsliste(jshtml, erstatningsliste) {
    const delTekst = jshtml.split('<div>');
    const txtElem = [];
    let bemPlacering = -1;
    let divPlacering = -1;
    let brPlacering = -1;

    for (let i = 0; i < delTekst.length; i++) {

        if (delTekst[i].indexOf('//') !== -1) {
            bemPlacering = delTekst[i].indexOf('//');
            divPlacering = delTekst[i].indexOf('</div>');
            brPlacering = delTekst[i].indexOf('<br>');
            
            if (divPlacering === -1 && brPlacering === -1) {
                txtElem.push(delTekst[i].substr(bemPlacering, delTekst[i].length - bemPlacering));
            } else if (divPlacering !== -1 && brPlacering === -1) {
                txtElem.push(delTekst[i].substr(bemPlacering, delTekst[i].length - (6 + bemPlacering)));
            } else if (divPlacering !== -1 && brPlacering !== -1) {
                txtElem.push(delTekst[i].substr(bemPlacering, delTekst[i].length - (10 + bemPlacering)));
            }

        }
        alert(delTekst[i]);
    }
    return txtElem;
}

function skafAntalKodelinjer(jshtml, js, separator) {
    const linjer = jshtml.split(separator);
    if (js.trim().length > 0) {
        return linjer.length;
    } else {
        return 0;
    }
}

function erstatFraListe(js, erstatningsliste) {
    let slutres = js;
    const elseStr = /else/gi;

    for (let i = 0; i < erstatningsliste.length; i++) {
        slutres = slutres.replace(erstatningsliste[i], "/* " + erstatningsliste[i] + " */");
    }

    slutres = slutres.replace(elseStr, "else "); // Dette skal ændres, da der også ændres i alm. tekst.
    return slutres;
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

function injectJs(jshtml, js, omraadeliste, antalkodelinjer) {

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
        let scripttxt = 'var fejl = false;';
        scripttxt += 'try {';
        scripttxt += js;
        scripttxt += '} catch(err) { ';
        scripttxt += 'fejl=true;';
        scripttxt += 'var div = document.getElementById("problemomraade");';
        scripttxt += 'div.innerHTML += "<p>"+err+"</p>"; }';
        scripttxt += 'finally {';
        scripttxt += 'if (!fejl) {';
        scripttxt += 'var div = document.getElementById("documentwrite");';
        scripttxt += 'div.innerHTML += "<span>' + antalkodelinjer + ' kodelinje(r) udført med succes!</span>";';
        scripttxt += '}}';
        myscript.textContent = scripttxt;
        iFrameBody.appendChild(myscript);

    });
}

document.addEventListener('click', function (event) {
    let omraadeliste = ["outputomraade", "konsolomraade"];
    const frameObj = document.getElementById("redigeringsomraade");

    const eksempel = '<div>const medarbejdere = {</div><div>"Ib": 30000,</div><div>"Jens": 25000,</div><div>"Malene": 37000,</div><div>"Gitte": 23000</div><div>};</div><div><br></div><div>function loensum() {</div><div>let sum=0;</div><div>for (let maanedsloen of Object.values(medarbejdere)) {</div><div>	sum+=maanedsloen;</div><div>}</div><div>return sum;</div><div>}</div><div><br></div><div>function antalmedarb() {</div><div>	return Object.keys(medarbejdere).length;</div><div>}</div><div><br></div><div>function navneliste() {</div><div>let liste="";</div><div>for (let navn of Object.keys(medarbejdere)) {</div><div>	liste+=navn+" ";</div><div>}</div><div>return liste;</div><div>}</div><div><br></div><div>console.log("Information fra personaleafdelingen");</div><div>console.log("-----------------------------------");</div><div>console.log("Der er "+antalmedarb() +" medarbejdere, som i alt får ");</div><div>console.log("kr "+loensum()+" om måneden.");</div><div>console.log("Navneliste: "+navneliste());</div>';

    if (event.target.classList.contains('execJs')) {
        let erstatningsliste = [];
        const frameContent = frameObj.contentWindow.document.body.textContent;
        const frameHTMLContent = frameObj.contentWindow.document.body.innerHTML;
        const antalKodelinjer = skafAntalKodelinjer(frameHTMLContent, frameContent, '</div>');

        erstatningsliste = danErstatningsliste(frameHTMLContent, erstatningsliste);
        //alert(erstatningsliste);

        fjernIndhold();

        if (derErDialog(frameContent)) {
            const iFrameKonsol = window.frames["konsolomraade"].document.getElementById("konsol");
            iFrameKonsol.innerHTML = "Når du bruger JavaScript dialogbokse i dit script (alert, confirm eller prompt), er konsolvinduet <u>ikke</u> aktivt.<br><br>Du finder resultatet i resultatvinduet herunder.";
            omraadeliste = ["outputomraade"];
            injectJs(frameHTMLContent, erstatFraListe(erstatWrite(erstatConsoleLog(frameContent)), erstatningsliste), omraadeliste, antalKodelinjer);
        } else {
            injectJs(frameHTMLContent, erstatFraListe(erstatWrite(frameContent), erstatningsliste), omraadeliste, antalKodelinjer);
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

    redigeringsomraade.focus();

}, false);

window.addEventListener("load", function (event) {
    redigeringsomraade.document.designMode = "On";
    redigeringsomraade.focus();
});