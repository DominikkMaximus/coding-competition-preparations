
let odpri = true, meritve = [], raste;
while (true) {
    let x = GlobinaVode();
    if (meritve.length <= 12) {
        meritve.push(x);
    } else {
        meritve.shift();
        meritve.push(x);
    }
    raste = true;
    pada = true;
    for (let i = 0; i < meritve.length - 1; i++) {
        if (meritve[i] < meritve[i + 1])
            pada = false;
        if (meritve[i] > meritve[i + 1])
            raste = false;
    }
    if (raste)
        odpri = true;
    if (pada)
        odpri = false;
    if (x < 33) {
        odpri = false;
    } else if (x > 66) {
        odpri = true;
    }
    PremakniZapornico(odpri);
}

