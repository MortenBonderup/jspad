"use strict";

function valgteEksempel(eksempelIndeks) {
    const eksempelListe = ['','// *** Variabler eksempler ***\n\nconsole.log("--- Eksempel 1: var ---");\nvar antalMedlemr = 100;\nvar klubNavn = "Klub Fantastic";\nconsole.log(klubNavn + " har " + antalMedlemr + " medlemmer.");\n\nconsole.log("--- Eksempel 2: let ---");\nlet antalBrugr = 123;\nlet bassinNavn = "Svømmeklubben Plask";\nconsole.log(bassinNavn + " har " + antalBrugr + " brugere.");\n\nconsole.log("--- Ændringer til variabler ---");\nantalMedlemr = antalMedlemr + 10;\nbassinNavn = "Svømmeklubben Spring";\nconsole.log(klubNavn + " fik 10 nye medlemmer og har nu "+antalMedlemr+".");\nconsole.log("Svømmeklubben skiftede navn til "+bassinNavn+".");','// *** Konstanter eksempler ***\n\nconst navn = "Maria";\nconst skattePct = 45;\nlet indkomstKr = 15000;\nlet skat = (indkomstKr*skattePct)/100;\n\nconsole.log(navn + " skal betale kr. " + skat + " i skat.");\n\n// Det er tilladt at ændre en variabels værdi\n// under programafvikling, fx\n\nindkomstKr = 20000;\n\n// Det er ikke tilladt at ændre en konstants\n// værdi under programafviklingen, fx\n\n// skattePct = 39;\n\n// Fjern // fra forrige linje og du vil\n// få en JavaScript fejl.','// *** Arrays eksempler ***\n\nconsole.log("--- Eksempel 1: Tekst array ---");\nlet navneListe = ["Jens","Ib","Anna","Maria","Hans","Julie"];\n\nconsole.log("Første navn på listen er: "+navneListe[0]);\nconsole.log("Sidste navn på listen er: "+navneListe[5]);\nconsole.log("Antal navne på navnelisten: "+navneListe.length);\n\nnavneListe.push("Morten");\nconsole.log("Sidste navn på listen er nu : "+navneListe[6]);\nconsole.log("Antal navne på navnelisten: "+navneListe.length);\n\nconsole.log("--- Eksempel 2: Numerisk array ---");\nlet salgKr = new Array(2300,5400,7300);\nconsole.log("Det gennemsnitlige salg for årets første tre måneder var: ");\nconsole.log("kr. "+(salgKr[0]+salgKr[1]+salgKr[2])/salgKr.length);\n','// *** Selektions (if-else) eksempler ***\n\nconsole.log("--- Eksempel 1: if ---");\nconst bonusPct = 5;\nlet salgJanuar = 10000;\nlet bonusKr = 0;\n\nif (salgJanuar > 9999) {\n\tbonusKr = (salgJanuar * bonusPct) / 100;\n}\n\nconsole.log("Der udbetales kr. " + bonusKr + " i bonus.");\n\nconsole.log("--- Eksempel 2: if-else ---");\nlet medlemAktiv = false;\n\nif (medlemAktiv) {\n\tconsole.log("Medlemmet er aktivt.");\n}\nelse {\n\tconsole.log("Medlemmet er ikke aktivt.");\n}\n','// *** Repetitions (for/while) eksempler ***\n\nconst navneListe = ["Jens","Ib","Anna","Maria","Hans","Julie"];\n\nconsole.log("--- Eksempel 1: for ---");\nfor (var i=0;i<navneListe.length;i++) {\n\tconsole.log(navneListe[i]);\n}\n\nconsole.log("--- Eksempel 2: forEach ---");\nnavneListe.forEach(function (navn) {\n\tconsole.log(navn);\n})\n\nconsole.log("--- Eksempel 3: while ---");\nvar j=0;\nwhile (j<navneListe.length) {\n\tconsole.log(navneListe[j]);\n\tj++;\n}\n\nconsole.log("--- Eksempel 4: do-while ---");\nvar k=0;\ndo {\n\tconsole.log(navneListe[k]);\n\tk++;\n} while (k<navneListe.length);','// *** Funktion med/uden parametre eksempler ***\n\nconsole.log("--- Eksempel 1: Uden parametre ---");\nfunction visTekst() {\n\tconsole.log("Denne funktioner viser denne tekst hver gang");\n}\n\nvisTekst();\n\nconsole.log("--- Eksempel 2: Med parameter ---");\nfunction visTilsendteTekst(tekst) {\n\tconsole.log("Viser den tekst som sendes som parameter:");\n\tconsole.log(tekst);\n}\n\nvisTilsendteTekst("Hej med dig");\nvisTilsendteTekst("Jeg hedder Morten");\n\nconsole.log("--- Eksempel 3: Med parametre og returværdi ---");\nfunction beregnTotal(tal1,tal2) {\n\treturn tal1+tal2;\n}\n\nlet total = beregnTotal(10,15);\nconsole.log("Total er lig med " + total);\n','// *** Scope ***\n\nfunction scopeTest(param1) {\n\tlet fvar = 100;\n\tconsole.log("Jeg kender parameter: " + param1);\n\tconsole.log("Jeg kender global variabel: " + gvar);\n}\n\nlet gvar = 200; // Variabel udenfor funktion\n\nscopeTest(300);\nconsole.log("Jeg kender ikke funktionsvariablen: "+fvar);\nconsole.log("Jeg kender ikke parameter: "+param1);\n'];
    
    return eksempelListe[eksempelIndeks];
}


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
    const res = js.replace(writeln, "documentwrite.insertAdjacentHTML('beforeend',");
    const slutres = res.replace(write, "documentwrite.insertAdjacentHTML('beforeend',");
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
    const date = new Date();
    let jsLinjer;

    if (js.trim() === '') {
        jsLinjer = 0;
    } else {
        jsLinjer = js.split(/\r*\n/).length;
    }

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
        scripttxt += 'div.innerHTML += "<span>' + jsLinjer + ' kodelinje(r) udført med succes! (' + date.getHours() + ":" + mwlz(date, "min") + ":" + mwlz(date, "sek") + ')</span>";';
        scripttxt += '}}';
        myscript.textContent = scripttxt;
        iFrameBody.appendChild(myscript);

    });
}

// -------------- H O V E D P R O G R A M ------------------

document.addEventListener('click', function (event) {
    let omraadeliste = ["outputomraade", "konsolomraade"];
    const frameObj = document.getElementById("redigeringsomraade");

    if (event.target.classList.contains('execJs')) {
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
        document.getElementById("redigeringsomraade").focus();
        document.getElementById("redigeringsomraade").setSelectionRange(0,0); 
        document.getElementById("redigeringsomraade").scrollTop = 0;
    }

    if (event.target.classList.contains('rydkonsol')) {
        window.frames['konsolomraade'].location.replace("konsol.html");
    }

    if (event.target.classList.contains('rydresultat')) {
        window.frames['outputomraade'].location.replace("output.html");
    }

}, false);

window.addEventListener("load", function (event) {
    document.getElementById("redigeringsomraade").style.fontFamily = "Lucida Console, Monaco, monospace";
    document.getElementById("redigeringsomraade").style.fontSize = "small";
    document.getElementById("redigeringsomraade").focus();
},false);


document.getElementById("hentEksempel").addEventListener("change", function () {
    const eksempelIndeks=document.getElementById("hentEksempel").value;
    if (eksempelIndeks>-1) {
        if (document.getElementById("redigeringsomraade").value.trim()!='') {
            const ok = confirm("Overskriv eksisterende JavaScript ?");

            if (ok) {
                fjernIndhold();
                document.getElementById("redigeringsomraade").value = valgteEksempel(eksempelIndeks);
            }
        }
        else {
                fjernIndhold();
                document.getElementById("redigeringsomraade").value = valgteEksempel(eksempelIndeks);
        }
        document.getElementById("hentEksempel").selectedIndex="0";
    }
    document.getElementById("redigeringsomraade").focus();
    document.getElementById("redigeringsomraade").setSelectionRange(0,0); 
    document.getElementById("redigeringsomraade").scrollTop = 0;

},false);


document.getElementById("redigeringsomraade").addEventListener('keydown', function (e) {
    if (e.keyCode === 9) {
        const start = this.selectionStart;
        const slut = this.selectionEnd;

        const target = e.target;
        const indhold = target.value;


        target.value = indhold.substring(0, start)
                + "\t"
                + indhold.substring(slut);

        this.selectionStart = this.selectionEnd = start + 1;

        e.preventDefault();
    }
}, false);