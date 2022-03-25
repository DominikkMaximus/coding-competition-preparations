ustreza(597969);

function ustreza(a) {
    let p1 = true, p2 = true, p3 = true, p4 = true, stevec0 = 0, stevec1 = 0, stevec2 = 0, stevec3 = 0, stevec4 = 0, stevec5 = 0, stevec6 = 0, stevec7 = 0, stevec8 = 0, stevec9 = 0;
    a = parseInt(a);//odstrani prednje 0
    code = a.toString().split("");
    for (let i = 0; i < code.length; i++) {
        code[i] = parseInt(code[i]);
        if (code[i] == 0 || code[i] == 9)
            p1 = false;
        if (i != code.length - 1) {
            if (code[i] == code[i + 1])
                p2 = false;
            if (Math.abs(code[i] - code[i + 1]) >= 5)
                p3 = false;
        }
        switch (code[i]) {
            case 0: stevec0++; break;
            case 1: stevec1++; break;
            case 2: stevec2++; break;
            case 3: stevec3++; break;
            case 4: stevec4++; break;
            case 5: stevec5++; break;
            case 6: stevec6++; break;
            case 7: stevec7++; break;
            case 8: stevec8++; break;
            case 9: stevec9++; break;
        }
        if (stevec0 > 2 || stevec1 > 2 || stevec2 > 2 || stevec3 > 2 || stevec4 > 2 || stevec5 > 2 || stevec6 > 2 || stevec7 > 2 || stevec8 > 2 || stevec9 > 2) {
            p4 = false;
        }
    }
    if (p1)
        console.log("koda ustreza pogoju 1");
    else
        console.log("koda ne ustreza pogoju 1");
    if (p2)
        console.log("koda ustreza pogoju 2");
    else
        console.log("koda ne ustreza pogoju 2");
    if (p3)
        console.log("koda ustreza pogoju 3");
    else
        console.log("koda ne ustreza pogoju 3");
    if (p4)
        console.log("koda ustreza pogoju 4");
    else
        console.log("koda ne ustreza pogoju 4");
}

