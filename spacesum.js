const niz = Window.prompt("vnesi vesoljsko vsoto");
const arr = niz.split("");
let sum = 0, stevec = 1, txt = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "*") {
        sum += stevec;
        if (i == arr.length - 1)
            txt += stevec + " = "
        else
            txt += stevec + " + "
    }
    else
        stevec++
}
console.log(txt+sum);
