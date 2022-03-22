const x = 3 //parseInt(Window.prompt("vnesi stevilo besed"));
let znaki = 0, nizprej = "", nizi = ["abc", "aaaa", "ba"];//sample input
for (let i = 0; i < x; i++) {
    //enter words
    nizzdaj = nizi[i];
    nizzdaj = nizzdaj.split("");
    for (let j = 0; j < nizzdaj.length; j++)
        if (nizzdaj[j] != nizprej[i] || j == nizzdaj.length - 1) {
            znaki += 2 * (nizprej.length - j);
            nizprej = nizzdaj;
            break;
        }
    znaki++;
    console.log(znaki);
}
console.log(znaki);
