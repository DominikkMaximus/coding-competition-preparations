const hitri = "101010101010001000100001111100001000100100010101010100";
const pcr = "101010101010001000100001111100001000100100010101010110";
const razlicno = 5;
console.log(Primerjava(hitri, pcr, razlicno));
function Primerjava(s, t, n) {
    let hitri = s.split(""), pcr = t.split("");
    let stevec = 0, neujemanja = 0, max=0;
    for (let i = 0; i < hitri.length-n+1; i++) {
        stevec=0;
        for (let j = 0; j < n; j++) {
            stevec += Math.abs(parseInt(hitri[i+j]) - parseInt(pcr[i+j]));
            console.log("i= "+ i+ " j= "+j + " stevec= "+stevec);
        }
        if (stevec > max) {
            max = stevec;
            neujemanja = i;
        }
    }
    return neujemanja;
}
