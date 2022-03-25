while (true) {//neskoncna zanka, da se bo program lahko vedno izvajal in bomo lahko cez npr 1 uro ponovno scetkali zobe
    if (Tipka()) {
        Motor(vklop);
        PozeniUro();
        while (true) {
            if (OdcitajUro() >= 120) {
                vklop = false;
                Motor(vklop);
                UstaviUro();
                break;
            } else if (!Tipka()) {
                vklop = false;
                Motor(vklop);
                UstaviUro();
                break;
            }
        }
    }
}
