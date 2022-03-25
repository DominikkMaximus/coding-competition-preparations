const p = 3;//parseInt(Window.prompt("vnesi stevilo prog"));
let ocene = [], teki = [];//ocene = [7, 3.3, 6], teki = [1, 3, 2, 1, 1, 2];/*
for (let i = 0; i < p; i++) {
    ocene.push(Window.prompt("vnesi zacetno oceno proge"));
}
while (true) {
    let tek = parseInt(Window.prompt("vnesi progo po kateri se je spustil, ce je konec spustov, vnesite 0"));
    if (tek == 0) {
        break;
    }
    teki.push(tek);
}
//do tu vnasamo podatke
teki.sort();//uredimo po stevilkah proge, za namene optimizacije nadaljevanja programa
let j = 0, sum = 0;
for (let i = 0; i < p; i++) {
    let stevec = 0;
    for (j; j < teki.length; j++) {
        if (teki[j] - 1 == i) {//proge so oznacene od 1 do p, stejemo (i) pa od 0 do p, zato -1
            sum += ocene[i] * Math.pow(0.9, stevec);
            console.log(i, stevec, sum);
            stevec++;
        }
        else break;
    }
}
console.log(sum);
