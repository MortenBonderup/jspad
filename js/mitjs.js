"use strict";

function valgteEksempel(eksempelIndeks) {
    var eksempelListe;
    if (appSprog==="Dansk") {
    eksempelListe = ['','// *** Variabler eksempler ***\n\nconsole.log("--- Eksempel 1: var ---");\nvar antalMedlemr = 100;\nvar klubNavn = "Klub Fantastic";\nconsole.log(klubNavn + " har " + antalMedlemr + " medlemmer.");\n\nconsole.log("--- Eksempel 2: let ---");\nlet antalBrugr = 123;\nlet bassinNavn = "Svømmeklubben Plask";\nconsole.log(bassinNavn + " har " + antalBrugr + " brugere.");\n\nconsole.log("--- Ændringer til variabler ---");\nantalMedlemr = antalMedlemr + 10;\nbassinNavn = "Svømmeklubben Spring";\nconsole.log(klubNavn + " fik 10 nye medlemmer og har nu "+antalMedlemr+".");\nconsole.log("Svømmeklubben skiftede navn til "+bassinNavn+".");','// *** Konstanter eksempler ***\n\nconst navn = "Maria";\nconst skattePct = 45;\nlet indkomstKr = 15000;\nlet skat = (indkomstKr*skattePct)/100;\n\nconsole.log(navn + " skal betale kr. " + skat + " i skat.");\n\n// Det er tilladt at ændre en variabels værdi\n// under programafvikling, fx\n\nindkomstKr = 20000;\n\n// Det er ikke tilladt at ændre en konstants\n// værdi under programafviklingen, fx\n\n// skattePct = 39;\n\n// Fjern // fra forrige linje og du vil\n// få en JavaScript fejl.','// *** Arrays eksempler ***\n\nconsole.log("--- Eksempel 1: Tekst array ---");\nlet navneListe = ["Jens","Ib","Anna","Maria","Hans","Julie"];\n\nconsole.log("Første navn på listen er: "+navneListe[0]);\nconsole.log("Sidste navn på listen er: "+navneListe[5]);\nconsole.log("Antal navne på navnelisten: "+navneListe.length);\n\nnavneListe.push("Morten");\nconsole.log("Sidste navn på listen er nu : "+navneListe[6]);\nconsole.log("Antal navne på navnelisten: "+navneListe.length);\n\nconsole.log("--- Eksempel 2: Numerisk array ---");\nlet salgKr = new Array(2300,5400,7300);\nconsole.log("Det gennemsnitlige salg for årets første tre måneder var: ");\nconsole.log("kr. "+(salgKr[0]+salgKr[1]+salgKr[2])/salgKr.length);\n','// *** Selektions (if-else) eksempler ***\n\nconsole.log("--- Eksempel 1: if ---");\nconst bonusPct = 5;\nlet salgJanuar = 10000;\nlet bonusKr = 0;\n\nif (salgJanuar > 9999) {\n\tbonusKr = (salgJanuar * bonusPct) / 100;\n}\n\nconsole.log("Der udbetales kr. " + bonusKr + " i bonus.");\n\nconsole.log("--- Eksempel 2: if-else ---");\nlet medlemAktiv = false;\n\nif (medlemAktiv) {\n\tconsole.log("Medlemmet er aktivt.");\n}\nelse {\n\tconsole.log("Medlemmet er ikke aktivt.");\n}\n','// *** Repetitions (for/while) eksempler ***\n\nconst navneListe = ["Jens","Ib","Anna","Maria","Hans","Julie"];\n\nconsole.log("--- Eksempel 1: for ---");\nfor (var i=0;i<navneListe.length;i++) {\n\tconsole.log(navneListe[i]);\n}\n\nconsole.log("--- Eksempel 2: forEach ---");\nnavneListe.forEach(function (navn) {\n\tconsole.log(navn);\n})\n\nconsole.log("--- Eksempel 3: while ---");\nvar j=0;\nwhile (j<navneListe.length) {\n\tconsole.log(navneListe[j]);\n\tj++;\n}\n\nconsole.log("--- Eksempel 4: do-while ---");\nvar k=0;\ndo {\n\tconsole.log(navneListe[k]);\n\tk++;\n} while (k<navneListe.length);','// *** Funktion med/uden parametre eksempler ***\n\nconsole.log("--- Eksempel 1: Uden parametre ---");\nfunction visTekst() {\n\tconsole.log("Denne funktioner viser denne tekst hver gang");\n}\n\nvisTekst();\n\nconsole.log("--- Eksempel 2: Med parameter ---");\nfunction visTilsendteTekst(tekst) {\n\tconsole.log("Viser den tekst som sendes som parameter:");\n\tconsole.log(tekst);\n}\n\nvisTilsendteTekst("Hej med dig");\nvisTilsendteTekst("Jeg hedder Morten");\n\nconsole.log("--- Eksempel 3: Med parametre og returværdi ---");\nfunction beregnTotal(tal1,tal2) {\n\treturn tal1+tal2;\n}\n\nlet total = beregnTotal(10,15);\nconsole.log("Total er lig med " + total);\n','// *** Scope ***\n\nfunction scopeTest(param1) {\n\tlet fvar = 100;\n\tconsole.log("Jeg kender parameter: " + param1);\n\tconsole.log("Jeg kender global variabel: " + gvar);\n}\n\nlet gvar = 200; // Variabel udenfor funktion\n\nscopeTest(300);\nconsole.log("Jeg kender ikke funktionsvariablen: "+fvar);\nconsole.log("Jeg kender ikke parameter: "+param1);\n'];
    } else {
    eksempelListe = ['','// *** Variables examples ***\n\nconsole.log("--- Example 1: var ---");\nvar members = 100;\nvar clubName = "Club Fantastic";\nconsole.log(clubName + " has " + members + " members.");\n\nconsole.log("--- Example 2: let ---");\nlet users = 123;\nlet poolName = "The Swimming club Plask";\nconsole.log(poolName + " has " + users + " users.");\n\nconsole.log("--- Variables that changes values ---");\nmembers = members + 10;\npoolName = "Swimming club Spring";\nconsole.log(poolName + " got 10 new memebers and now has "+members+".");\nconsole.log("The swimming club changed its name to "+poolName+".");','// *** Examples with constants ***\n\nconst name = "Maria";\nconst taxrate = 45;\nlet incomeKr = 15000;\nlet tax = (incomeKr*taxrate)/100;\n\nconsole.log(name + " must pay kr. " + tax + " in tax.");\n\n// You can change a variable value\n// during application execution, fx\n\nincomeKr = 20000;\n\n// You can not change the value of a constant\n// during application execution, fx\n\n// taxrate = 39;\n\n// Remove // from the previous line and\n// you will get a JavaScript error.','// *** Examples with arrays ***\n\nconsole.log("--- Example 1: Text array ---");\nlet nameList = ["Jens","Ib","Anna","Maria","Hans","Julie"];\n\nconsole.log("The first name on the list is: "+nameList[0]);\nconsole.log("The last name on the list is: "+nameList[5]);\nconsole.log("Total number of names on the list: "+nameList.length);\n\nnameList.push("Morten");\nconsole.log("The last name on the list is now : "+nameList[6]);\nconsole.log("Total number on the list: "+nameList.length);\n\nconsole.log("--- Example 2: Numeric array ---");\nlet salesKr = new Array(2300,5400,7300);\nconsole.log("Average sale the first three month of the year is: ");\nconsole.log("kr. "+(salesKr[0]+salesKr[1]+salesKr[2])/salesKr.length);\n','// *** Selections (if-else) examples ***\n\nconsole.log("--- Example 1: if ---");\nconst bonusPct = 5;\nlet salesJanuar = 10000;\nlet bonusKr = 0;\n\nif (salesJanuar > 9999) {\n\tbonusKr = (salesJanuar * bonusPct) / 100;\n}\n\nconsole.log("Payment is kr. " + bonusKr + " as bonus.");\n\nconsole.log("--- Example 2: if-else ---");\nlet memberActiv = false;\n\nif (memberActiv) {\n\tconsole.log("The member is active.");\n}\nelse {\n\tconsole.log("The member is NOT active.");\n}\n','// *** Repetitions (for/while) examples ***\n\nconst nameList = ["Jens","Ib","Anna","Maria","Hans","Julie"];\n\nconsole.log("--- Example 1: for ---");\nfor (var i=0;i<nameList.length;i++) {\n\tconsole.log(nameList[i]);\n}\n\nconsole.log("--- Example 2: forEach ---");\nnameList.forEach(function (name) {\n\tconsole.log(name);\n})\n\nconsole.log("--- Example 3: while ---");\nvar j=0;\nwhile (j<nameList.length) {\n\tconsole.log(nameList[j]);\n\tj++;\n}\n\nconsole.log("--- Example 4: do-while ---");\nvar k=0;\ndo {\n\tconsole.log(nameList[k]);\n\tk++;\n} while (k<nameList.length);','// *** Function with/without parameters examples ***\n\nconsole.log("--- Example 1: Without parameters ---");\nfunction showText() {\n\tconsole.log("This funtion shows the text every time.");\n}\n\nshowText();\n\nconsole.log("--- Example 2: With parameter ---");\nfunction showAssignedText(text) {\n\tconsole.log("Show the text send as parameter:");\n\tconsole.log(text);\n}\n\nshowAssignedText("Hey you!");\nshowAssignedText("Hi, my name is Morten.");\n\nconsole.log("--- Example 3: With parameters and returning a value ---");\nfunction calculateSum(number1,number2) {\n\treturn number1+number2;\n}\n\nlet total = calculateSum(10,15);\nconsole.log("Total is equal to " + total);\n','// *** Scope ***\n\nfunction scopeTest(param1) {\n\tlet fvar = 100;\n\tconsole.log("I know this parameter value: " + param1);\n\tconsole.log("I know the value of this global variable: " + gvar);\n}\n\nlet gvar = 200; // Variable outside function\n\nscopeTest(300);\nconsole.log("I do not know the value of the variable inside the function: "+fvar);\nconsole.log("I do not know the value of the parameter: "+param1);\n'];
        
    }    
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
        if (appSprog==="Dansk") {
        scripttxt += 'div.innerHTML += "<span>' + jsLinjer + ' kodelinje(r) udført med succes! (' + date.getHours() + ":" + mwlz(date, "min") + ":" + mwlz(date, "sek") + ')</span>";'; } else {
        scripttxt += 'div.innerHTML += "<span>' + jsLinjer + ' line(s) of code successfully executed! (' + date.getHours() + ":" + mwlz(date, "min") + ":" + mwlz(date, "sek") + ')</span>";';
        }
        scripttxt += '}}';
        myscript.textContent = scripttxt;
        iFrameBody.appendChild(myscript);

    });
}

function skiftSprog(sprog) {
    if (sprog==="Dansk") {
        document.getElementById("dan_lang_link").style.background="steelblue";
        document.getElementById("dan_lang_link").style.color="white";  
        document.getElementById("eng_lang_link").style.background="gainsboro";
        document.getElementById("eng_lang_link").style.color="black";
        document.getElementById("rydresultat_knap").innerHTML='&nbsp;<i class="fas fa-eraser"></i>&nbsp;Ryd resultatvindue&nbsp;';
        document.getElementById("rydkonsol_knap").innerHTML='&nbsp;<i class="fas fa-eraser"></i>&nbsp;Ryd konsolvindue&nbsp;';
        document.getElementById("run_knap").innerHTML='&nbsp;<i class="far fa-play-circle"></i>&nbsp;Kør&nbsp;';
        document.getElementById("konsol_text").innerText="Konsol";
        document.getElementById("resultat_text").innerText="Resultat";
        document.getElementById("hentEksempel").innerHTML='<option value="-1">Indlæs eksempel...</option><option value="0">Ryd alle vinduer</option><optgroup label="Arbejdslager"><option value="1">Variabler</option><option value="2">Konstanter</option><option value="3">Arrays</option></optgroup><optgroup label="Kontrolstrukturer"><option value="4">Selektion (if-else)</option><option value="5">Repetition (for/while)</option></optgroup><optgroup label="Funktioner"><option value="6">Med/uden parametre</option><option value="7">Scope</option></optgroup>';
          return "Dansk";
    } else {
        document.getElementById("eng_lang_link").style.background="steelblue";
        document.getElementById("eng_lang_link").style.color="white";
        document.getElementById("dan_lang_link").style.background="gainsboro";
        document.getElementById("dan_lang_link").style.color="black";
        document.getElementById("rydresultat_knap").innerHTML='&nbsp;<i class="fas fa-eraser"></i>&nbsp;Clear result window&nbsp;';
        document.getElementById("rydkonsol_knap").innerHTML='&nbsp;<i class="fas fa-eraser"></i>&nbsp;Clear console window&nbsp;';
        document.getElementById("run_knap").innerHTML='&nbsp;<i class="far fa-play-circle"></i>&nbsp;Run&nbsp;';
        document.getElementById("konsol_text").innerText="Console";
        document.getElementById("resultat_text").innerText="Result";
        document.getElementById("hentEksempel").innerHTML='<option value="-1">Load example...</option><option value="0">Clear all windows</option><optgroup label="Memory"><option value="1">Variables</option><option value="2">Constants</option><option value="3">Arrays</option></optgroup><optgroup label="Control structures"><option value="4">Selection (if-else)</option><option value="5">Repetition (for/while)</option></optgroup><optgroup label="Functions"><option value="6">With/without parameters</option><option value="7">Scope</option></optgroup>';        
        return "English";
    }
        
}

// -------------- H O V E D P R O G R A M ------------------

var appSprog=skiftSprog("Dansk"); 

document.addEventListener('click', function (event) {
    let omraadeliste = ["outputomraade", "konsolomraade"];
    const frameObj = document.getElementById("redigeringsomraade");

    if (event.target.classList.contains('execJs')) {
        const frameContent = document.getElementById("redigeringsomraade").value;
        fjernIndhold();

        if (derErDialog(frameContent)) {
            const iFrameKonsol = window.frames["konsolomraade"].document.getElementById("konsol");
            if (appSprog==="Dansk") {
                iFrameKonsol.innerHTML = "Når du bruger JavaScript dialogbokse i dit script (alert, confirm eller prompt), er konsolvinduet IKKE aktivt.";
            } else {
                iFrameKonsol.innerHTML = "When you use JavaScript dialog boxes in your script (alert, confirm or prompt), the console window is NOT active.";
            }
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
    var ok;
    const eksempelIndeks=document.getElementById("hentEksempel").value;
    if (eksempelIndeks>-1) {
        if (document.getElementById("redigeringsomraade").value.trim()!='') {
            if (appSprog==="Dansk"){
            ok = confirm("Overskriv eksisterende JavaScript ?");
        } else {
            ok = confirm("Overwrite the existing JavaScript ?");
        }

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

document.getElementById("dan_lang_link").addEventListener('click', function (e) {
    appSprog=skiftSprog("Dansk");
}, false);

document.getElementById("eng_lang_link").addEventListener('click', function (e) {
    appSprog=skiftSprog("English");
}, false);