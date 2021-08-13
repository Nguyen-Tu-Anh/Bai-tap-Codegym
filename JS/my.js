var a, b;
a = +document.getElementById('a').value;
b = +document.getElementById('b').value;
if(a == 0) {
    if(b == 0) {
        document.getElementById('result').innerHTML = 'Vo so nghiem';
    } else {
        document.getElementById('result').innerHTML = 'Vo nghiem';
    }
} else {
    document.getElementById('result').innerHTML = "Nghiem x = " + -b/a;
}