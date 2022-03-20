const pumps = [
    { distance: 0, price: 1.0 },
    { distance: 400, price: 1.1 },
    { distance: 800, price: 0.5 },
    { distance: 900, price: 0.3 },
    { distance: 1600, price: 0.8 },
    { distance: 2000, price: 0.1 }
];

const x = 895401, used = x / 100 * 8;
pumps.sort(function (a, b) { return a.distance - b.distance });
let i = 0, lastprice = pumps[i].price, lastdistance = 0, totalkm = 0, totalprice = 0;
while (totalkm < x) {
    if (pumps[i].price < lastprice) {
        totalprice += lastprice * ((pumps[i].distance - lastdistance) / 100 * 8);
        totalkm += pumps[i].distance - lastdistance;
        lastprice = pumps[i].price;
        lastdistance = pumps[i].distance;
    }
    if (i == pumps.length - 1) {
        totalprice += lastprice * ((x - totalkm) / 100 * 8);
        totalkm += x - totalkm;
        break;
    }
    i++;
}
console.log("gas used: " + used + " l");
console.log("total price: " + totalprice);
console.log("total km: " + totalkm);
