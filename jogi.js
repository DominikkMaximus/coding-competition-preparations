let pozicija = [0, 0, 0, 0], trenutnapozicija = 0;

console.log(ObrniJogi(0));

function ObrniJogi(n) {
    pozicija[trenutnapozicija] += n;
    console.log(pozicija);
    if (pozicija[trenutnapozicija] <= Math.min(pozicija)) {
        return "n";
    }
    else
        for (let i = 0; i < pozicija.length; i++)
            if (pozicija[i] == Math.min(pozicija)) {
                tmp = trenutnapozicija;
                trenutnapozicija = i;
                switch (Math.abs(tmp - i)) {
                    case 1: return "z";
                    case 2: return "y";
                    case 3: return "x";
                }
            }
}
