var CCOUNT;
$(document).ready(function () {
    $('#btnct').click(function () {
        CCOUNT = $('#secondes').val();
        cdreset();
    });
});
var t, count;

function cddisplay() {
    document.getElementById('decompte').innerHTML = count;
}

function countdown() {
    cddisplay();
    if (count === 0) {
        document.getElementById('decompte').innerHTML = 'BISOUS ';
    } else {
        count--;
        t = setTimeout(countdown, 1000);
    }
}

function cdpause() {
    clearTimeout(t);
}

function cdreset() {
    cdpause();
    count = CCOUNT;
    cddisplay();
}
