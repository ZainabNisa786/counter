let counts = 0;

function increm() {
counts++;
document.getElementById('count').innerHTML = counts;
}
function reset() {
    counts = 0;
    document.getElementById('count').innerHTML = counts;
}