const geslo = "eipe9thu";
MoznaGesla(geslo);
function MoznaGesla(gesl) {
    let geslo = gesl.split("");
    let dolzina=geslo.length+1;
    for (let i = 0; i < dolzina; i++) {
        geslo=gesl.split("");
        geslo.splice(i,0,".");
        for (let j = 0; j < geslo.length; j++) {
            if(parseInt(geslo[j]).toString()!= "NaN"|| geslo[j]!="."){
            {
                geslo[j]=geslo[j].toUpperCase();
                console.log(geslo.join(""));
                geslo[j]=geslo[j].toLowerCase();
            }
            
        }
    }
}}
