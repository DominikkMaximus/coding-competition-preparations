const hitri = "10101010101000100010000111110000100010010001010101010";
const pcr = "10101010101000100010000111110000100010010001010101011";
const razlicno = 5;
console.log(Primerjava(hitri, pcr, razlicno));
function Primerjava(s, t, n) {
    let hitri = s.split(""), pcr = t.split("");
    let stevec = 0, neujemanja = 0, max=0;
    for (let i = 0; i < hitri.length; i++) {
        for (let j = 0; j < n; j++) {
            stevec += Math.abs(parseInt(hitri[i]) - parseInt(pcr[i]));
            console.log("i= "+ i+ "j= "+j);
        }
        if (stevec > max) {
            max = stevec;
            neujemanja = i;
        }
    }
    return neujemanja;
}
