const m = 2, v = 1;
let B = [], x, lastsorted = 0, a = 0;
const A = [1, 3, 4, 9];//test case
while (true) {
    x = Naslednji(a);//modified to use test cases
    if (x != -1) {
        lastsorted = B.length-m;
        for (let i = -m; i < v + 1; i++)
            B.push(x + i);
        B.sort(function (a, b) { return a - b; });
        for (let i = lastsorted; i < B.length - 1; i++)
            if (B[i] == B[i + 1])
                B.splice(i, 1);
    }
    else break;
    console.log(B);
    a++;//for test purposes only
}

function Naslednji(a) {//wrote to test the code above
    if (a >= A.length)
        return -1;
    return A[a];
}
